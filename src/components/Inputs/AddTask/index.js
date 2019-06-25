import React, { Component } from "react";

import "./styles.css";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };

    this.onEnter = this._onEnter.bind(this);
  }

  _onChange(e) {
    const { target } = e;
    this.setState({ inputValue: target.value });
  }

  _onEnter(e) {
    const { addTodo } = this.props;
    const { inputValue } = this.state;

    if (e.key === "Enter") {
      const newTodo = {
        name: inputValue,
        completed: false
      };
      addTodo(newTodo);
      return this.setState({ inputValue: "" });
    }
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="input-container">
        <input
          type="text"
          className="task-input"
          placeholder="New task..."
          value={inputValue}
          onChange={e => this._onChange(e)}
          onKeyPress={e => this.onEnter(e)}
        />
      </div>
    );
  }
}

export default AddTask;
