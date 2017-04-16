import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      cart: window.cart,
      localCurrency: props.localCurrency,
      inventory: props.inventory,
    };

    // Repeatedly sync global cart to local cart
    this.watcher = window.setInterval(
      () => {
        this.setState({
          cart: window.cart,
        });
      },
      1000,
    );
    this.CurrencyConverter = props.currencyConverter;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      localCurrency: nextProps.localCurrency,
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.watcher);
  }

  render() {
    return (
      <div>
        <h2>Cart</h2>
        {this.state.cart.length === 0
          ? <p>Nothing in the cart</p>
          : <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <th>
                    Product
                  </th>

                  <th>
                    Price
                  </th>
                </tr>
                {this.state.cart.map((itemId, idx) => (
                  <tr key={idx}>
                    <td>
                      {this.state.inventory[itemId].product}
                    </td>

                    <td>
                      {this.CurrencyConverter.convert(
                        this.state.inventory[itemId].price,
                        this.state.inventory[itemId].currency,
                        this.state.localCurrency,
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
      </div>
    );
  }
}

Cart.propTypes = {
  inventory: React.PropTypes.object.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
  currencyConverter: React.PropTypes.object.isRequired,
};

export default Cart;
