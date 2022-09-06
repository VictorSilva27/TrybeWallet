import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins } from '../redux/reducers/api';
import { actionAddItem, actionUpdateItem } from '../redux/actions';
import '../css/WalletForm.css';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCoins());
  }

 fetchState = async () => {
   const response = await fetch('https://economia.awesomeapi.com.br/json/all');
   const result = await response.json();
   this.setState({
     exchangeRates: result,
   });
 }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { dispatch, expenses } = this.props;
    this.setState({ id: expenses.length });
    await this.fetchState();
    dispatch(actionAddItem(this.state));
    this.setState({
      description: '',
      value: '',
    });
  }

  handleClickEdit = (event) => {
    event.preventDefault();
    const { dispatch, idToEdit, expenses } = this.props;
    const { value, description,
      currency, method, tag, exchangeRates } = this.state;
    const arrExpenseDelete = expenses.filter((item) => item.id !== idToEdit);
    const obj = {
      id: idToEdit,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    const arr = [...arrExpenseDelete, obj];
    dispatch(actionUpdateItem(arr.sort((a, b) => a.id - b.id)));
    this.setState({
      description: '',
      value: '',
    });
  }

  render() {
    const { description, value } = this.state;
    const { currencies, editor } = this.props;
    return (
      <form className="form-content">
        <label htmlFor="value">
          Valor
          <input
            className="value"
            type="number"
            data-testid="value-input"
            id="value"
            onChange={ this.handleChange }
            name="value"
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            className="description"
            type="text"
            data-testid="description-input"
            id="description"
            onChange={ this.handleChange }
            name="description"
            value={ description }
          />
        </label>

        <div>
          Moeda
          <select
            name="currency"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {currencies.map((coin) => (
              <option key={ coin }>{coin}</option>
            ))}
          </select>
        </div>

        <div>
          Método de Pagamento
          <select
            name="method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </div>

        <div>
          Categoria
          <select
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </div>

        <button
          className={ editor ? "btn-edit-wallet" : "btn-wallet" }
          type="submit"
          data-testid="btn-wallet"
          onClick={ editor ? this.handleClickEdit : this.handleClick }
        >
          { editor ? 'Editar despesa' : 'Adicionar despesa' }
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editor: state.wallet.editor,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, null)(WalletForm);
