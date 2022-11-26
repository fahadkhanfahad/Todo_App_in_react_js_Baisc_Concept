import { useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";

export default function App() {
  const [currval, setVal] = useState("");
  const [item, setItem] = useState([]); //creaing array
  function additem(e) {
    setVal(e.target.value);
  }

  function addedList() {
    setItem((olditem) => {
      return [...olditem, currval];
    });
    setVal("");
  }

  function deleteitem(id) {
    console.log("deleted");
    setItem((olditem) => {
      return olditem.filter((arr, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="mainheading">
      <div className="heading">
        <h1 style={{ backgroundColor: "orange" }}>Todo App</h1>
        <h2>Never Miss any Task </h2>
        <input
          type="text"
          placeholder="Enter an item to add"
          onChange={additem}
          value={currval}
        ></input>
        <button onClick={addedList}>+</button>

        <hr />
        <ul>
          {item.map((item, index) => {
            return (
              <Todolist
                text={item}
                key={index}
                id={index}
                onSelect={deleteitem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
