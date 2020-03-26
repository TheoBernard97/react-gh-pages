import React from "react";
import IconButton from "@material-ui/core/IconButton";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

function Header(props) {
  return (
    <header>
      <h1>KeeperApp</h1>
      <IconButton
        onClick={() => {
          props.changeTheme();
        }}
      >
        {props.darkMode ? <Brightness2Icon /> : <WbSunnyIcon />}
      </IconButton>
    </header>
  );
}

export default Header;
