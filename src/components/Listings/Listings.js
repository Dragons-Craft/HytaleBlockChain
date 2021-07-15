import React, { Component } from 'react';
import "./Listings.css";

class Listings extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Product</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct(name, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Product Price"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
        <p>&nbsp;</p>

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
            <h3>"Alterverses"</h3> <h3>Price: 0 ETH</h3>
            <h4>Description: </h4>
            <h4>Current Owner: </h4>
            <a href="/">Take Me Home!</a>
          </div>

          <div className="sample1">
            <img src="images/gaia.jpeg" alt="gaia" width="50%" height="60%"></img>
            <h3>"Gaia"</h3> <h3>Price: 0 ETH</h3>
            <h4>Description: </h4>
            <h4>Current Owner: </h4>
            <a href="/">Take Me Home!</a>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            {this.props.products.map((product, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
                  <td>
                    {!product.purchased
                      ? <button
                        name={product.id}
                        value={product.price}
                        onClick={(event) => {
                          this.props.purchaseProduct(event.target.name, event.target.value)
                        }}
                      >
                        Buy
                      </button>
                      : null
                    }
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Listings;