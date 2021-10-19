import "./scss/main.scss";
import React from "react";
import Menu from "./components/Menu";
import CardsList from "./components/CardsList";

const App = () => {
  return (
    <div className="container">
      <h1 className="header">Find Your Course</h1>
      <div className="columns">
        <Menu />
        <div className="column">
          <CardsList cards={cards} />
          <div className="column__footer">
            <p>More programmes</p>
            <button className="column__btn">
              <img src="../img/more.svg" alt="svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

const cards = [
  {
    emblemSrc: "../img/Group.svg",
  },
  {
    emblemSrc: "../img/Buf.svg",
  },
  {
    emblemSrc: "../img/Dan.svg",
  },
  {
    emblemSrc: "../img/Buf.svg",
  },
  {
    emblemSrc: "../img/Buf.svg",
  },
  {
    emblemSrc: "../img/Bar.svg",
  },
];
