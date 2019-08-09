import React from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';

function Card({ icon, title, children }) {
  return (
    <Fade left>
    <div className="card mt-5">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
    </Fade>
  );
}

export default Card;
