import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "#2f2f2f",
            boxShadow: "none",
            padding: "10px 0px"
          }}
        >
          <ToolBar>
            <div className="header_logo">
              <div className="font_right header_logo_venue">The Venue</div>
              <div className="header_logo_title">Musical</div>
            </div>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
