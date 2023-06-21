import styles from './Button.module.css';


interface Props{
    children : string;
    color ?: 'primary' | 'secondary' | 'danger';
    click : () => void;
}


const Button = ({children, color, click} : Props) => {
  return (
    <button type="button" className={styles['btn']} onClick={click}>{children}</button>
  )
}

export default Button