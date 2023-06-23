
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";

function App() {


  let [category, setCategory] = useState('');

  useEffect(()=>{
    document.title = 'my app'
  });

  return (
    <div>
      <select name="" id="" className="form-control" onChange={(event)=>setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">House Hold</option>
      </select>
      <ProductList category={category}></ProductList>
    </div>
  );
}
export default App;
