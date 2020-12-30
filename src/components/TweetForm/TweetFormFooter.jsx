import React from "react";
import {  Target, Camera } from "react-feather";

import "./TweetFormFooter.css";

const TweetFormFooter = ({error, countRemain}) => {
  return (
    <div className="TweetFormFooter-options">
      {error.length ? (
        <div className="TweetFormFooter-warning">{error}</div>
      ) : null}

      <div className="TweetFormFooter-item">
        <Target size="20" />
      </div>
      <div className="TweetFormFooter-item">
        <Camera size="20" />
      </div>
      <div className="TweetFormFooter-item TweetFormFooter-remain-count">{countRemain}</div>
    </div>
  );
};
export default TweetFormFooter;
