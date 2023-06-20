import Button from "./components/Button";

Button;

function App() {
  // let list = ["New York", "Paris", "Tokyo", "Koyto"];
  return (
    <div>
      <Button color="danger">hello button</Button>

      {/* <ListGroup items={list} heading="Cities" onSelectedIndex={(item)=> item} onSelected={(item)=> console.log(item, 'lll')}/> */}
    </div>
  );
}
export default App;
