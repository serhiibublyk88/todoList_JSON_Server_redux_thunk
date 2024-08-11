import {
  SET_SEARCH_TERM,
  TOGGLE_SORT,
  SET_LOADING_MESSAGE,
  SET_IS_PROCESSING,
} from "../actions";

const initialState = {
  searchTerm: "",
  isSorted: false,
  loadingMessage: "",
  isProcessing: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case TOGGLE_SORT:
      return { ...state, isSorted: !state.isSorted };
    case SET_LOADING_MESSAGE:
      return { ...state, loadingMessage: action.payload };
    case SET_IS_PROCESSING:
      return { ...state, isProcessing: action.payload };
    default:
      return state;
  }
};

export default uiReducer;
