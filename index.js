const express = require("express")
const bodyparser=require('body-parser')
const cros = require('cros') 
const app = express()
const mysql=require("mysql")

const db =mysql.createPool({
host:"localhost",
user:"root",
password:"password",
database:"Cruddatabase",
});
app.use(cros());
app.use(express.json());

app.use(bodyparser.urlencoded({extended:true}))

app.get('/api/get', (req,res) =>{
const sqlInsert=" SELECT*FROM movie_review";
db.query(sqlselect, (err, result) =>{
    console.log(result);
})
});
app.post("/api/insert", (req,res)=>{
    const moviename= req.body.moviename;
    const moviereview= req.body.moviereview;

    const sqlInsert =" INSERT INTO movie_reviews (moviename, moviereview) VALUE (?,?)"
    db.query(sqlInsert,[moviename, moviereview], (err, result) =>{
        console.log(result);
    });

});

app.listen(3000, () =>{
    console.log("running on port 3000");
});
