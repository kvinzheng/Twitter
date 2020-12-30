import React from "react";

import LeftMenu from "../LeftMenu";
import RightMenu from "../RightMenu";
import CenterMenu from "../CenterMenu";

function MainPage() {
  return (
    <div className="MainPage">
      <LeftMenu />
      <CenterMenu />
      <RightMenu />
    </div>
  );
}
export default MainPage;
