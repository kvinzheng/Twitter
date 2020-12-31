import React from "react";
import TweetForm from "../TweetForm";

import "./index.css";

const CenterMenu = () => (
  <div className="CenterMenu">
    <div className="CenterMenu-title">
      <span>Latest Tweets</span>
    </div>
    <TweetForm />
  </div>
);

export default CenterMenu;
