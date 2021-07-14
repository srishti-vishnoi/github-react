const init = {
    loading: false,
    user: null,
    error: undefined,
  };
  
  export const searchUserReducer = (state = init, action) => {
    switch (action.type) {
      case "SEARCH_USER_START":
        return { ...state, loading: true, result: null };
      case "SEARCH_USER_SUCCESS":
        return { ...state, loading: false, result: action.payload };
      case "SEARCH_USER_FAILURE":
        return { ...state, loading: false, error: action.payload, result: null };
      default:
        return state;
    }
  };
  