const init = {
    loading: false,
    result: null,
    error: undefined,
  };
  
  export const suggestUserReducer = (state = init, action) => {
    switch (action.type) {
      case "SUGGEST_USER_START":
        return { ...state, loading: true, result: null };
      case "SUGGEST_USER_SUCCESS":
        return { ...state, loading: false, result: action.payload };
      case "SEARCH_USER_FAILURE":
        return { ...state, loading: false, error: action.payload, result: null };
      default:
        return state;
    }
  };
  