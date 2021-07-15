import GithubService from "../../Services/github_service";

export const loginStart = (token) => ({
    type: "LOGIN_START",
    payload: token,
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

export const loginFailure = (error) => ({
    type: "FETCH_FEEDS_FAILURE",
    payload: error
});

export const loginAsync = (username, password) => async (dispatch) => {
    dispatch(loginStart(password));
    try {
        const resp =  await GithubService.login(username, password);
        dispatch(loginSuccess(resp.data));
    } catch (e) {
        dispatch(loginFailure(e.message));
    }
};

export const logout = () => ({
    type: "LOGOUT"
});
