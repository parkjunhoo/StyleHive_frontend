import { useState, useEffect } from 'react';
import styled from "./Carousel.module.css";

function Carousel({
  children,
  className,
  button, //버튼 렌더 여부
  nav,    //하단 바 렌더 여부
  style, // style
}) {
  const [index, setIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(()=>{
    const count = children ? children.filter((i)=>i!==null).flat().length : 0
    setItemCount(count);
    moveTo(count-1);
  },[children])
  //하단 바 생성
  const makeNavBtn = () => {
    const btns = [];
    for (let i = 0; i < itemCount; i++) {
      btns.push(<div
        key={i}
        className={styled.navbtn}
        style={{backgroundColor: i === index ? "black" : null}}
        ></div>);
    }
    return btns;
  };

  //슬라이더 이동
  function moveTo(i) {
    if (i >= 0 && itemCount > i){
      setIndex(i);
    }
  }

  return(
    <div 
    className={className}
    style={style}>
      <div className={styled.warpper}>
        <div style={{left: `${index * -100}%`}} className={styled.slider}>
          {children}
        </div>

        {button === true ? 
        <div className={styled.buttons}>
          <div onClick={()=>moveTo(index-1)}>◀</div>
          <div onClick={()=>moveTo(index+1)}>▶</div>
        </div> 
        : null}

        {nav === true ?
        <div className={styled.nav}>
          { makeNavBtn() }
        </div>
        : null}
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  button: true,
  nav: true,

};

export default Carousel;