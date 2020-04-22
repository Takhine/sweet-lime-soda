import React from "react";
import FloatingText from "./FloatingText";
import purusham from "static/images/purusham.png";
import purushamOld from "static/images/purusham-old.png";
import idc from "static/images/idc.png";

import purusham1 from "static/images/purusham-1.png";
import purusham2 from "static/images/purusham-2.png";
import purusham3 from "static/images/purusham-3.png";
import pankaj from "static/images/pankaj.png";

import deal from "static/images/deal.png";
import deal1 from "static/images/deal-1.png";
import deal2 from "static/images/deal-2.png";
import deal3 from "static/images/deal-3.png";

export default function Brands() {
  return (
    <div className="brands">
      <div className="purusham">
        <img
          className="purusham__image"
          src={purusham}
          alt="Purusham Sweet Lime Soda"
        />
        <FloatingText style="purusham-floating" text="Purusham 2019" />
      </div>

      <div className="image-grid">
        <img
          className="image-grid-item"
          src={purusham1}
          alt="Purusham Sweet Lime Soda Fashion Design"
        />
        <img
          className="image-grid-item"
          src={purusham2}
          alt="Purusham Sweet Lime Soda Fashion Design"
        />
        <img
          className="image-grid-item"
          src={purusham3}
          alt="Purusham Sweet Lime Soda Fashion Design"
        />
      </div>

      <div className="pankaj">
        <img
          className="pankaj__image"
          src={pankaj}
          alt="Pankaj Sweet Lime Soda"
        />
        <FloatingText style="pankaj-floating" text="Pankaj 2019" />
      </div>

      <div className="purusham">
        <img
          className="purusham__image"
          src={purushamOld}
          alt="Purusham Sweet Lime Soda"
        />
        <FloatingText style="purusham-floating" text="Purusham 2018" />
      </div>

      <div className="deal">
        <img
          className="deal__image"
          src={deal}
          alt="Deal Jeans Sweet Lime Soda"
        />
        <FloatingText style="deal-floating" text="Deal Jeans" />
      </div>

      <div className="image-grid">
        <img
          className="image-grid-item"
          src={deal1}
          alt="Deal Jeans Sweet Lime Soda Fashion Design"
        />
        <img
          className="image-grid-item"
          src={deal2}
          alt="Deal Jeans Sweet Lime Soda Fashion Design"
        />
        <img
          className="image-grid-item"
          src={deal3}
          alt="Deal Jeans Sweet Lime Soda Fashion Design"
        />
      </div>

      <div className="idc">
        <img
          className="idc__image"
          src={idc}
          alt="IDC 2019 Sweet Lime Soda"
        />
        <FloatingText style="idc-floating" text="IDC 2019" />
      </div>
    </div>
  );
}
