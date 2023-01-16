/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/

// const button = document.getElementById('btn')
const input = document.getElementById('Search')
const content = document.getElementById('content')

const typeSelect = document.getElementById('type-select');
        const yearSelect = document.getElementById('year-select');
        for (let year = 2023; year >= 1970; year--) {
            let option = document.createElement("option");
            if(year === 0) break;
            option.value = year;
            option.text = year;
            yearSelect.appendChild(option);
        }
        typeSelect.addEventListener('change', async function()
        {});
        
        yearSelect.addEventListener('change', async function(){});

input.addEventListener('input' , async function(){
    try{
        const response = await fetch ('http://www.omdbapi.com/?apikey=b4c23d1b&s=' + input.value);
        const movies = await response.json()
        const searchResults = movies.Search 
        content.innerHTML = "";
        
       
        console.log(searchResults);
        for(let movie of searchResults) {
            content.innerHTML += `<div class="movie-result">
                <img src="${movie.Poster}" class="cover-image">
                <div class="movie-info">
                    <ul id="movietitles">
                        <li>${movie.Title}</li>
                        <li>Release Date: ${movie.Year}</li>
                        <li>IMDb Number: ${movie.imdbID}</li>
                        <li>Category: ${movie.Type}</li>
                    </ul>
                </div>
            </div>`;
        }        
        

        // for(let movie of searchResults){
        //     content.innerHTML += `<ul>

        //     <img src = ${movie.Poster}>
        //     <li>${movie.Title}</li>
        //     <li>${movie.Year}</li>
        //     <li>${movie.imdbID}</li>
        //     <li>${movie.Type}</li>
            
            // </ul>`
        // }
    } catch(error) {
        console.log(error);
    }
})