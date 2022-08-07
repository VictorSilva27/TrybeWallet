import { RECEIVE_COINS } from './api';
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INIT_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0,
};

const wallet = (state = INIT_STATE, action) => {
  const { currencies, expenses, idItem, idItemEdit, itemUpdate } = action;
  switch (action.type) {
  case RECEIVE_COINS:
    return { ...state, currencies };
  case ADD_ITEM:
    return { ...state, expenses: [...state.expenses, expenses] };
  case DELETE_ITEM:
    return { ...state,
      expenses: [...state.expenses].filter((item) => item.id !== idItem),
      editor: false };
  case EDIT_ITEM:
    return { ...state,
      editor: true,
      idToEdit: idItemEdit };
  case UPDATE_ITEM:
    return { ...state,
      expenses: itemUpdate,
      editor: false };
  default:
    return state;
  }
};

export default wallet;
