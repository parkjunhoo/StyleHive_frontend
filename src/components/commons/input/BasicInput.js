import styles from './BasicInput.module.css';
import { useEffect, useRef } from 'react';

function BasicInput({value, placeholder, style, onChange}) {
  const input = useRef(null);
  useEffect(()=>{
    input.current.value = value;
  },[value])

  return (
    <input
    ref={input}
    style={style}
    onChange={onChange}
    placeholder={placeholder}
    className={styles.container}>
    </input>
  )
}

function BasicTextarea({value, placeholder, style, onChange}) {
  const input = useRef(null);
  useEffect(()=>{
    input.current.value = value;
  },[value])

  return (
    <textarea
    ref={input}
    style={style}
    onChange={onChange}
    placeholder={placeholder}
    className={styles.container}>
    </textarea>
  )
}

export {BasicInput, BasicTextarea};