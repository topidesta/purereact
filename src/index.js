import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function MyThing() {
  return (
    <>
      {/* 1 */}
      <div className="book">
        <div className="title">The Title</div>
        <div className="author">The Author</div>
        <ul className="stats">
          <li className="rating">5 Starts</li>
          <li className="isbn">12-3456780910</li>
        </ul>
      </div>

      {/* 2a (Single Line) */}
      <div>NewLine Test</div>

      {/* 2b (Empty newlins) */}
      <div>Empty NewLines Here</div>

      {/* 2c (Spaces with newlines) */}
      <div>&nbsp;Non-breaking &nbsp;Spaces&nbsp;</div>

      {/* Inserting spaces when content spans multiple lines */}
      <div>
        Line1
        {"  "}
        Line2
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyThing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
