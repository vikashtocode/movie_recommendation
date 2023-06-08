const express = require("express");
const app = express();
const port =3000;
const path =require("path");
const ejs =require("ejs");
const Movie =require("./models/Movie");
const mongoose = require("mongoose");
const { default: axios } = require("axios");

app.set ("view engine" ,"ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))


mongoose.connect("mongodb://127.0.0.1:27017/movies-recomm")
.then(()=>console.log("connectio open"))
.catch((err)=>console.log(err));

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/",(req,res)=>{
    const {search} =req.body;
    console.log(search);
    axios.get(`https://api.tvmaze.com/search/shows?q=${search}`).then((res)=>{
        console.log(res.data);
        const movies =res.data;
        movies.forEach(element => {
            Movie.create({
                    name : element.show.name,
                    image: element.show.image.medium,
                    year: element.show.premiered,
                    runtime: element.show.runtime
            })
            
        });
    })
});



app.listen(port,() =>console.log(`Example app listening at http://localhost:3000`))