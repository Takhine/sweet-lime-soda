import React from "react";
// Images
import title from "static/images/title.png";
import landscape from "static/images/landscape.png";
import portrait from "static/images/portrait.png";
import FloatingText from './FloatingText';
export default function Header() {
  return (
    <div className="header">
      <div className="top-row">
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
            <FloatingText style="header-floating" />
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
      <div className="bottom-row">
        <article className="business">
          <h2 className="business__message">
            Specializing in high-end art buying and production services
          </h2>
        </article>
      </div>
    </div>
  );
}
