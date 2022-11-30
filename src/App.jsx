import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Note-app.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import CreateNote from "./component/CreateNote";
import Note from "./component/Note";
const App = () => {
  const [addItem, setItem] = useState([]);
  const addNote = (note) => {
    setItem((oldData) => {
      return [...oldData, note];
    });
  };

  const onDelete = (id) => {
    setItem((oldData) => {
      return oldData.filter((currnData, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="note-sec">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
