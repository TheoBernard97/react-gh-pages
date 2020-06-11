import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        ⓒ <a href="https://theobernard97.github.io">Théo Bernard</a> {year}
      </p>
    </footer>
  );
}

export default Footer;
