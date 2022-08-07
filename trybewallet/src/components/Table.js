import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Table.css';
import { actionDeleteItem, actionEditItem } from '../redux/actions';

class Table extends Component {
  deleteItem = (idItem) => {
    const { dispatch } = this.props;
    dispatch(actionDeleteItem(idItem));
  }

  updateItem = (idItemEdit) => {
    const { dispatch } = this.props;
    dispatch(actionEditItem(idItemEdit));
  }

  render() {
    const headerTable = ['Descrição', 'Tag', 'Método de pagamento',
      'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido',
      'Moeda de conversão', 'Editar/Excluir'];
    const { walletForm } = this.props;
    return (
      <div className='page-table'>
        <table className="table-container" data-testid="table-wallet">
          <thead className="header-table">
            <tr>
              {headerTable.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {walletForm.map((item, index) => (
              <tr key={ (item.id + index) * 2 }>
                <td data-testid="td-desc" className="itemDesc">{item.description}</td>
                <td data-testid="td-tag">{item.tag}</td>
                <td data-testid="td-method">{item.method}</td>
                <td data-testid="td-value">{(+item.value)
                  .toLocaleString('pt-br', { style: 'currency', currency: item.currency })}</td>
                <td data-testid="td-name">{item.exchangeRates[item.currency].name}</td>
                <td data-testid="td-cambio">
                  {(+item.exchangeRates[item.currency].ask)
                    .toLocaleString('pt-br', { style: 'currency', currency: item.currency })}
                </td>
                <td data-testid="td-conversão">
                  {((+item.value) * (+item.exchangeRates[item.currency].ask))
                    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </td>
                <td data-testid="td-real"> Real </td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    className="btn-edit"
                    onClick={() => this.updateItem(item.id)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    className="btn-delete"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Excluir
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

const mapStateToProps = (state) => ({
  walletForm: state.wallet.expenses,
});

Table.propTypes = {
  walletForm: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Table);
