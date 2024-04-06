/* Declare and initialize global variables */
const moviesElement = document.querySelector("div#movies");
let movieList = [];

/* display Function */
const displayMovies = (movieElement)=>{
  movieElement.forEach((movie) => {

      let article = document.createElement("div");
      let cardLeftSide = document.createElement('span');
      cardLeftSide.setAttribute("id", "left-side");
  
      let movieName = document.createElement("h5");
      movieName.textContent = movie.titleText.text;
      let moviePlot = document.createElement("h4");
      moviePlot.textContent = movie.plot.plotText.plainText;
      // TODO add year and rating
      //let rating = document.createElement("h5");
      //rating.textContent = movie.ratingSummary.aggregateRating.plainText;
  
      let img = document.createElement("img");
      img.setAttribute("src", movie.primaryImage.imageUrl);
      img.setAttribute("alt", movie.titleText.text);

      cardLeftSide.appendChild(movieName);
     // cardLeftSide.appendChild(rating);
      // TODO append to cardLeftSide the date and the rating
      cardLeftSide.appendChild(moviePlot);
      
      article.appendChild(cardLeftSide);
      article.appendChild(img);
  
      document.querySelector("#movies").appendChild(article);
    });
  };

/* async getMovies Function using fetch()*/
const getMovies= async () => {
  const response = await fetch("https://github.com/EliezarGongora/cse121b/blob/main/project/Film.JSON", options);
  movieList = await response.json();
  
  displayMovies(movieList);
  console.log(movieList);
};


/* reset Function */
const reset = () => {
  moviesElement.innerHTML = "";
};


/* sortMovies Function */
function sortMovies(movies) {
  reset();
  const sort = document.getElementById("sorted").value;

  let sortedMovies;
  switch (sort) {
    case "release":
      sortedMovies = movies.sort((a, b) => new Date(a.releaseDate.year, a.releaseDate.month, a.releaseDate.day) - new Date(b.releaseDate.year, b.releaseDate.month, b.releaseDate.day));
    break;
    case "rating":
      sortedMovies = movies.sort((a, b) => a.ratingsSummary.aggregateRating - b.ratingsSummary.aggregateRating);
    break;
    case "alphabetical":
      sortedMovies = movies.sort((a, b) => {
        const nameA = a.titleText.text.toUpperCase(); // ignore upper and lowercase
        const nameB = b.titleText.text.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    break;
    default:"all"
    sortedMovies = movies;
  }
  displayMovies(sortedMovies);
};


getMovies();


/* Event Listener */

document.querySelector("#sorted").addEventListener("change", () => sortMovies(movieList.data));
