const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const moviesDiv = document.getElementById("movies");
let movies = [];

function getData() {
    axios.get(API_URL).then((res) => {
        movies = res.data;
        render()
    })
}

function render() {
    const movieElement = movies.results.map(function (movie) {
        return `
        <div class="col-4 col-lg-3 col-xl-2 p-1">
        <img src="${IMG_URL + movie?.poster_path}" class="img-fluid" >
        </div>
        `;
    });
    moviesDiv.innerHTML = movieElement.join("")
}

getData()