import styles from './StyleRegPopup.module.css';
import BasicPopup from './BasicPopup';
import Carousel from '../carousel/Carousel';
import cameraIcon from '../../../assets/images/camera.svg';

import { useState, useEffect, useRef } from 'react';

function StyleRegPopup() {
  const fileInput = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onPhotoUploadClick = () => {
    fileInput.current.click();
  }

  const onFileChanged = (e) => {
    setFileList(p=>[...p,...e.target.files]);
  }

  useEffect(()=>{
    console.log(fileList);
  },[fileList])

  return (
    <BasicPopup>
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <p className={styles.titleText}>스타일 등록</p>
        </div>
        <div className={styles.verticalDiv}>
          <div className={styles.photoUploadDiv}>
            <div className={styles.photoDisplayDiv}>
              <Carousel style={{width:"100%", height:"100%"}}>
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
          </div>
          <div className={styles.writeDiv}>스타일 올리기</div>
        </div>
      </div>
    </BasicPopup>
  )
}

export default StyleRegPopup;