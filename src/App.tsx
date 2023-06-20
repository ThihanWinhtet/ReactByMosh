
// import Button from "./components/Button";
// import ShowAlert from "./components/ShowAlert";
import ListGroup from "./components/ListGroup";

function App() {
  let list = ["New York", "Paris", "Tokyo", "Koyto"];
  // let [call, callnum] = useState(false);
  return (
    <div>
      {/* {call === true &&  <ShowAlert close={()=> callnum(false)}></ShowAlert>}
      <Button color="danger"  click={()=> callnum(true)}>hello button</Button> */}

      <ListGroup items={list} heading="Cities" onSelectedIndex={(item)=> item} onSelected={(item)=> console.log(item, 'lll')}/>
    </div>
  );
}
export default App;
