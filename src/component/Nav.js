import React from "react";

function Nav() {
  return (
    <nav className="ui raisedvery padded segment">
      <a href="/" className=" ui teal inverted segment">Img search engin</a>
      <div className="ui right floated header">
        <button className="ui button">
          <a href="/home">Home</a>
        </button>
        <button className="ui button">
          <a href="/about">About</ a>
        </button>
        <button className="ui button">
          <a href="/contact">Contact</a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
