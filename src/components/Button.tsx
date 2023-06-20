
interface Props{
    children : string;
    color ?: 'primary' | 'secondary' | 'danger';
}


const Button = ({children, color} : Props) => {
  return (
    <button type="button" className={"btn btn-" + color}>{children}</button>
  )
}

export default Button