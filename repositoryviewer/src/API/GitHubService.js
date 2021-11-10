import {FetchService} from "./FetchService";

export default class GitHubService {

    static async getRepos(username) {
        const url =`https://api.github.com/users/${username}/repos`;
        const res = FetchService.fetchJsonData(url);
        console.log(res);
        return res;
    }

    static async getReposContent(username, reposName, branch = 'master') {
        const url = `https://api.github.com/repos/${username}/${reposName}/git/trees/${branch}?recursive=1`;
        const res = FetchService.fetchJsonData(url);
        return res;
    }

    static getBlob(username, reposName, branch, filename) {
        const url = `https://raw.githubusercontent.com/${username}/${reposName}/${branch}/${filename}`;
        // window.location.href = `https://raw.githubusercontent.com/${username}/${reposName}/${branch}/${filename}`;
        window.open(url, filename);
    }

    static async getBranches(username, reposName) {
        const url = `https://api.github.com/repos/${username}/${reposName}/branches`;
        const res = await FetchService.fetchJsonData(url);
        return res;
    }

    static async getUser(username) {
        const url = `https://api.github.com/users/${username}`;
        const res = await FetchService.fetchJsonData(url);
        return res;
    }

    static async getUsers(query, page, per_page) {
        const url = `https://api.github.com/search/users?q=${query}&type=users&page=${page}&per_page=${per_page}`;
        return await FetchService.fetchJsonData(url);
    }

}
