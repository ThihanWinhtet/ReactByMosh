import { FormEvent, useRef, useState } from "react";

function Form() {

  // let refName = useRef<HTMLInputElement>(null);
  // let refAge = useRef<HTMLInputElement>(null);
  // let person = {name : '', age : ''};

//   if(refName.current !== null)
//     person.name = refName.current.value
  // if(refAge.current !== null)
  //   person.age = refAge.current.value
  // console.log(person);

  let [person, setPerson] = useState({
    name : '',
    age : ''
  });


  let handleSubmit = (event : FormEvent)=>{
      event.preventDefault();
      console.log(person);
      
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input onChange={(event)=> setPerson({...person, name : event.target.value})} type="text" value={person.name} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Age</label>
        <input onChange={(event)=> setPerson({...person, age : event.target.value})} type="number" value={person.age} className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default Form;
