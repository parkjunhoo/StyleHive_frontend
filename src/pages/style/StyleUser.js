import styles from './StyleUser.module.css';
import UserProfile from '../../components/style/UserProfile';
import LineTab from "../../components/commons/tabs/LineTab";
import StyleList from "../../components/style/StyleList";
import { useEffect } from 'react';

function StyleUser() {

  const tabs = [
    {
      title: "게시물 6",
      action: ()=>console.log("게시물 클릭"),
    },
    {
      title: "태그 상품 9",
      action: ()=>console.log("태그 상품 클릭"),
    }
  ];

  return (
    <div className={styles.container}>
      <UserProfile />
      <LineTab 
        style={{
          borderBottom: "1px solid #f0f0f0",
          padding: "0",
        }} 
        tabs={tabs}/>
      <StyleList data={[]}/>
    </div>
  )
}

export default StyleUser;