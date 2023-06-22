// import { FormEvent, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

function Form() {

  let scheme = z.object({
    name: z.string().min(3),
    age: z.string().min(18),
  });

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver : zodResolver(scheme)});


  type FormData = z.infer<typeof scheme>;

  let handleSubmition = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmition)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input {...register("name")} type="text" className="form-control" />
        {errors.name && (
          <p className="text-danger mt-2">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input {...register("age")} type="number" className="form-control" />
        {errors.age && (
          <p className="text-danger mt-2">{errors.age.message}</p>
        )}

        {/* { errors.name?.type == 'required' && <p className="text-danger mt-2">The name field is required.</p>} */}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
