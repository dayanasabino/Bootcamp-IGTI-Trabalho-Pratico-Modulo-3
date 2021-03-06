import React, { Component, Fragment } from 'react';
import InputFullSalary from './header/InputFullSalary';
import InputReadOnly from './header/InputReadOnly';
import ProgressBarSalary from './bar/ProgressBarSalary';
import { calculateSalaryFrom } from './salary/salary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salarioBruto: 0,
      baseINSS: 0,
      descINSS: 0,
      percDescInss: 0,
      baseIRPF: 0,
      descIRPF: 0,
      salarioLiquido: 0,
      percSalarioLiquido: 0,
    };
  }

  handleChange = (event) => {
    console.log(`handleChange ${event}`);
    const valueInserted = event;
    this.calculateValues(valueInserted);
    console.log(`handleChange ${this.state.salarioBruto}`);

    console.log(`handleChange ${this.state.salarioBruto}`);
  };

  calculateValues = (salarioBruto) => {
    console.log('calculateValues INICIO');
    const calc = calculateSalaryFrom(salarioBruto);
    this.setState({
      salarioBruto,
      baseINSS: calc.baseINSS,
      descINSS: calc.discountINSS,
      //percDescInss:,
      baseIRPF: calc.baseIRPF,
      descIRPF: calc.discountIRPF,
      salarioLiquido: calc.netSalary,
      //percSalarioLiquido: 0,
    });
    console.log(calc);
    console.log(`D ${this.state.baseINSS}`);
    console.log(`D ${this.state.descINSS}`);
    console.log(`D ${this.state.baseIRPF}`);
    console.log(`D ${this.state.descIRPF}`);
    console.log(`D ${this.state.salarioLiquido}`);
  };

  render() {
    const {
      salarioBruto,
      baseINSS,
      descINSS,
      percDescInss,
      baseIRPF,
      descIRPF,
      salarioLiquido,
      percSalarioLiquido,
    } = this.state;

    return (
      <div>
        <Fragment>
          <div className="container">
            <h3 className="center-align"> React - Cálculo de Salário </h3>
            <InputFullSalary
              value={salarioBruto}
              //onBlur={this.handleChange}
              onChange={this.handleChange}
            />
            <InputReadOnly
              description="Base INSS"
              value={baseINSS}
              style={styles.styleBaseINSS}
            />
            <InputReadOnly
              description="Desconto INSS"
              //value={`${descINSS} '+' (${percDescInss})`}
              value={descINSS}
              percDescInss={percDescInss}
              style={styles.descontoINSS}
            />
            <InputReadOnly
              description="Base IRPF"
              value={baseIRPF}
              style={styles.styleBaseIRPF}
            />
            <InputReadOnly
              description="Desconto IRPF"
              value={descIRPF}
              style={styles.descontoIRPF}
            />
            <InputReadOnly
              description="Salário Líquido"
              value={salarioLiquido}
              percSalarioLiquido={percSalarioLiquido}
              style={styles.salarioLiquido}
            />
            <ProgressBarSalary />
          </div>
        </Fragment>
      </div>
    );
  }
}

const styles = {
  styleBaseINSS: {
    fontWeight: 'bold',
  },
  descontoINSS: {
    fontWeight: 'bold',
    color: '#e67e22',
  },
  styleBaseIRPF: {
    fontWeight: 'bold',
  },
  descontoIRPF: {
    fontWeight: 'bold',
    color: '#c0392b',
  },
  salarioLiquido: {
    fontWeight: 'bold',
    color: '#16a085',
  },
};
