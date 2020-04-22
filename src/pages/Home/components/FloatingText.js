import React, {useEffect} from "react";
import plus from "static/images/plus.svg";

export default function FloatingText(props) {
    const {styles} = props;

    useEffect(()=>{
        console.log(styles);
    },[])
  return (
    <div className={["floating",props.style].join(" ")}>
      <img className="floating__image" src={plus} alt="Plus" />
      <h3 className="floating__text">{props.text}</h3>
    </div>
  );
}
