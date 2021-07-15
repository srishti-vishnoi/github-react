const init = {
  loading: false,
  user: null,
  error: undefined,
  token: undefined,
};

export const loginReducer = (state = init, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, token: action.payload, user: null };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.payload, user: null, token: undefined };
    case 'LOGOUT':
      return { ...init };
    default:
      return state;
  }
};
