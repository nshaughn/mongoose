require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs") 
//yargs to build interactive command line tools

const { createMovie, listMovies, deleteMovie, updateMovie, deleteMovies, findMovieTitle, findMovieActor, findMovieRating } = require("./movie/movieFunctions")
const { createTVShow, listTVShows, deleteTVShow, updateTVShow, deleteTVShows, findTVShowTitle, findTVShowActor, findTVShowRating } = require("./tvShow/tvShowFunctions")
//import all the functions above 

const app = async (yargsObject) => {
    try {
        //add a movie title and actor with node app.js --add --movies --title "" --actor "" --rating 'number'
        if(yargsObject.add && yargsObject.movies) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
            console.log(await listMovies())

        //Lists all your movies node app.js --list --movies 
        } else if (yargsObject.list && yargsObject.movies) {
            console.log(await listMovies())

        //deletes a movie with node app.js --delete --movies --title "" actor "" --rating 'number'
        } else if (yargsObject.delete && yargsObject.movies) {
            await deleteMovie({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating}) 
            console.log(await listMovies())

        //deletes all your movies with node app.js --deleteAll --movies
        } else if (yargsObject.deleteAll && yargsObject.movies) {
            await deleteMovies()
            console.log(await listMovies())

        //updates a movie with node app.js --update --movies --title "" --actor "" --rating '' --newTitle "" --newActor """ --newRating '' 
        } else if (yargsObject.update && yargsObject.movies) {
            await updateMovie ({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating},
                                {title: yargsObject.newTitle, actor: yargsObject.newActor, rating: yargsObject.newRating})
            console.log(await listMovies())
            
        //find a movie title with node app.js --findMovieTitle --movies --title ""
        } else if (yargsObject.findMovieTitle && yargsObject.movies) {
            let findMovie = await findMovieTitle({title: yargsObject.title})
            console.log(findMovie)  

        //find an actor with node app.js --findMovieActor --movies --actor ""
        } else if (yargsObject.findMovieActor && yargsObject.movies) {
            let findActor = await findMovieActor({actor: yargsObject.actor})
            console.log(findActor)

        //finds movies with specified rating with node app.js --findMovieRating --movies --rating 'number'
        } else if (yargsObject.findMovieRating && yargsObject.movies) {
            let findRating = await findMovieRating({rating: yargsObject.rating}) 
            console.log(findRating)
        

    
        //TV SHOWS
        //node app.js --add --tvShow --title "" --actor "" --rating ''
        } else if(yargsObject.add && yargsObject.tvShow) {
            await createTVShow({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
            console.log(await listTVShows())

        //node app.js --list --tvShow
        } else if (yargsObject.list && yargsObject.tvShow) {
            console.log(await listTVShows())

        //node app.js --delete --tvShow --title "" --actor "" --rating ''
        } else if (yargsObject.delete && yargsObject.tvShow) {
            await deleteTVShow({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating}) 
            console.log(await listTVShows())

        //node app.js --deleteAll --tvShow
        } else if (yargsObject.deleteAll && yargsObject.tvShow) {
            await deleteTVShows()
            console.log(await listTVShows())
            
        //node app.js --update --tvShow --title "" --actor "" --rating '' --newTitle "" --newActor "" --newRating ''
        } else if (yargsObject.update && yargsObject.tvShow) {
            await updateTVShow ({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating},
                                {title: yargsObject.newTitle, actor: yargsObject.newActor, rating: yargsObject.newRating})
            console.log(await listTVShows())
            
        //node app.js --findTVShowTitle --tvShow --title ""
        } else if (yargsObject.findTVShowTitle && yargsObject.tvShow) {
            let findTVShow = await findTVShowTitle({title: yargsObject.title})
            console.log(findTVShow)  

        //node app.js --findTVShowActor --tvShow --actor ""
        } else if (yargsObject.findTVShowActor && yargsObject.tvShow) {
            let findTVActor = await findTVShowActor({actor: yargsObject.actor})
            console.log(findTVActor)

        //node app.js --findTVShowRating --tvShow --rating 'number'
        } else if (yargsObject.findTVShowRating && yargsObject.tvShow) {
            let findRating = await findTVShowRating({rating: yargsObject.rating}) 
            console.log(findRating)
        
        } else {
            console.log("incorrect command")

        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        await mongoose.disconnect();
    }
}

app(yargs.argv)