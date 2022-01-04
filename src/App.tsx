import React from "react";
import "./App.css";
import CreateTodo from "./Component/CreateTodo";
import TodoCard from "./Component/TodoCard";
import { useState } from "react";

function App() {
  const localStorageData = localStorage.getItem("dName");
  const localStorageDataObject = localStorageData
    ? JSON.parse(localStorageData)
    : null;

  const [todoData, setTodoData] = useState(localStorageDataObject);

  const createNewTodo = (e: any) => {
    e.preventDefault();
    if (localStorageData) {
      let uniqueNum = localStorageDataObject.length + 1;
      const allIdArray = localStorageDataObject.map(
        (item: any) => item.todo_id
      );
      while (allIdArray.includes(uniqueNum)) {
        uniqueNum++;
      }
      const newAddedDataArray = [
        ...localStorageDataObject,
        {
          content: e.target[0].value,
          toggle: false,
          todo_id: uniqueNum,
        },
      ];
      localStorage.setItem("dName", JSON.stringify(newAddedDataArray));
      setTodoData(newAddedDataArray);
    } else {
      const newAddedDataArray = [
        {
          content: e.target[0].value,
          toggle: false,
          todo_id: 0,
        },
      ];
      localStorage.setItem("dName", JSON.stringify(newAddedDataArray));
      setTodoData(newAddedDataArray);
    }
  };

  return (
    <div className="container">
      <CreateTodo createNewTodo={createNewTodo}></CreateTodo>
      {todoData && (
        <TodoCard todoData={todoData} setTodoData={setTodoData}></TodoCard>
      )}
    </div>
  );
}

export default App;
