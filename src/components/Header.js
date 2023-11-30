import React from "react";
import { TopBar } from "../styles/topbar";

const Header = props => {
  return (
    <TopBar>
      <button>
        <img src="images/bt_list.svg" />
      </button>
      <h2>{props.children}</h2>
      <button>
        <img src="images/bt_info.svg" />
      </button>
    </TopBar>
  );
};

export default Header;
