// const apiKey = "ddde8589"
const apiKey = "d27398a942ce7c69ee900256481b5e70"

const movieNameRef = document.querySelector('.search__value')
const searchBtn = document.querySelector(".search__button");
const movieListElement = document.querySelector('.search__result')
const movieListIMDB = document.querySelector('.imdb__info')

searchBtn.addEventListener("click", showMovies);

async function showMovies() {
    let movieName = movieNameRef.value
    const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`);
    const moviesData = await movies.json();
    const moviesSorted = moviesData.results.sort((a, b) => b.popularity - a.popularity);
    console.log(moviesSorted)
    movieListElement.innerHTML = moviesSorted.map((movie) => movieHTML(movie)).join('')
}

function showSingleMovie(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/movie.html`
}


function movieHTML(movie) {
    return `
    <div class="movie__result" onclick="showSingleMovie(${movie.id})">
        <div class="movie__poster">
            <img src="http://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
        </div>
        <div class="scores-and-name">
            <div class="name"> 
                <h2>${movie.title}</h2>
                <p>Released: ${movie.release_date}</p>
                <p>${movie.overview}</p>
            </div>        
        </div>
    </div>`
}


searchBtn.addEventListener("click", showMovies);    




