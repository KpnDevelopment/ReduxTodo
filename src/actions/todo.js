import * as actions from "./actionType";

export const addItem = (item) => ({
  type: actions.ADD_ITEM,
});

export const deleteItem = (item) => ({
  type: actions.DELETE_ITEM,
  item: item,
});

export const editItem = (item) => ({
  type: actions.EDIT_ITEM,
  item: item,
});

export const setTitle = (title) => ({
  type: actions.SET_TITLE,
  title,
});

export const setError = (error) => ({
  type: actions.SET_ERROR,
  error,
});

export const setItem = (item) => ({
  type: actions.SET_ITEM,
  item,
});

export const setEdit = () => ({
  type: actions.SET_EDIT,
});
