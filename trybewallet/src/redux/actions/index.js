// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const actionAddUser = (email) => ({ type: LOGIN_USER, email });

export const ADD_ITEM = 'ADD_ITEM';
export const actionAddItem = (expenses) => ({ type: ADD_ITEM, expenses });

export const DELETE_ITEM = 'DELETE_ITEM';
export const actionDeleteItem = (idItem) => ({ type: DELETE_ITEM, idItem });

export const EDIT_ITEM = 'EDIT_ITEM';
export const actionEditItem = (idItemEdit) => ({ type: EDIT_ITEM,
  idItemEdit });

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const actionUpdateItem = (itemUpdate) => ({ type: UPDATE_ITEM, itemUpdate });
