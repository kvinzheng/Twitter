import React from "react";
import TweetForm from "../TweetForm";

import "./index.css";

const CenterMenu = () => {
  return (
    <div className="CenterMenu">
      <div className="CenterMenu-title">
        <span >Latest Tweets</span>
      </div>
      <TweetForm />
    </div>
  );
};

export default CenterMenu;
