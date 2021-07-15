import axios from "axios";
import { GITHUB_APIS } from "../Constants/url";


export default class GithubService {
    static login = async (username, password) => {
        return axios.get(GITHUB_APIS.LOGIN_API, {
            headers: {
                Authorization: `token ${password}`
            }
        })
    }

    static searchUsers = async() => {
        // const resp = await axios.get(GITHUB_APIS.SEARCH_API, {
            //     q: 'srishtivishnoi'
        // })
        const resp = await axios.get(GITHUB_APIS.SUGGEST_API, {
            per_page: 10    
        });
        return resp;
    }

    static suggestUsers = async() => {
        const resp = await axios.get(GITHUB_APIS.SUGGEST_API, {
            per_page: 30
        });
        return resp;
    }

    static fetchProfile =async(username) => {
        return axios.get(GITHUB_APIS.PROFILE_API(username));
    }

}

