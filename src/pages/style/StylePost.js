import styles from "./StylePost.module.css";
import BasicButton from "../../components/commons/buttons/BasicButton";
import Carousel from "../../components/commons/carousel/Carousel";
import ProductCard from "../../components/commons/card/ProductCard";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StylePost() {

  const nav = useNavigate();

  const onClickUser = () => {
    nav(`/style/user/@maknoon`);
  }

  useEffect(()=>{

  },[]);

  return (
    <div className={styles.container}>
      <div onClick={onClickUser} className={styles.profileDiv}>
        <img 
        className={styles.profileImg} src="https://i.namu.wiki/i/5uZfHmW_mse1JTTHDavqJ5Rh0DbyCB3bpuQdeq_h3gxc3kWdagjaBxehv-6t5Z7Rwwo8PPFH7bOqldByJ4MfhA.webp" alt="userProfile" />
        <div className={styles.profileNameDiv}>
          <p className={styles.nameText}>MakNoon</p>
          <p className={styles.timeText}>10시간 전</p>
        </div>
        <div className={styles.btnDiv}>
          <BasicButton className={styles.followBtn}><p className={styles.followBtnText}>팔로우</p></BasicButton>
          <BasicButton className={styles.moreBtn}><span className={styles.moreBtnText}>···</span></BasicButton>
        </div>
      </div>
      <Carousel
       style={{height:"90vh"}}
      >
        <img src="https://menu.mt.co.kr/mtasp/dailygame/2013/20130531_4da7ed47a2efa850ceb129e020b9eaa2.jpg" alt="img" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvsUhWdocJbSBKC8iNwrc2dq4LR9x9Cck4g&usqp=CAU" alt="img" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEOaeVrqVpOTs-2_a0nNwG__i-g-oZ8VvJA&usqp=CAU" alt="img" />
      </Carousel>
      <p className={styles.tagText}>상품 태그 <strong>1</strong>개</p>
      <ul className={styles.tagProductList}> 
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
      <div className={styles.btnDiv}>
        <button>좋아요</button>
        <button>댓글</button>
        <button style={{marginLeft:"auto"}}>공유</button>
      </div>
      <p className={styles.likeText}>좋아요 <strong>13</strong>개</p>
    </div>
  )
}

export default StylePost;