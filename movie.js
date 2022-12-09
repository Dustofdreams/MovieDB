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
                <p>Score: ${Math.round(movieData.vote_average *10)/10}</p>
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
                    <p>${movieData.credits.crew.filter(x => x.job === 'Producer').map(x => ' ' + x.name)}</p>
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
        </div>
    <button class="back" onclick="goBack()">Back</button>`
    })
}

function goBack() {
        localStorage.clear()
        window.location.href = `${window.location.origin}/index.html`
}

getMovie()











