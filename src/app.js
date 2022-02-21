const yargs = require("yargs");
const Movie = require("./utils")

const app = (yargsObj) =>{
    if(yargsObj.add){
        // console.log(yargsObj)
        let movie;
        for (i = 0; i < yargsObj.title.length; i++){
             movie = new Movie(yargsObj.title[i], yargsObj.actor[i])
            movie.add()   
        }   
        console.log(movie.list())
    }   
};

app(yargs.argv)

// node .\app.js --add --title="stargate" --actor="james spader" --title="spiderman" --actor="tom holland" 
// --title="avenger" --actor="life modle decoy"

// node .\app.js --name="tom" outputs { _: [], title: true, '$0': 'app.js' }

// node .\app.js --title ----- creates an objct with a boolean value ture


            //     const y = args[i].split(', ');
            //     const movie = new Movie(y[0], y[1]);
            //     console.log(movie.add())


            // if (yargs.addtwo){
            //     const moviOne = new Movie(yargsObj.title, yargsObj.actor)
            //     const movieTwo = new Movie(yargsObj.title, yargsObj.actor)
            //     moviOne.add()
            //     movieTwo.add()
            //     console.log(movieOne.list())
            // }

                //     const movie = new Movie(yargsObj.title, yargsObj.actor)
    //     movie.add();
    //     if (yargsObj.addTwo){
    //         const movieTwo = new Movie(yargsObj.title, yargsObj.actor)
    //         movieTwo.add();
    //         console.log(movieTwo.list());
    //     }
    // } else {
    //     console.log("keep trying")
    // }





    // const app = (yargsObj) =>{
        //     if (yargsObj.add){
        //         if(yargsObj.addTwo){
        //             const movie = new Movie(yargsObj.title[0], yargsObj.actor[0])
        //             const movieTwo = new Movie(yargsObj.title[1], yargsObj.actor[1])
        //             movie.add();
        //             movieTwo.add()
        //             console.log(movieTwo.list())
        //         } else{
        //             const movie = new Movie(yargsObj.title, yargsObj.actor)
        //         }
        
        // };
        //     if(yargsObj.add){
        //         console.log(yargsObj)
        //         let movie;
        //         for (i = 0; i < yargsObj.title.length; i++){
        //              movie = new Movie(yargsObj.title[i], yargsObj.actor[i])
        //             movie.add()   
        //         }   
        //         console.log(movie.list())
        //     }
            
            
        // };