import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Header.css';

class Header extends Component {
  converter = () => {
    const { total } = this.props;
    const convertedValues = total
      .map((item) => Number(item.exchangeRates[item.currency].ask));
    let result = 0;
    total
      .forEach((item, index) => {
        result += Number(item.value) * convertedValues[index];
      });
    return result.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).slice(3);
  }

  render() {
    const { emailState, total } = this.props;
    return (
      <div className="header-content">
        <h1 className="title-trybe">Trybe
          <span className="title-wallet">Wallet</span>
        </h1>
        <p>
          e-mail:
          {' '}
          <span data-testid="email-field">
            {emailState}
          </span>
        </p>
        <p>
          <span data-testid="total-field">
            {total.length === 0 ? 'R$ 0,00' : this.converter()}
            {' '}
            BRL
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  total: state.wallet.expenses,
});

Header.propTypes = {
  emailState: PropTypes.string,
  total: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
