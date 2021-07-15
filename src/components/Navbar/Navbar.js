import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
      <div>
        <div className="navbar">
          <a href="#nfts">NFTs</a>
          <a className="active" href="/">
            HYTALE NFT MARKETPLACE
          </a>
          <a href="#about">ABOUT</a>
        </div>
      </div>
    );

}

export default Navbar
