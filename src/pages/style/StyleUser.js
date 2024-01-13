import styles from './StyleUser.module.css';
import UserProfile from '../../components/style/UserProfile';
import LineTab from "../../components/commons/tabs/LineTab";
import StyleList from "../../components/style/StyleList";
import BasicSpiner from '../../components/commons/spinner/BasicSpiner';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StyleUser() {

  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [commData, setCommData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(loading);
  const [hasNext, setHasNext] = useState(true);
  const hasNextRef = useRef(hasNext);

  const [tabIndex, setTabIndex] = useState(0);

  const target = useRef(null);

  const obOption = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }
  const obCallback = () => {
    if(loadingRef.current || !hasNextRef.current) return;
    setPage(p=>p+1);
  }
  const ob = new IntersectionObserver(obCallback, obOption);

  const getUserInfo = async () => {
    const res = await axios.get(`http://localhost:8080/api/community/find-user/${id}`);
    setUserData(res.data);
  }

  const getCommInfo = async (page) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:8080/api/community/uid/${id}/5/${page}`);
    const comm = res.data.commList;
    if(comm) setCommData(p=>[...p,...comm]);
    setHasNext(res.data.hasNextPage);
    setLoading(false);
  }

  useEffect(()=>{
    getUserInfo();

    return () => {
      ob.disconnect();
    }
  },[])

  useEffect(()=>{
    ob.observe(target.current);
  },[target])

  useEffect(()=>{
    loadingRef.current = loading;
  },[loading])

  useEffect(()=>{
    hasNextRef.current = hasNext;
  },[hasNext])

  useEffect(()=>{
    getCommInfo(page);
  },[page])


  return (
    <div className={styles.container}>
      {userData ? 
      <div>
        <UserProfile userData={userData} />
        <LineTab 
          style={{
            borderBottom: "1px solid #f0f0f0",
            padding: "0",
          }} 
          tabs={[
            {title: `게시물 ${userData.communityCount}`, action: () => {}},
            {title: `태그 상품 ${userData.productCount}`, action: () => {}},
          ]}/>
        <StyleList data={commData}/>
        {loading ? <BasicSpiner/> : null}
      </div>
      :<BasicSpiner />}
      <div ref={target} style={{height:"5vh"}}></div>
    </div>
  )
}

export default StyleUser;