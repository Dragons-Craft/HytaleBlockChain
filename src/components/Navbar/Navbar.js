import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a href="#nfts">NFTs</a>
          <a href="#about">ABOUT</a>
          <a className="active" href="/">
            HYTALE NFT MARKETPLACE
          </a>
          <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">{this.props.account}</span></small>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Navbar
