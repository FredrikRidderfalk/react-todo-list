import React from "react";

function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" className="checkbox" id="panties" name="panties" />
      <label for="panties">Panties</label>
    </div>
  );
}

export default TodoItem;
