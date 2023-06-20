import { MouseEvent } from "react";

function ListGroup() {
  let list = ["New York", "Paris", "Tokyo", "Koyto"];
  //   list = [];
  const handleClick = (event : MouseEvent) => {console.log(event);
  }
  return (
    <>
      <h1>Hello Lists</h1>
      {list.length === 0 && <p>no items at all</p>}
      <ul className="list-group">
        {list.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
