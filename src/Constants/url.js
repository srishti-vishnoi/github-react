export const GITHUB_APIS  = {
    LOGIN_API : "https://api.github.com/user",
    SEARCH_API : "https://api.github.com/search/code",
    SUGGEST_API : "https://api.github.com/users",
    PROFILE_API : (username)=> (`https://api.github.com/users/${username}`),
}