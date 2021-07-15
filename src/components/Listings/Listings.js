import React from "react";
import "./Listings.css";

function Listings() {
  return (
    <div>
      <section id="nfts"></section>
      <div className="title">NFTs</div>

      <div className="grid">
        <div className="sample1">
          <img
            src="images/alterverses.jpeg"
            alt="alterverses"
            width="50%"
            height="60%"
          ></img>
          <h3>"Alterverses"</h3> <h3>Starting Bid: 0 ETH</h3>
          <h4>Description: Hytale Concept Art - Alterverses </h4>
          <h4>Current Owner: </h4>
          <a href="/">Take Me Home!</a>
        </div>

        <div className="sample1">
          <img src="images/gaia.jpeg" alt="gaia" width="50%" height="60%"></img>
          <h3>"Gaia"</h3> <h3>Price: 0 ETH</h3>
          <h4>Description: Hytale Mobile Wallpaper - Gaia</h4>
          <h4>Current Owner: </h4>
          <a href="/">Take Me Home!</a>
        </div>
      </div>
    </div>
  );
}

export default Listings;
