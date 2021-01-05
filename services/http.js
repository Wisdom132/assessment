export default class auth {
    /**
     * @constructor
     */
    constructor(api) {
        this.http = api
    }

    photos(query) {
        return this.http.get(`/search/photos?query=${query}&per_page=7`)
    }
}
