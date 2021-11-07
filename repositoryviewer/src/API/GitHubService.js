
export default class GitHubService {

    static async getRepos(username) {
        const responce = await fetch(`https://api.github.com/users/${username}/repos`)
        const data = await responce.json();
        return data;
    }

    static async getReposContent(reposName) {
        const responce = await fetch(`https://api.github.com/repos/EvgeniyRyabchuk/${reposName}/git/trees/master?recursive=1`)
        const data = await responce.json();
        return data;
    }

    static getBlob(username, reposName, branch, filename) {
        const url = `https://raw.githubusercontent.com/${username}/${reposName}/${branch}/${filename}`;
        // window.location.href = `https://raw.githubusercontent.com/${username}/${reposName}/${branch}/${filename}`;
        window.open(url, filename); 
    }
}