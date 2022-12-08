const apiKey = "d27398a942ce7c69ee900256481b5e70"
const result = document.querySelector('.movie__wrapper')

async function getMovie() {
    const movieName = localStorage.getItem("id")
    const url = await fetch(`https://api.themoviedb.org/3/movie/${movieName}?api_key=${apiKey}&append_to_response=credits`); 
    const movieData = await url.json()
    .then((movieData) => {
        console.log(movieData)
        result.innerHTML = `
        <div class="movie__poster">
        <img src="http://image.tmdb.org/t/p/w500/${movieData.poster_path}" alt="">
    </div>
    <div class="movie__info">
        <div class="title-genre">
            <h1>${movieData.title}</h1>
            <div class="runtime__info">
            <p>${movieData.genres.map(x => ' ' + x.name)}</p>
            <p>Released: ${movieData.release_date}</p>
        </div>
        </div>
        <div class="crew">
            <div class="director">
                <h3>Director:</h3>
                <p>${movieData.credits.crew.filter(x => x.job === 'Director').map(x => ' ' + x.name)}</p>
            </div>
            <div class="producer">
                <h3>Producer:</h3>
                <p>${movieData.credits.crew.filter(x => x.job === 'Producer').map(x => x.name)}</p>
            </div>
            <div class="score">
                <h3>Music by:</h3>
                <p>${movieData.credits.crew.filter(x => x.job === 'Original Music Composer').map(x => ' '  + x.name)}</p>
            </div>
        </div>
        <div class="starring">
            <h3>Staring:</h3>
            <p>${movieData.credits.cast.slice(0,10).map(x => ' ' + x.name)}</p>
        </div>
        <div class="plot">
            <h3>Plot:</h3>
            <p>${movieData.overview}</p>
        </div>
    </div>`
    })
}


// function movieHTML(movie) {
//     return `
//  <div class="movie__poster">
//             <img src="${data.Poster}" alt="">
//         </div>
//         <div class="movie__info">
//             <div class="title-genre">
//                 <h1>${data.title}</h1>
//                 <p>genre</p>
//             </div>
//             <div class="runtime__info">
//                 <p>Year: 2013</p>
//                 <p>Year: 2013</p>
//                 <p>Year: 2013</p>
//             </div>
//             <div class="movie__scores">
//                 <h3>Scores:</h3>
//                 <p>IMDB: 7.1</p>
//                 <p>Rotthen Tomatoes: 5.5</p>
//                 <p>Metacritic: 55</p>
//             </div>
//             <div class="director">
//                 <h3>Director:</h3>
//                 <p>director name here</p>
//             </div>
//             <div class="starring">
//                 <h3>Staring:</h3>
//                 <p>bunch of names here</p>
//             </div>
//             <div class="plot">
//                 <h3>Plot:</h3>
//                 <p>plot her e</p>
//             </div>
//         </div>`
// }



// let getMovie = () => {
//     let movieName = localStorage.getItem("id")
//     let url = `https://api.themoviedb.org/3/movie/${movieName}?api_key=${apiKey}`;
//     console.log(url)
//     fetch(url)
//         .then((resp) => resp.json())
//         .then((data) => {
//           //If movie exists in database
//           if (data.Response == "True") {
//             console.log(Array.isArray(data))
//             result.innerHTML =` 
//           //If movie does NOT exists in database
//           else {
//             result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
//           }
//         })
//         //If error occurs
//         .catch(() => {
//           result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
//         });
//     };


getMovie()


// <div class="movie__scores">
// <h3>Scores:</h3>
// <p>IMDB: 7.1</p>
// <p>Rotthen Tomatoes: 5.5</p>
// <p>Metacritic: 55</p>
// </div>













