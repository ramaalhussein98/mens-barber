import React from "react";

const TiltleDescrption = ({ title, description }) => {
  return (
    <div className="mainTitle">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default TiltleDescrption;
