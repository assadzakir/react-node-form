import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

// import Todo from "./Todo";
import "./App.css";

function App() {
  const [todo, settodo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {}, []);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(input);
    addTodoInDb(input);
    setInput("");
  };

  function addTodoInDb(item) {
    fetch("/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: input }),
    })
      .then(function (response) {
        console.log(response.json());
        // return response.json();
      })
      .then(function (data) {});
  }

  return (
    <div className="App">
      <h1>REACTJS TODO LIST 2020 </h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Add Items</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <Button
        disabled={!input}
        variant="contained"
        color="primary"
        type="submit"
        onClick={addTodo}
      >
        Add Items
      </Button>
    </div>
  );
}

export default App;
