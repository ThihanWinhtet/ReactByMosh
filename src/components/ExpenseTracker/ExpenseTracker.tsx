import { zodResolver } from "@hookform/resolvers/zod";
import { produce } from "immer";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

function ExpenseTracker() {
  let scheme = z.object({
    description: z.string().min(3),
    amount: z.number().min(1),
    category: z.string(),
  });

  let [items, setItem] = useState([
    {
      description: "test desc",
      amount: "124",
      category: "test cate",
      id: 0,
    },
  ]);

  let [filtered, setFilter] = useState([
    {
      description: "test desc",
      amount: "124",
      category: "test cate",
      id: 0,
    },
  ]);

  type FormData = z.infer<typeof scheme>;

  let { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(scheme),
  });

  console.log(items);

  //   Get Sum
  const sum = items
    .filter((item) => item.amount)
    .reduce((sum, current) => sum + parseInt(current.amount), 0);

  const sumfil = filtered
    .filter((item) => item.amount)
    .reduce((sum, current) => sum + parseInt(current.amount), 0);

  //   Add expense
  let onSubmit = (data: FieldValues) => {
    setItem(
      produce((draf) => {
        draf.push({
          description: data.description,
          amount: data.amount,
          category: data.category,
          id: Math.random(),
        });
      })
    );
  };

  //   filter
  let filter = async (data: ChangeEvent<HTMLSelectElement>) => {
    if (data.target.value != "AllCategories") {
      setFilter(items.filter((item) => item.category == data.target.value));
      console.log(filtered, items, "f and i");
    } else {
      setFilter([]);
    }
    return filter;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            {...register("description")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            {...register("category")}
            name="category"
            id="category"
            className="form-control"
          >
            <option value="Groceries">Groceries</option>
            <option value="Utalities">Utalities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>

      {/* filter */}
      <select onChange={filter} className="form-control mt-4">
        <option value="AllCategories">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utalities">Utalities</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      {/* Table  */}
      <div className="pt-4">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>

          {filtered.length === 0 ? (
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                  <td className="text-center">
                    <button
                      onClick={() => {
                        setItem(
                          produce((draf) => {
                            draf.splice(index, 1);
                          })
                        );
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>total</td>
                <td>{sum}</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                  <td className="text-center">
                    <button
                      onClick={() => {
                        setItem(
                          produce((draf) => {
                            draf.splice(items.indexOf(item), 1);
                          })
                        );
                        setFilter(
                            produce((draf) => {
                              draf.splice(items.indexOf(item), 1);
                            })
                          );
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>total</td>
                <td>{sumfil}</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}

export default ExpenseTracker;
