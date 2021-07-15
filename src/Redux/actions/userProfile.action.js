import GithubService from "../../Services/github_service";

export const userProfileStart = () => ({
    type: "FETCH_USER_PROFILE_START",
});

export const userProfileSuccess = (user) => ({
    type: "FETCH_USER_PROFILE_SUCCESS",
    payload: user
});

export const userProfileFailure = (error) => ({
    type: "FETCH_USER_PROFILE_FAILURE",
    payload: error
});


export const userProfileAsync = (username) => async (dispatch) => {
    dispatch(userProfileStart());
    try {
        const resp = await GithubService.fetchProfile(username);
        dispatch(userProfileSuccess(resp.data));
    } catch (e) {
        dispatch(userProfileFailure(e.message));
    }
};
