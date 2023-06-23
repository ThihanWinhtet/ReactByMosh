import { useEffect, useState } from "react";

function ProductList({category} : {category : string}) {
  let [products, setProduct] = useState<string[]>([]);


  useEffect(()=>{
    console.log('here is category ', category);
    setProduct(['hello', 'world'])
  }, [category])

  return <div>ProductList</div>;
}

export default ProductList;
