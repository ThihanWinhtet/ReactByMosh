import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}
function Expandable({ children, maxChar }: Props) {
    let [more, setMore] = useState(false);
  
  return (
    <>
      <p>
        {more ? children : children.substring(0, maxChar)}
      </p>
      <button onClick={()=>{setMore(!more)}}>{more ? 'seeless' : 'seemore'}</button>
    </>
  );
}

export default Expandable;
