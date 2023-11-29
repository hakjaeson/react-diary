import React from "react";
import { TopBar } from "../styles/topbar";

const Header = () => {
  return (
    <TopBar>
      <button>
        <img src="images/bt_list.svg" />
      </button>
      <p>타이틀</p>
      <button>
        <img src="images/bt_info.svg" />
      </button>
    </TopBar>
  );
};

export default Header;
