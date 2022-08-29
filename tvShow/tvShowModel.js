
const mongoose = require("mongoose")

const tvShowSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true,
        unique: true, 
    },
    actor: {
        type: String,
        default: "Not Specified",
    },
});

const TVShow = mongoose.model("NetflixTV", tvShowSchema); 

module.exports = TVShow