import Nav from "../components/Nav";

export default function Active({ items }) {
  const activeArray = items.filter((item) => item.check === false);
  if (activeArray.length === 0) {
    return (
      <>
        <Nav />
        <h1 className="text-center mt-[15rem] text-5xl">No active Task</h1>
      </>
    );
  } else {
    return (
      <>
      <Nav/>
        <h1 className="text-center mt-[5rem] text-5xl">Active Tasks are:</h1>
        <ul className="w-[60%] mx-auto p-3 mt-[1rem]">
          {activeArray.map((element) => (
            <li className="flex justify-between border border-red-500  my-[3rem] p-3 rounded-3xl">
              <p
                className="w-[90%] mx-5 self-center"
                style={
                  element.check
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {element.name}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
