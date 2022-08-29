const TVShow = require("./tvShowModel") 

exports.createTVShow = async (tvShowObject) => {
    try {
        await TVShow.create(tvShowObject)
    } catch (error) {
        console.log(error)
    }
}

exports.listTVShows = async () => {
    try {
        return await TVShow.find({})
    } catch (error) {
        console.log(error)
    }
}

exports.deleteTVShow = async (tvShowObject) => {
    try {
        return await TVShow.deleteOne(tvShowObject)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteTVShows = async () => {
    try {
        return await TVShow.deleteMany({})
    } catch (error) {
        console.log(error)
    }
}

exports.updateTVShow = async (tvShowObject, updateTVShowObject) => {
    try {
        return await TVShow.updateOne(tvShowObject, updateTVShowObject)
    } catch (error) {
        console.log(error)
    }
}

exports.findTVShow = async (tvShowObject) => {
    try {
        return await TVShow.find(tvShowObject)
    } catch (error) {
        console.log(error)
    }
}

exports.findTVShowTitle = async (titleObject) => {
    try {
        return await TVShow.findOne(titleObject)
    } catch (error) {
        console.log(error)
    }
}

exports.findTVShowActor = async (actorObject) => {
    try {
        return await TVShow.find(actorObject)
    } catch (error) {
        console.log(error)
    }
}