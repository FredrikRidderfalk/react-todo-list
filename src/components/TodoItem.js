import React from "react";

function TodoItem(props) {
  const completedItemStyle = () => {
    const styling = {
      color: "gray",
      textDecoration: "line-through",
    };
    if (props.item.completed) {
      return styling;
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
        className="checkbox"
        id={props.item.id}
        name={props.item.id}
      />
      <label for={props.item.id} style={completedItemStyle()}>
        {props.item.text}
      </label>
    </div>
  );
}

export default TodoItem;
