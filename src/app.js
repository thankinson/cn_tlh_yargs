const yargs = require("yargs");
const Movie = require("./utils")

const app = (yargsObj) =>{
    if (yargsObj.add){
        const movie = new Movie(yargsObj.title, yargsObj.actor)
        movie.add();
        console.log(movie.list());
    } else {
        console.log("incorent comand");
    };
};

app(yargs.argv)
// node .\app.js --name="tom" outputs { _: [], title: true, '$0': 'app.js' }

// node .\app.js --title ----- creates an objct with a boolean value ture