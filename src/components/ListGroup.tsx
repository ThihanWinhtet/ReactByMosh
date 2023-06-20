import { useState } from "react";

function ListGroup() {
  let list = ["New York", "Paris", "Tokyo", "Koyto"];
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <ul className="list-group">
      {list.map((item, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item "
          }
          key={item}
          onClick={() => {
            setSelectedIndex(index);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
