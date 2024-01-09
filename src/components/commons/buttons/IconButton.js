import styles from './IconButton.module.css';

function IconButton({iconSrc, style}) {
  console.log(iconSrc);
  return (
    <div 
    style={style}
    className={styles.container}>
      <img src={iconSrc} alt="Iconbutton">
      </img>
    </div>
  )
}

export default IconButton;