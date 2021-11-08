

export class FetchService {

    static async fetchJsonData(url) {
        const responce = await fetch(url);
        const data = await responce.json();
        return data;
    }
}