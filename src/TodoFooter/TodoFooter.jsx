import React from "react";

class TodoFooter extends React.Component {
  constructor(props) {
    super(props);
    this.chooseElements = this.chooseElements.bind(this);
  }

  render() {
    let amountTasks = this.props.elements.filter(this.chooseElements).length;
    let nameCategory = this.props.filter.toLowerCase();

    return (
      <div className="todo__footer" key={this.props.id}>
        <p className="todo__taks-amount">
          {amountTasks} {nameCategory}
        </p>
        <div className="todo__controls">
          <button
            onClick={this.props.chooseFilter}
            className="todo__switch todo__switch-active"
          >
            All
          </button>
          <button onClick={this.props.chooseFilter} className="todo__switch">
            Active
          </button>
          <button onClick={this.props.chooseFilter} className="todo__switch">
            Complited
          </button>
        </div>
      </div>
    );
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

export default TodoFooter;
