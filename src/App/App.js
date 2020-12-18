import TodoApp from "../TodoApp/TodoApp.jsx";
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Todos</h1>
        <TodoApp />
      </>
    );
  }
}

export default App;
