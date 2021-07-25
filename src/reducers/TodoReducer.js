import * as actions from "../actions/actionType";

const initialState = {
  items: [],
  title: "",
  item: "",
  edit: false,
  error: "",
};
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      const newitem = {
        id: Date.now(),
        value: state.title,
      };
      return {
        ...state,
        items: state.items.concat(newitem),
        title: "",
        error: "",
      };

    case actions.EDIT_ITEM:
      var newList = [...state.items];
      var index = newList.indexOf(state.item);
      if (index !== -1) {
        newList[index].value = state.title;
        return {
          ...state,
          title: "",
          edit: false,
          items: newList,
          error: "",
        };
      } else {
        return { ...state };
      }

    case actions.DELETE_ITEM:
      newList = [...state.items];
      index = newList.indexOf(state.item);
      if (index !== -1) {
        newList.splice(index, 1);
        return {
          ...state,
          items: newList,
        };
      } else {
        return state;
      }

    case actions.SET_TITLE:
      return { ...state, title: action.title };

    case actions.SET_ITEM:
      return { ...state, item: action.item };

    case actions.SET_ERROR:
      return { ...state, error: action.error };

    case actions.SET_EDIT:
      return {
        ...state,
        edit: true,
        error: "",
      };
    default:
      return state;
  }
};
