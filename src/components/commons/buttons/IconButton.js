import styles from './IconButton.module.css';

function IconButton({iconSrc, style, onClick}) {
  console.log(iconSrc);
  return (
    <div 
    onClick={onClick}
    style={style}
    className={styles.container}>
      <img src={iconSrc} alt="Iconbutton">
      </img>
    </div>
  )
}

export default IconButton;