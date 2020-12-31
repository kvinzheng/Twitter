import React from "react";
import { Target, Camera } from "react-feather";
import PropTypes from "prop-types";

import "./TweetFormFooter.css";

const TweetFormFooter = ({ error, countRemain }) => (
  <div className="TweetFormFooter-options">
    {error.length ? (
      <div className="TweetFormFooter-warning">{error}</div>
    ) : null}

    <div className="TweetFormFooter-item">
      <a href="#" aria-label="target icon">
        <Target size="20" />
      </a>
    </div>
    <div className="TweetFormFooter-item">
      <a href="#" aria-label="camera icon">
        <Camera size="20" />
      </a>
    </div>
    <div className="TweetFormFooter-item TweetFormFooter-remain-count">
      {countRemain}
    </div>
  </div>
);

TweetFormFooter.propTypes = {
  error: PropTypes.string,
  countRemain: PropTypes.number,
};

export default TweetFormFooter;
