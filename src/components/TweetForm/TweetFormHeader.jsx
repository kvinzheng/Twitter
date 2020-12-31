import React from "react";
import { Twitter } from "react-feather";

import "./TweetFormHeader.css";

const TweetFormHeader = () => (
  <div className="TweetFormHeader">
    <img src="https://pbs.twimg.com/profile_images/1186398821560897536/1Vp8_at4_normal.jpg" />
    <div className="TweetFormHeader-detail">
      <Twitter
        size="20"
        fill="rgba(29,161,242,1.00)"
        className="TweetFormHeader-twitter-logo"
      />
      <span className="TweetFormHeader-name">Your Name</span>
      <span className="TweetFormHeader-account">@yourname</span>
    </div>
  </div>
);

export default TweetFormHeader;
