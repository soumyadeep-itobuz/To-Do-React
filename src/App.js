import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import List from "./pages/List";
import { useState } from "react";
import Completed from "./pages/Completed";
import Active from "./pages/Active";

export default function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [newItems, setNewItems] = useState("");
  const completedArray = [];

  let flag;

  function checkHandler(id) {
    const checkArray = items.map((item) =>
      item.id === id ? { ...item, check: !item.check } : item
    );
    setItems(checkArray);
    localStorage.setItem("list", JSON.stringify(checkArray));
  }

  function removeHandler(id) {
    const removeArray = items.filter((item) => item.id !== id);
    setItems(removeArray);
    localStorage.setItem("list", JSON.stringify(removeArray));
  }

  function inputChange(event) {
    setNewItems(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    for (let i = 0; i < items.length; i++) {
      if (newItems.trim() === items[i].name) {
        alert("Task Already Exists");
        return false;
      }
    }
    if (!newItems.trim()) {
      alert("Empty Task Not Allowed");
      return false;
    }

    const addItem = [
      ...items,
      {
        name: newItems,
        id: new Date().getTime(),
        check: false,
      },
    ];
    setItems(addItem);
    localStorage.setItem("list", JSON.stringify(addItem));
    setNewItems("");
  }

  if (items.length === 0) {
    flag = 0;
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <List
                items={items}
                checkHandler={checkHandler}
                removeHandler={removeHandler}
                flag={flag}
                inputChange={inputChange}
                submitHandler={submitHandler}
                newItems={newItems}
              />
            }
          ></Route>
          <Route
            path="/completed"
            element={<Completed items={items} />}
          ></Route>
          <Route path="/active" element={<Active items={items} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
