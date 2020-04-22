import React from "react";
// Images
import title from "static/images/title.png";
import landscape from "static/images/landscape.png";
import portrait from "static/images/portrait.png";

export default function Header() {
  return (
    <div className="header">
      <section className="left-col">
        <div className="title">
          <img className="title__image" src={title} alt="Sweet Lime Soda" />
          <div className="navigation">
            <ul className="navigation__list">
              <li className="navigation__list__item">Print</li>
              <li className="navigation__list__item">Motion</li>
              <li className="navigation__list__item">About</li>
              <li className="navigation__list__item">Contact</li>
            </ul>
          </div>
        </div>
        <div className="landscape">
          <img
            className="landscape__image"
            src={landscape}
            alt="Bahurupt Sweet Lime Soda"
          />
        </div>
      </section>
      <section className="right-col">
        <div className="portrait">
          <img
            className="portrait__image"
            src={portrait}
            alt="Bahurupt Sweet Lime Soda"
          />
        </div>
      </section>
    </div>
  );
}
