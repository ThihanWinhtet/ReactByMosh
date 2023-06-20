import { useState } from "react";
import './ListGroup.css'

interface Props {
  items: string[];
  heading: string;
  onSelected : (item : string) => void;
  onSelectedIndex : (item : number) => number;
}

function ListGroup({ items, heading, onSelected, onSelectedIndex}: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
                onSelected(item);
                let inde = onSelectedIndex(index);
                
              setSelectedIndex(inde);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
