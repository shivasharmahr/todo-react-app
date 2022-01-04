import React from "react";

const CreateTodo = ({ createNewTodo }: any) => {
  return (
    <>
      <div className="new-to-do-container">
        <form onSubmit={createNewTodo}>
          <textarea cols={30} rows={4}></textarea>
          <button value="submit">Create New Todo</button>
        </form>
      </div>
    </>
  );
};

export default CreateTodo;
