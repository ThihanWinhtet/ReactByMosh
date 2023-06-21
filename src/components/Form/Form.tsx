import { FormEvent, useRef } from "react";

function Form() {

  let refName = useRef<HTMLInputElement>(null);
  let refAge = useRef<HTMLInputElement>(null);
  let person = {name : '', age : ''};

  let handleSubmit = (event : FormEvent)=>{
      event.preventDefault();
      if(refName.current !== null)
        person.name = refName.current.value
      if(refAge.current !== null)
        person.age = refAge.current.value
      console.log(person);
      
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input ref={refName} type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Age</label>
        <input ref={refAge} type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default Form;
