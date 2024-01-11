import styles from './StyleProduct.module.css';
import StyleList from '../../components/style/StyleList';
import BasicSpiner from '../../components/commons/spinner/BasicSpiner';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StyleProduct() {
  const { id } = useParams();
  const [styleData, setStyleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(loading);
  const [hasNext, setHasNext] = useState(true);
  const hasNextRef = useRef(hasNext);
  const [page, setPage] = useState(1);

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

  const getStyleData = async (page) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:8080/api/community/pid/${id}/10/${page}`);
    setStyleData(p=>[...p,...res.data.commList]);
    setHasNext(res.data.hasNextPage);
    setLoading(false);
  }

  useEffect(()=>{
    return () => {
      ob.disconnect();
    }
  },[])

  useEffect(()=>{
    loadingRef.current = loading;
  },[loading])

  useEffect(()=>{
    hasNextRef.current = hasNext;
  },[hasNext])

  useEffect(()=>{
    getStyleData(page);
  },[page])

  useEffect(()=>{
    ob.observe(target.current);
  },[target])


  return (
    <div className={styles.container}>
        <StyleList data={styleData}/>
      <div ref={target} style={{height:"5vh"}}></div>
      {loading ? <BasicSpiner/> : null}
    </div>
  )
}

export default StyleProduct;