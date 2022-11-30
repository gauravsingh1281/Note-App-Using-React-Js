import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [show, setShow] = useState(false);

  const inputVal = (e) => {
    const { name, value } = e.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const updateNote = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expendData = () => {
    setShow(true);
  };
  const hideData = () => {
    setShow(false);
  };
  return (
    <>
      <div className="main-note" onDoubleClick={hideData}>
        <form>
          {show && (
            <input
              type="text"
              name="title"
              value={note.title}
              placeholder="Title"
              autoComplete="off"
              onChange={inputVal}
            />
          )}
          <textarea
            name="content"
            value={note.content}
            placeholder="Take a note..."
            autoComplete="off"
            onChange={inputVal}
            onClick={expendData}
          ></textarea>
        </form>
        {show && (
          <div className="btn2">
            <IconButton color="error" aria-label="add" onClick={updateNote}>
              <AddIcon />
            </IconButton>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateNote;
