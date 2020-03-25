import React from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

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

  return (
    <div>
      <form className="create-note">
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
          <Fab
            onClick={event => {
              event.preventDefault();
              props.addNote(note);
              setCreateAreaActive(false);
              setNote({
                title: "",
                content: ""
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
