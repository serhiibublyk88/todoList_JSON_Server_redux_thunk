export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const TOGGLE_SORT = "TOGGLE_SORT";
export const SET_LOADING_MESSAGE = "SET_LOADING_MESSAGE";
export const SET_IS_PROCESSING = "SET_IS_PROCESSING";

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const toggleSort = () => ({
  type: TOGGLE_SORT,
});

export const setLoadingMessage = (message) => ({
  type: SET_LOADING_MESSAGE,
  payload: message,
});

export const setIsProcessing = (isProcessing) => ({
  type: SET_IS_PROCESSING,
  payload: isProcessing,
});
