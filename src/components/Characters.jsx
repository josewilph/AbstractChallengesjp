import React from "react";
const Characters = ({ img, info, title, link }) => {
  return (
    <article className="character-card">
      <div className="img-character">
        <img src={img} alt="img" />
      </div>
      <div className="info-character">
        <h4>{title}</h4>
        <div>
          <p>{info}</p>
        </div>
        <a href={link}>Learn More</a>
      </div>
    </article>
  );
};

export default Characters;
