const Movie = require("./movieModel") 

//creates a movie 
exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error) {
        console.log(error)
    }
}

//lists all the movies
exports.listMovies = async () => {
    try {
        return await Movie.find({})
    } catch (error) {
        console.log(error)
    }
}

//deletes a movie
exports.deleteMovie = async (movieObject) => {
    try {
        return await Movie.deleteOne(movieObject)
    } catch (error) {
        console.log(error)
    }
}

//deletes all the movies
exports.deleteMovies = async () => {
    try {
        return await Movie.deleteMany({})
    } catch (error) {
        console.log(error)
    }
}

//updates a movie
exports.updateMovie = async (movieObject, updateMovieObject) => {
    try {
        return await Movie.updateOne(movieObject, updateMovieObject)
    } catch (error) {
        console.log(error)
    }
}

//finds a specific movie title 
exports.findMovieTitle = async (titleObject) => {
    try {
        return await Movie.findOne(titleObject)
    } catch (error) {
        console.log(error)
    }
}

//finds a specific actor 
exports.findMovieActor = async (actorObject) => {
    try {
        return await Movie.find(actorObject)
    } catch (error) {
        console.log(error)
    }
}

//find movies with specified rating 
exports.findMovieRating = async (ratingObject) => {
    try {
        return await Movie.find(ratingObject)
    } catch (error) {
        console.log(error)
    }
}



//You can console log specific errors i.e error in update function