import styles from './IconButton.module.css';

function IconButton({iconSrc, style, onClick}) {
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