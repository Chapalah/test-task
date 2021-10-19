import React from "react";

const Card = ({ card }) => {
  return (
    <div
      className="card"
      onClick={(e) => e.currentTarget.classList.toggle("focus")}
    >
      <div className="card__rectangle"></div>
      <div className="card__emblem">
        <button className="card__add">
          <img src="../img/button-media.svg" alt="svg" />
        </button>
        <div className="card__emblem-img">
          <img src={card.emblemSrc} alt="logo" />
        </div>
      </div>
      <h3 className="card__subheader">Business & Management</h3>
      <div className="card__info">
        <h2 className="card__info-header">
          Master of Business Administration (CMI)
        </h2>
        <div className="card__info-list">
          <div className="card__info-list-item first">
            <div className="card__info-list-item-img">
              <img src="../img/vector3.svg" alt="svg" />
            </div>
            <p>Postgraduate</p>
          </div>
          <div className="card__info-list-item">
            <div className="card__info-list-item-img second">
              <img src="../img/vector2.svg" alt="svg" />
            </div>
            <p>Every 12 weeks</p>
          </div>
        </div>
        <div className="card__info-list-media">
          <p>Postgraduate</p>
          <h2 className="card__info-header">£12,650</h2>
        </div>
      </div>
      <button className="card__button">More Info</button>
      {/* card hover */}
      <div className="hover">
        <div className="card-hover">
          <button className="card-hover__add">
            <img src="../img/button.svg" alt="svg" />
          </button>
          <h3 className="card-hover__header">
            MSc Data Analytics and Information Systems Management
          </h3>
          <div className="card-hover__info">
            <h4 className="card__info-header">Duration:</h4>
            <p>Minimum: 18 months</p>
            <p>Maximum: 36 months</p>
            <h4 className="card__info-header second-hover">Start Dates:</h4>
            <p>January, April, July, October</p>
            <h2 className="sum">£8,500</h2>
          </div>
          <button className="card__button card__button-hover">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
