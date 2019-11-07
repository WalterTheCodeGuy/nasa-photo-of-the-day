import React from "react";

const PhotoCard = (props) => {
  return (
    <div>
      <div>
        <h1>{props.getTitle}</h1>
        <p>{props.getDate}</p>
      </div>
      <img alt="outer space" src={props.getUrl} />
      <div>
        <p>{props.getExplanation}</p>
        <a className="App-link" href="https://www.nasa.gov">NASA</a>
      </div>
    </div>
  );
};

export default PhotoCard;