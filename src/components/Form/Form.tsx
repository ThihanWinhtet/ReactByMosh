// import { FormEvent, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

function Form() {
  let scheme = z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least  3 characters." }),
    age: z.number({ invalid_type_error: "Age field is required." }).min(18),
  });

  type FormData = z.infer<typeof scheme>;

  let {
    register,
    handleSubmit,
    formState: { errors , isValid},
  } = useForm<FormData>({ resolver: zodResolver(scheme) });

  let getData = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(getData)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register("name")} type="text" className="form-control" />
        {errors.name && (
          <p className="text-danger mt-2"> {errors.name.message} </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="form-control"
        />
        {errors.age && (
          <p className="text-danger mt-2"> {errors.age.message} </p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Form;
