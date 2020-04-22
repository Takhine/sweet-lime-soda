import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-list__item">Print</li>
        <li className="footer-list__item">Motion</li>
        <li className="footer-list__item">About</li>
        <li className="footer-list__item">Contact</li>
      </ul>
      <div className="copyright">
        <small className="copyright__text">Sweet Lime Soda 2020 | Terms & Conditions</small>
      </div>
    </div>
  );
}
