const API_KEY = "api_key=4e552a3cec3fae1872dba039ca3b0860";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const posterURL = "https://image.tmdb.org/t/p/w500";

const popularSection = document.getElementById("popularSection");
const justForSection = document.getElementById("justForYouSection");
const mainSection = document.getElementById("mainSection");

const fetchMovies = (url) => {
    fetch(url).then((res) => res.json())
    .then((data) => 
    showMovies(data.results));
}

const showMovies = (dataResults) => {
    showPopMovies(dataResults);
    showForYouMovies(dataResults);
}

const showPopMovies = (dataResults) => {
    console.log(dataResults)
    popularSection.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", posterURL + dataResults[i].poster_path);

        const divEl = document.createElement("div");
        divEl.classList.add("movie-info");

        const h4El = document.createElement("h4");
        h4El.innerText = dataResults[i].title;

        const spanEl = document.createElement("span");
        spanEl.innerText = dataResults[i].vote_average;
        spanEl.classList.add(getColor(dataResults[i].vote_average));

        movieEl.append(imgEl, divEl);
        divEl.append(h4El, spanEl);
    
        popularSection.append(movieEl);

        movieEl.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(h4El.innerText);
            renderReview();
        })


    };
}

const showForYouMovies = (dataResults) => {
    justForSection.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", posterURL + dataResults[i].poster_path);

        const divEl = document.createElement("div");
        divEl.classList.add("movie-info");

        const h4El = document.createElement("h4");
        h4El.innerText = dataResults[i].title;

        const spanEl = document.createElement("span");
        spanEl.innerText = dataResults[i].vote_average;
        spanEl.classList.add(getColor(dataResults[i].vote_average));

        movieEl.append(imgEl, divEl);
        divEl.append(h4El, spanEl);
    
        justForSection.append(movieEl);
    };
}

const getColor = (voteScore) => {
    if (voteScore >= 8) {
        return "green"
    } else if (voteScore >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

const renderReview = () => {
    mainSection.innerHTML = "";

    
}

fetchMovies(API_URL);

