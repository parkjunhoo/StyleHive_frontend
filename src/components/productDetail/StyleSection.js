import StyleList from "../style/StyleList";
import BasicButton from "../commons/buttons/BasicButton";

function StyleSection({data, pid}) {
  return(
    <div>
      <StyleList data={data} />
      <BasicButton
        onClick={()=>{window.location.href=`/style/product/${pid}`}}
        style={{
          width: "fit-content",
          padding: "10px 30px",
          fontSize: "14px",
          fontWeight: "400",
          margin: "15px auto",
        }}
      >더보기</BasicButton>
    </div>
  )
}

export default StyleSection;