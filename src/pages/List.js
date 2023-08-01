import Nav from "../components/Nav";

export default function List({ items, checkHandler, removeHandler, flag, inputChange, submitHandler, newItems }) {
  if (flag === 0) {
    return (
      <>
        <Nav />
        <form
          className="border border-red-300 w-[50%] mx-auto mt-[3rem] py-2 px-4 rounded-full"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            className="w-[90%] p-3 focus:outline-none"
            placeholder="Enter your work...."
            value={newItems}
            onChange={inputChange}
            required
          ></input>
          <button className="ms-5 bg-yellow-500 px-3 py-1 rounded-full">
            +
          </button>
        </form>
        <h1 className="text-center my-[17rem] text-5xl text-slate-500">
          No task
        </h1>
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <form
          className="border border-red-300 w-[50%] mx-auto mt-[6rem] py-2 px-4 rounded-full"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            className="w-[90%] p-3 focus:outline-none"
            placeholder="Enter your work...."
            value={newItems}
            onChange={inputChange}
            required
          ></input>
          <button className="ms-5 bg-yellow-500 px-3 py-1 rounded-full">
            +
          </button>
        </form>
        <h1 className="text-center mt-[5rem] text-5xl">All Tasks:</h1>
        <ul className="w-[60%] mx-auto p-3 mt-[1rem]">
          {items.map((item) => (
            <li
              className="flex justify-between border border-red-500  my-[3rem] p-3 rounded-3xl"
              key={item.id}
            >
              <input
                type="checkbox"
                checked={item.check}
                onChange={() => checkHandler(item.id)}
              ></input>
              <p
                className="w-[90%] mx-5 self-center"
                style={
                  item.check
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {item.name}
              </p>
              <button
                className="bg-red-500 text-white px-3 py-1"
                onClick={() => removeHandler(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
