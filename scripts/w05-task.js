/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("div#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templesElement)=>{
  templesElement.forEach((temple) => {

      let article = document.createElement("article");
  
      let templeName = document.createElement("h3");
      templeName.textContent = temple.templeName;
  
      let img = document.createElement("img");
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", temple.templeName);
  
      article.appendChild(templeName);
      article.appendChild(img);
  
      document.querySelector("#temples").appendChild(article);
    });
  };

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();
  displayTemples(templeList);
  console.log(templeList);
};


/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};


/* filterTemples Function */
function filterTemples(temples) {
  reset();
  const filter = document.getElementById("filtered").value;

  let filteredTemples;
  switch (filter) {
    case "utah":
    filteredTemples = temples.filter(t => t.location.includes("Utah"));
    break;
    case "notutah":
    filteredTemples = temples.filter(t => !t.location.includes("Utah"));
    break;
    case "older":
    filteredTemples = temples.filter(t => new Date(t.dedicated) < new Date(1950, 0, 1));
    break;
    default:"all"
    filteredTemples = temples;
  }
  console.log("Filtered:", filteredTemples);
  displayTemples(filteredTemples);
};


getTemples();


/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => filterTemples(templeList));
