import React from "react";

import arrayOfMovies from "./API";


const lastListOfMovies = JSON.parse(localStorage.getItem(('movies')))
console.log (lastListOfMovies)
const DataMovies = lastListOfMovies.map (({title, poster_path, overview,id}) =>{ return {movieName: title, movieImg: poster_path, movieResume: overview, idMovie: id }}) 



export default DataMovies