
interface Props{
    children : string;
    color ?: 'primary' | 'secondary' | 'danger';
    click : () => void;
}


const Button = ({children, color, click} : Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={click}>{children}</button>
  )
}

export default Button