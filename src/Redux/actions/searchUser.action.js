import axios from "axios";

export const searchUserStart = () => ({
    type: "SEARCH_USER_START",
});

export const searchUserSuccess = (result) => ({
    type: "SEARCH_USER_SUCCESS",
    payload: result
});

export const searchUserFailure = (error) => ({
    type: "SEARCH_USER_FAILURE",
    payload: error
});


export const searchUserAsync = () => async (dispatch) => {
    dispatch(searchUserStart());
    try {
        // const resp = await axios.get('https://api.github.com/search/code', {
        //     q: 'srishtivishnoi'
        // })
        const resp = await axios.get('https://api.github.com/users', {
            per_page: 10    
        });
        dispatch(searchUserSuccess(resp.data));
    } catch (e) {
        dispatch(searchUserFailure(e.message));
    }
};
