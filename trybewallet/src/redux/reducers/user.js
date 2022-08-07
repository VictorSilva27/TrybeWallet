// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_USER } from '../actions';

const INIT_STATE = {
  email: '',
};

const user = (state = INIT_STATE, action) => {
  const { email } = action;
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      email,
    };

  default:
    return state;
  }
};

export default user;
