function ListGroup() {
  let list = ["New York", "Paris", "Tokyo", "Koyto"];
  return (
    <>
      <h1>Hello Lists</h1>
      <ul className="list-group">
        {list.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
