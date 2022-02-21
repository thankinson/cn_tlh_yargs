const movieArr = [];

class Movie {
    constructor(title, actor = "Not specified"){
        this._tital = title;
        this._actor = actor;
    };
    add(){
        movieArr.push(this);
        return movieArr
    };
    list() {
        return movieArr
    };
};

module.exports = Movie;