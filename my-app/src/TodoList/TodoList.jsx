import React from "react";
import TodoItem from "../TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.chooseElements = this.chooseElements.bind(this);
  }

  render() {
    let todoItems = this.props.elements
      .filter(this.chooseElements)
      .map((element, i) => (
        <TodoItem
          element={element}
          index={i}
          key={element.id}
          removeTask={() => this.props.removeTask(element.id)}
          doneTask={() => this.props.doneTask(element.id)}
        />
      ));

    return <ul className="todo__list">{todoItems}</ul>;
  }

  chooseElements(element) {
    if (this.props.filter === "All") {
      return true;
    } else if (this.props.filter === "Active") {
      return element.active;
    } else if (this.props.filter === "Complited") {
      return !element.active;
    } else {
      alert("error");
      return "-1";
    }
  }
}

export default TodoList;
