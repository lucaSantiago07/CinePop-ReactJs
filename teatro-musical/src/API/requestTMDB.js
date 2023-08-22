import React from "react";
/*const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjJlZDdjNTI4OTdmMjkzZTBjNzU5ODg5YzI0NDNkNiIsInN1YiI6IjY0ZGY4MzkwYWFlYzcxMDNmYTQ4MTAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3RwuIMOfH6u0S9_ZaZWvhtRGtGAtlmIxJ33opArPlEI'
    }
  };
  
  const APIMovies =  fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {return response.results})
    .catch(err => console.error(err));
*/
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjJlZDdjNTI4OTdmMjkzZTBjNzU5ODg5YzI0NDNkNiIsInN1YiI6IjY0ZGY4MzkwYWFlYzcxMDNmYTQ4MTAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3RwuIMOfH6u0S9_ZaZWvhtRGtGAtlmIxJ33opArPlEI'
        }
      };
      
      const APIMovies = fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => {return response.results})
        .catch(err => console.error(err));


    export default APIMovies