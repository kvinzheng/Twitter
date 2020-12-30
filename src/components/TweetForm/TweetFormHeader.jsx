import React from "react";
import { Twitter } from "react-feather";

import "./TweetFormHeader.css";

const TweetFormHeader = () => {
  return (
    <div className="TweetFormHeader-profile">
      <img src="https://pbs.twimg.com/profile_images/1186398821560897536/1Vp8_at4_normal.jpg" />
      <div className="TweetFormHeader-profile-detail">
        <Twitter
          size="20"
          fill="rgba(29,161,242,1.00)"
          className="TweetFormHeader-profile-twitter-logo"
        />
        <span className="TweetFormHeader-profile-name">Your Name</span>
        <span className="TweetFormHeader-profile-account">@yourname</span>
      </div>
    </div>
  );
};
export default TweetFormHeader;
