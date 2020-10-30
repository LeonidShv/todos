import React from "react";
import TodoList from "../TodoList";
import TodoFooter from "../TodoFooter";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { elements: [], text: "", filter: "All" };
    this.changeInput = this.changeInput.bind(this);
    this.submitBtn = this.submitBtn.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.toggleProperty = this.toggleProperty.bind(this);
    this.chooseFilter = this.chooseFilter.bind(this);
  }

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.submitBtn} className="todo__form">
          <input
            className="todo__input"
            type="text"
            onChange={this.changeInput}
            value={this.state.text}
          />
          <button className="todo__btn">Add Tasks</button>
        </form>

        <TodoList
          elements={this.state.elements}
          filter={this.state.filter}
          removeTask={this.removeTask}
          doneTask={this.doneTask}
        />

        <TodoFooter
          chooseFilter={this.chooseFilter}
          elements={this.state.elements}
          filter={this.state.filter}
          id={"todoFooter-" + 123}
        />
      </div>
    );
  }

  changeInput(e) {
    this.setState({ text: e.target.value });
  }

  submitBtn(e) {
    e.preventDefault();

    if (this.state.text.length === 0) {
      return;
    }

    let item = {
      text: this.state.text,
      id: Date.now(),
      deleted: false,
      active: true,
    };

    this.setState((state) => ({
      elements: state.elements.concat(item),
      text: "",
    }));
  }

  removeTask(id) {
    this.setState((state) => ({
      elements: state.elements.filter((item) => item.id !== id),
    }));
  }

  doneTask(id) {
    this.setState((state) => ({
      elements: this.toggleProperty(state.elements, id, "active"),
    }));
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  };

  chooseFilter(e) {
    let footerButtons = document.querySelectorAll(".todo__switch");
    footerButtons.forEach((btn) => btn.classList.remove("todo__switch-active"));
    e.target.classList.add("todo__switch-active");

    this.setState(() => ({
      filter: e.target.textContent,
    }));
  }
}

export default TodoApp;
