
interface Props{
    cartItem : string[];
    clear : () => void;
}

const Cart = ({cartItem, clear} : Props) => {
  return (
    <>
    <div>Cart</div>
    <ul>
        {cartItem.map(item=> <p key={item}>{item}</p>)}
    </ul>
    <button onClick={clear}>clear</button>
    </>
  )
}

export default Cart