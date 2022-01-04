import React, { useState } from "react";

const Card = ({
  content,
  updateData,
  deleteData,
  todoID,
  updateToggleChange,
  toggle,
}: any) => {
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [isToggle, setIsToggle] = useState<boolean>(toggle);

  const onsubmit = (e: any) => {
    e.preventDefault();
    if (e.target[1].value === "edit") {
      setIsEdit(false);
    } else {
      setIsEdit(true);
      updateData(todoID, e.target[0].value);
    }
  };

  const toggleChange = (e: any) => {
    if (e.target.value === "not-checked") {
      setIsToggle(true);
      updateToggleChange(todoID, true);
    } else {
      setIsToggle(false);
      updateToggleChange(todoID, false);
    }
  };

  return (
    <div className={`to-do-container${isToggle ? " bg-green" : ""}`}>
      <form onSubmit={onsubmit}>
        <textarea cols={30} rows={5} disabled={isEdit}>
          {content}
        </textarea>

        <button
          className="edit-button"
          value={isEdit ? "edit" : "submit"}
          disabled={isToggle ? true : false}
        >
          {isEdit ? "Edit" : "Save"}
        </button>
      </form>

      <div>
        <button className="delete-button" onClick={() => deleteData(todoID)}>
          Delete
        </button>
        <button
          className="delete-button"
          value={isToggle ? "checked" : "not-checked"}
          onClick={toggleChange}
        >
          {isToggle ? "Not-Completed" : "Completed"}
        </button>
      </div>
    </div>
  );
};

export default Card;
