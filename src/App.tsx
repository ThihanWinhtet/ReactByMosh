// import Button from "./components/Button";
// import ShowAlert from "./components/ShowAlert";
// import ListGroup from "./components/ListGroup";

import Form from "./components/Form/Form";

function App() {

  return (
    <div>
      <Form></Form>
    </div>
  );
}
export default App;

// import Like from "./components/Like/Like";
// let [clicked, setClick] = useState(false);
{
  /* <Like
        color={clicked ? "red" : "black"}
        click={() => {
          if (clicked === false) {
            setClick(true);
            console.log(clicked);
          } else {
            console.log(clicked);

            setClick(false);
          }
        }}
      ></Like> */
}

// import Button from "./components/Button/Button";

// import { AiFillAlert } from "react-icons/ai";

// function App() {
//   let list = ["New York", "Paris", "Tokyo", "Koyto"];
//   // let [call, callnum] = useState(false);
//   return (
//     <div>
// <Button
//         color="primary"
//         click={() => {
//           console.log("hello check");
//         }}
//       >
//         Check
//       </Button>
//       <AiFillAlert color="blue"></AiFillAlert>
//       {/* {call === true &&  <ShowAlert close={()=> callnum(false)}></ShowAlert>}
//       <Button color="danger"  click={()=> callnum(true)}>hello button</Button> */}

//       <ListGroup items={list} heading="Cities" onSelectedIndex={(item)=> item} onSelected={(item)=> console.log(item, 'lll')}/>
//     </div>
//   );
// }
// export default App;
