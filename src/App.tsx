
// import Button from "./components/Button";
// import ShowAlert from "./components/ShowAlert";
import ListGroup from "./components/ListGroup";
import {AiFillAlert} from "react-icons/ai";

function App() {
  let list = ["New York", "Paris", "Tokyo", "Koyto"];
  // let [call, callnum] = useState(false);
  return (
    <div>
      <AiFillAlert color="blue"></AiFillAlert>
      {/* {call === true &&  <ShowAlert close={()=> callnum(false)}></ShowAlert>}
      <Button color="danger"  click={()=> callnum(true)}>hello button</Button> */}

      <ListGroup items={list} heading="Cities" onSelectedIndex={(item)=> item} onSelected={(item)=> console.log(item, 'lll')}/>
    </div>
  );
}
export default App;
