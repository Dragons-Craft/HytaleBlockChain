import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a href="#nfts">NFTs</a>
          <a className="active" href="/">
            HYTALE NFT MARKETPLACE
          </a>
          <a href="#about">ABOUT</a>
          <small className="text-white"><span id="account">{this.props.account}</span></small>
        </div>
      </div>
    );
  }
}

export default Navbar