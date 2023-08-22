import React from "react"
import APIMovies from "./requestTMDB"
let arrayOfMovies = []
 async function resolveRequest () {
    const listOfRequest = await APIMovies
    

    for (let i = 0;i<listOfRequest.length;i++) {
        arrayOfMovies[i] = listOfRequest[i]
    } 

    localStorage.setItem('movies',JSON.stringify(arrayOfMovies))
    return arrayOfMovies
} 
resolveRequest ()
export default arrayOfMovies