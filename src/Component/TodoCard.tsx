import React from "react";
import Card from "./Card";

const TodoCard = ({ todoData, setTodoData }: any) => {
  const updateData = (todoIdSent: any, updatedContent: any) => {
    const data = todoData.map((todoItem: any) => {
      if (todoItem.todo_id === todoIdSent) {
        return { ...todoItem, content: updatedContent };
      } else {
        return { ...todoItem };
      }
    });
    setTodoData(data);
    localStorage.setItem("dName", JSON.stringify(data));
  };

  const deleteData = (todoIdSent: any) => {
    let newData = [...todoData];
    todoData.map((todoItem: any, index: any) => {
      if (todoItem.todo_id === todoIdSent) {
        newData.splice(-(todoData.length - index), 1);
      }
    });
    setTodoData(newData);
    localStorage.setItem("dName", JSON.stringify(newData));
  };

  const updateToggleChange = (todoIdSent: any, toggleValue: boolean) => {
    const data = todoData.map((todoItem: any) => {
      if (todoItem.todo_id === todoIdSent) {
        return { ...todoItem, toggle: toggleValue };
      } else {
        return { ...todoItem };
      }
    });
    setTodoData(data);
    localStorage.setItem("dName", JSON.stringify(data));
  };

  const allTodo = todoData.map((todoItem: any) => {
    return (
      <Card
        key={todoItem.todo_id}
        todoID={todoItem.todo_id}
        content={todoItem.content}
        toggle={todoItem.toggle}
        updateData={updateData}
        deleteData={deleteData}
        updateToggleChange={updateToggleChange}
      />
    );
  });

  return <div className="to-do-holder">{allTodo}</div>;
};

export default TodoCard;
