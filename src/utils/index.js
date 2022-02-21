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
    list() { // ties to class not obj -- static 
        return movieArr
    };
};

module.exports = Movie;