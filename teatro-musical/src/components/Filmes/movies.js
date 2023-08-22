import React from "react";
import './movies.css'
import CardMovies from "./cardMovies.js";
import dataMovies from "../../API/editInfoMovies";
/*
async function listOfMovies () {
    const arrays = await arrayOfMovies
    console.log (arrays)
}

listOfMovies()*/

/*
const lastListOfMovies = JSON.parse(localStorage.getItem(('movies')))
console.log (lastListOfMovies)
const DataMovies = lastListOfMovies.map (({title, poster_path, overview,id}) =>{ return {movieName: title, movieImg: poster_path, movieResume: overview, idMovie: id }}) 
*/

const namee = JSON.parse(localStorage.getItem(('movie')))

if (namee==null) {
    console.log ('funcionou')
} 

function Movies () {
    const httpsForImg = `https://image.tmdb.org/t/p/original`
    
   

    
    return (<section className="section-Movies" >
        {dataMovies.map (({movieImg,movieName,movieResume, idMovie}) => {

           return ( 
                <>
                <CardMovies
                key={idMovie}
                img_alt={movieName}  
                img_src={httpsForImg+movieImg}
                text_card='Comprar'
                title={movieName}
                /> 
                </>
            )
        }) }
        </section> 

    )
}

export default Movies