// import Button from "./components/Button";
// import ShowAlert from "./components/ShowAlert";
// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import { produce } from "immer";

function App() {
  let [tag, setTag] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug1", fixed: false },
  ]);

  let check = () => {
    setTag(
      produce((draf) => {
        let bug = draf.find((bug) => bug.id == 1);

        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {tag.map((bug) => (
        <p key={bug.id}>
          {bug.id}, {bug.fixed == true ? "fixed" : "new"}
        </p>
      ))}
      <button onClick={check}> Check </button>
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
