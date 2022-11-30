import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note-container">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <div className="btn1">
          <IconButton color="primary" aria-label="delete" onClick={deleteNote}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Note;
