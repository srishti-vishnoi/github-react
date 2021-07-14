import axios from "axios";

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
    console.log('start');
    try {
        const resp = await axios.get(`https://api.github.com/users/${username}`);
        dispatch(userProfileSuccess(resp.data));
    } catch (e) {
        dispatch(userProfileFailure(e.message));
    }
};
