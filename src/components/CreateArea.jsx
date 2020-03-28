import React from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

function CreateArea(props) {
  const [createAreaActive, setCreateAreaActive] = React.useState(false);
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevValue => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
    setCreateAreaActive(false);
  }

  function handleClick(event) {
    note.title === "" && note.content === ""
      ? alert("You can't create an empty note.")
      : submitNote(event);
  }

  return (
    <div className="create-area">
      <form className="create-note" autoComplete="off">
        {createAreaActive && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={createAreaActive ? "3" : "1"}
          onChange={handleChange}
          onClick={() => {
            setCreateAreaActive(true);
          }}
          value={note.content}
        />
        <Zoom in={createAreaActive ? true : false}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
      <Button className="btn-clear" onClick={() => props.deleteAll()}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default CreateArea;
