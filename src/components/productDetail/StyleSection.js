import StyleList from "../style/StyleList";
import BasicButton from "../commons/buttons/BasicButton";

function StyleSection({data}) {
  return(
    <div>
      <StyleList data={data} />
      <BasicButton
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