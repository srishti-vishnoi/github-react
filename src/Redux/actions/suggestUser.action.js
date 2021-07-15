import GithubService from "../../Services/github_service";

export const suggestUserStart = () => ({
    type: "SUGGEST_USER_START",
});

export const suggestUserSuccess = (result) => ({
    type: "SUGGEST_USER_SUCCESS",
    payload: result
});

export const suggestUserFailure = (error) => ({
    type: "SUGGEST_USER_FAILURE",
    payload: error
});


export const suggestUserAsync = () => async (dispatch) => {
    dispatch(suggestUserStart());
    try {
       const resp = await GithubService.suggestUsers();
        dispatch(suggestUserSuccess(resp.data));
    } catch (e) {
        dispatch(suggestUserFailure(e.message));
    }
};
