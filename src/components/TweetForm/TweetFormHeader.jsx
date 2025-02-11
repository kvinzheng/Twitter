import React, { memo } from "react";
import { Twitter } from "react-feather";

import "./TweetFormHeader.css";

const TweetFormHeader = memo(() => (
  <div className="TweetFormHeader">
    <img src="http://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_normal.jpg" />
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
));

export default TweetFormHeader;
