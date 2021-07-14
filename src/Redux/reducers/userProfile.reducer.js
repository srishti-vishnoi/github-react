const init = {
    loading: false,
    user: null,
    error: undefined,
  };
  
  export const userProfileReducer = (state = init, action) => {
    switch (action.type) {
      case "FETCH_USER_PROFILE_START":
        return { ...state, loading: true, result: null };
      case "FETCH_USER_PROFILE_SUCCESS":
        return { ...state, loading: false, user: action.payload };
      case "FETCH_USER_PROFILE_FAILURE":
        return { ...state, loading: false, error: action.payload, user: null };
      default:
        return state;
    }
  };
  