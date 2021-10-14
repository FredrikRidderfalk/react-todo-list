import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        className="checkbox"
        id="panties"
        name="panties"
      />
      <label for="panties">{props.item.text}</label>
    </div>
  );
}

export default TodoItem;
