import React, { Component } from 'react';

class Inventory extends Component {
  constructor(props) {
    super();
    this.state = {
      localCurrency: props.localCurrency,
      inventory: props.inventory,
    };

    this.addToCart = props.addToCart;
    this.CurrencyConverter = props.currencyConverter;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      localCurrency: nextProps.localCurrency,
    });
  }

  onAddToCart(itemId) {
    this.addToCart(itemId);
  }

  render() {
    return (
      <div>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <th>
                Product
              </th>

              <th>
                Image
              </th>

              <th>
                Description
              </th>

              <th>
                Price
              </th>

              <th>
                Cart
              </th>
            </tr>

            {Object.keys(this.state.inventory).map(itemId => (
              <tr key={itemId}>
                <td>
                  {this.state.inventory[itemId].product}
                </td>

                <td>
                  <img src={this.state.inventory[itemId].img} alt="" />
                </td>

                <td>
                  {this.state.inventory[itemId].desc}
                </td>

                <td>
                  {this.CurrencyConverter.convert(
                    this.state.inventory[itemId].price,
                    this.state.inventory[itemId].currency,
                    this.state.localCurrency,
                  )}
                </td>

                <td>
                  <button onClick={() => this.onAddToCart(itemId)}>
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Inventory.propTypes = {
  inventory: React.PropTypes.object.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
  currencyConverter: React.PropTypes.object.isRequired,
  addToCart: React.PropTypes.func.isRequired,
};

export default Inventory;
