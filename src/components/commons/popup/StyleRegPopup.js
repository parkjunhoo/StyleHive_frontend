import styles from './StyleRegPopup.module.css';
import { debounce } from "lodash";
import BasicPopup from './BasicPopup';
import Carousel from '../carousel/Carousel';
import cameraIcon from '../../../assets/images/camera.svg';

import { useState, useEffect, useRef, useCallback } from 'react';
import BasicButton from '../buttons/BasicButton';
import BasicAccordion from '../accordion/BasicAccordion';
import {BasicInput, BasicTextarea} from '../input/BasicInput';
import axios from 'axios';
import ProductCardSmall from '../card/ProductCardSmall';
import BasicSpiner from '../spinner/BasicSpiner';
import Swal from 'sweetalert2';

function StyleRegPopup({onClose}) {
  const fileInput = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [previewList, setPreviewList] = useState([]);
  const [selectProductList, setSelectProductList] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchPage, setSearchPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(loading);
  const [hasNext, setHasNext] = useState(true);
  const hasNextRef = useRef(hasNext);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const target = useRef(null);

  const obOption = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }
  const obCallback = () => {
    if(loadingRef.current || !hasNextRef.current) return;
    setSearchPage(p=>p+1);
  }
  const ob = new IntersectionObserver(obCallback, obOption);


  const getSearchData = async (keyword,page) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:8080/api/product/find-keyword/${keyword}/5/${page}`);
    setHasNext(res.data.hasNextPage);
    setSearchData(p=>[...p,...res.data.productList]);
    setLoading(false);
  }

  const onSearchChange = debounce((e) => {
    const keyword = e.target.value;
    setSearchKeyword(e.target.value);
    if(keyword === "") return;
    setSearchData([]);
    setSearchPage(1);
  }, 300);

  const onInputsChange = (e,setter) => {
    const text = e.target.value;
    setter(text);
  }

  const onProductCardAdd = useCallback((productData) => {
    const newList = [...selectProductList, productData];
    const noDuplicatedList = newList.filter((i,idx,arr)=>{
      return arr.findIndex(f=>f.productId === i.productId) === idx;
    })
    setSelectProductList(noDuplicatedList);
  },[selectProductList]);

  const onProductCardRemove = useCallback((productData)=> {
    const newList = selectProductList.filter((i)=>i.productId !== productData.productId);
    setSelectProductList(newList);
  },[selectProductList])

  const onPhotoUploadClick = () => {
    fileInput.current.click();
  }

  const onFileChanged = (e) => {
    setFileList(p=>[...p,...e.target.files]);
    fileInput.current.value=null;
  }

  const onRemovePhoto = (idx) => {
    setFileList(p=> p.filter((i,index)=> idx !== index));
  }

  const onReg = useCallback(async ()=>{
    const tagList = tag.split(" ").map(i => ({ tagName: i }));

    const productTagList = selectProductList.map((i)=>({
      productId:i.productId
    }));

    const sendData = {
      "community":{
        commTitle: title,
        commContents: content,
        commCategory: 0,
      },
      "tagList": tagList,
      "productTagList": productTagList,
    }

    const formData = new FormData();

    formData.append("sendData", new Blob([JSON.stringify(sendData),{type:"application/json"}]));
    fileList.forEach(i=>formData.append("file", i));

    const res = await axios.post("http://localhost:8080/api/community/write",formData,
      {
        "Content-Type": "multipart/form-data",
      }
    );
    
    if(res.data.message === "success") {
      Swal.fire({
        title: "등록 완료",
        text: "스타일이 등록되었습니다.",
        icon: "success"
      }).then(()=>{
        window.location.href=`/style/post/${res.data.commNo}`
      });
    }
  },[fileList, selectProductList, title, content, tag])

  useEffect(()=> {
    return () => {
      ob.disconnect();
    }
  },[])

  useEffect(()=> {
    ob.observe(target.current);
  },[target])

  useEffect(()=>{
    const previews = fileList.map((i)=>URL.createObjectURL(i));
    setPreviewList(previews);
  },[fileList])

  useEffect(()=>{
    if(!searchKeyword) return;
    getSearchData(searchKeyword,searchPage);
  },[searchPage, searchKeyword])

  useEffect(()=>{
    loadingRef.current = loading;
  },[loading])

  useEffect(()=>{
    hasNextRef.current = hasNext;
  },[hasNext])

  return (
    <BasicPopup onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <p className={styles.titleText}>스타일 등록</p>
        </div>
        <div className={styles.verticalDiv}>
          <div className={styles.photoUploadDiv}>
            <div className={styles.photoDisplayDiv}>
              <Carousel 
              style={{width:"100%", height:"100%"}}>
                {previewList.length > 0 ? previewList.map((i,idx)=>
                    <img 
                    key={idx} 
                    alt="preview" 
                    src={i}
                    onClick={()=>(onRemovePhoto(idx))}/>
                ) : null}
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <div 
                  onClick={onPhotoUploadClick}
                  className={styles.uploadZone}>
                    <div className={styles.photoUploadBtn}>
                      <img alt="uploadBtn" src={cameraIcon}></img>
                      <input onChange={(e)=>{onFileChanged(e)}} ref={fileInput} style={{display:"none"}} accept=".jpg, .jpeg, .png, .gif, .bmp, .webp" type="file"/>
                      <p>사진 등록</p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className={styles.fileListDiv}>
              {fileList.map((i,idx)=>{
                return(
                  <div 
                  key={idx}
                  onClick={()=>{onRemovePhoto(idx)}}
                  className={styles.removePhotoButton}>
                    <img src={URL.createObjectURL(i)}  alt="removebtn"/>
                    <div className={styles.removeButtonDeco}>X</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.writeDiv}>
            <div className={styles.productTagDiv}>
              <div className={styles.productTagList}>
                {selectProductList.map((i,idx)=> {
                  return (
                    <ProductCardSmall
                      key={idx}
                      productData = {i}
                      onClick={onProductCardRemove}
                    />
                  )
                })}
              </div>
              <BasicAccordion
                summ = {<BasicButton className={styles.tagAddBtn}>상품 태그 추가 ▼</BasicButton>}
                content = {
                <div className={styles.productTagSearchDiv}>
                  <div>
                    <BasicInput 
                      value=""
                      placeholder={"상품을 검색하세요."}
                      style={{borderRadius:"0px"}}
                      onChange={onSearchChange}
                    />
                    {searchData.map((i,idx)=>{
                      return (
                        <ProductCardSmall 
                          onClick={onProductCardAdd}
                          key={idx}
                          productData = {i}
                        />
                      )
                    })}
                    {(loading && searchKeyword.length > 0) ? <BasicSpiner/> : null}
                    <div ref={target} style={{height:"5px"}}></div>
                  </div>
                </div>}
              />
            </div>
            <div className={styles.styleInfoDiv}>
              <BasicInput
                value=""
                placeholder="제목을 입력하세요"
                style={{borderRadius:"0", height:"15%"}}
                onChange={(e)=>onInputsChange(e, setTitle)}
              />
              <BasicTextarea
              value=""
              placeholder="내용을 입력하세요"
              style={{borderRadius:"0", height:"75%"}}
              onChange={(e)=>onInputsChange(e, setContent)}
              />
              <BasicInput
                value=""
                placeholder="태그를 입력하세요. 태그는 띄어쓰기로 구분됩니다."
                style={{borderRadius:"0", height:"10%"}}
                onChange={(e)=>onInputsChange(e, setTag)}
              />
            </div>
            <div className={styles.btnDiv}>
              <BasicButton
              onClick={onReg}
              style={{backgroundColor:"#222", color:"white", width:"50%", height:"100%"}}
              >
                등록
              </BasicButton>
            </div>
          </div>
        </div>
      </div>
    </BasicPopup>
  )
}

export default StyleRegPopup;