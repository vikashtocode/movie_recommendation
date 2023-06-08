const mongoose = require("mongoose");
const movieSchema =new  mongoose.Schema({
    name :{
        type: String,
        required :true,
        maxLength:10
    },
    runtime:{
        type :Number,
        min :1,
        max :[5,"movie runtime cannot exceed 5 hrs"],
        required :true
    },
    year :{
        type :String ,
        required:true
    },
    image: {
        type :String,
        required :true
    }
})
module.exports = mongoose.model("Movie",movieSchema);
// export default Movie;
// const MovieName=Movies.InsertOne({name:"vikash",year:"2012"});
// console.log(MovieName);


