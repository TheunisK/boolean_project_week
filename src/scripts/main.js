const API_KEY = "api_key=4e552a3cec3fae1872dba039ca3b0860";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const posterURL = "https://image.tmdb.org/t/p/w500";

const popularSection = document.getElementById("popularSection");
const justForSection = document.getElementById("justForYouSection");
const mainSection = document.getElementById("mainSection");
const formEl = document.getElementById("form");

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
            const movieOject = {
                movieTitle: h4El.innerText,
                imageURL: posterURL+dataResults[i].poster_path,

            }
            console.log(h4El.innerText);
            console.log(posterURL+dataResults[i].poster_path);
            renderReviewPage(movieOject);
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

const renderReviewPage = (movieObject) => {
    mainSection.innerHTML = "";
    const formEl = document.getElementById

    mainSection.innerHTML = `<section id="reviewSection">
    <h3>${movieObject.movieTitle}</h3>
    <div class="reviewContainer">
      <img src="${movieObject.imageURL}" alt="Image"></img>
      <div class="review-aside">
        <h5>Rate and review this movie</h5>
        <div class="star-container">
          <div class="star-widget">
            <input type="radio" name="rate" id="rate-10">
            <label for="rate-10" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-9">
            <label for="rate-9" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-8">
            <label for="rate-8" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-7">
            <label for="rate-7" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-6">
            <label for="rate-6" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-5">
            <label for="rate-5" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-4">
            <label for="rate-4" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-3">
            <label for="rate-3" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-2">
            <label for="rate-2" class="fa fa-star"></label>
            <input type="radio" name="rate" id="rate-1">
            <label for="rate-1" class="fa fa-star"></label>
          </div>
        </div>
        <form>
          <div class="textarea">
            <textarea cols="70" placeholder="How was the movie?"></textarea>
          </div>
          <div class="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
        <h5>Top Review</h5>
        <div class="pastReview">
          <p>
            "I was not expecting that, I had visions of a film along the same lines as Snake Eyes, that was an out of date bagel, this was a four course banquet.
          </p>
          <p>
              Fast paced, energetic, and relentless, not particularly the genre I normally go to, or enjoy, but I loved every second of it, a visual masterpiece. Superb acting, terrific musics, but it's produced in such a magical way, it is stunning."
          </p>
        </div>
      </div>
    </div>
  </section>`;

  formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    const stars = document.getElementsByTagName("input");
    console.log(stars.value);
  })

    
}

fetchMovies(API_URL);

