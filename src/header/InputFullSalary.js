import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  handleChange = (event) => {
    console.log(event.target.value);
    const novoSalario = event.target.value;
    this.props.onChange(novoSalario);
  };

  render() {
    const { value } = this.props;
    return (
      <div>
        <label>
          Salário Bruto
          <input
            type="number"
            id="salarioBruto"
            placeholder="Informe o salário bruto"
            value={value}
            onChange={this.handleChange}
          />
          {/*
          <CurrencyInput
            decimalSeparator=","
            thousandSeparator="."
            prefix="R$"
            value={value}
            //onBlur={this.handleChange}
            onChange={this.handleChangeInput}
          />
          */}
        </label>
      </div>
    );
  }
}
