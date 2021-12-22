import React from "react";
import profilePhoto from "../images/aya-header-img-small.jpeg";

function Header() {
  return (
    <div id="header">
      <img alt="smiling-woman" src={profilePhoto} />
      <h1> Allana Ordonez </h1>
      <h4> Software Engineer</h4>
      <h5> mongrove.io </h5>

      <button> Email </button>
      <button> LinkedIn </button>
    </div>
  )

}

export default Header;