import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

// function MainContent() {
//   const todoItems = todosData.map((item) => (
//     <TodoItem key={item.id} item={item} />
//   ));

//   return <main className="todo-list">{todoItems}</main>;
// }

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <main className="todo-list">{todoItems}</main>;
  }
}

export default MainContent;
