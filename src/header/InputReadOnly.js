import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
import css from './input.module.css';

export default class InputReadOnly extends Component {
  render() {
    const { description, value, style } = this.props;
    return (
      <div className={css.inputReadOnly}>
        <label>
          {description}
          <input
            type="text"
            decimalSeparator=","
            thousandSeparator="."
            prefix="R$ "
            readOnly
            value={value}
            style={style}
          />
          {/*<CurrencyInput
            decimalSeparator=","
            thousandSeparator="."
            prefix="R$ "
            readOnly
            value={value}
            style={style}
          />*/}
        </label>
      </div>
    );
  }
}
