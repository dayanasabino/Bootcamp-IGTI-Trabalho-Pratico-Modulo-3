import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

export default class InputFullSalary extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label>
          Salário Bruto
          <CurrencyInput
            decimalSeparator=","
            thousandSeparator="."
            prefix="R$"
            value={value}
            //onBlur={this.handleChange}
            //onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}
