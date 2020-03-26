import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [noteList, setNoteList] = React.useState([]);

  function addNote(note) {
    setNoteList(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNoteList(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function changeTheme() {
    setDarkMode(prevTheme => !prevTheme);
  }

  return (
    <div className={darkMode === true ? "main-div dark-mode" : "main-div"}>
      <Header darkMode={darkMode} changeTheme={changeTheme} />
      <CreateArea addNote={addNote} />
      {noteList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
