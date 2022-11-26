import React from "react";

function Todolist(props) {
  return (
    <div>
      <div className="markbutton">
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
      </div>
      <>{props.text}</>
    </div>
  );
}
export default Todolist;
