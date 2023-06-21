// import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

function Form() {

  let {register, handleSubmit} = useForm();
  
  let handleSubmition = (data : FieldValues )=>{
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmition)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input {...register('name')} type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Age</label>
        <input {...register('age')} type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

export default Form;
