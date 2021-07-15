import React, { Component } from 'react';
import "./Listings.css";

class Listings extends Component {

  render() {
    return (
      <section id="nfts">
        <div className="title">NFTs</div>

        <div className="grid">
          {this.props.products.map((product, key) => {
            return (
              <div className="sample1" key={key}>
                {/* <img src="media/imgs/{product.name}.jpeg" alt={product.name} width="50%" height="60%"></img> */}
                <img src="media/imgs/Gaia.jpeg" alt={product.name} width="50%" height="60%"></img>
                
                <h3>{product.name}</h3> <h3>Price: {window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</h3>
                <h4>Description: {product.description}</h4>
                <h4>Current Owner: {product.owner}</h4>
                
                <a href="/">Take Me Home!</a>
                <br />

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
              </div>
            )
          })}
        </div>

        <div className="title">Add NFTs Product</div>
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

      </section>
    );
  }
}

export default Listings;