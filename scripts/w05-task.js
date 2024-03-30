/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples= (templesElement)=>{
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
const reset= templesElement.article;




/* filterTemples Function */
function filterTemples(temples) {
    reset();
let filter = document.getElementById("filtered").value;

switch (filter) {

    case "Utah":
    displayTemples(temples.filter(Temples => Temples.location.includes("Utah")));
    break;
    case "Notutah":
    displayTemples(temples.filter(outsideTemples => !outsideTemples.location.includes("Utah")));
    break;
    case "Older":
    displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
    break;
    default:"all"
    displayTemples(temples);
  }
};


getTemples();


/* Event Listener */

document.querySelector("#fitered").addEventListener("change", () => {filterTemples(templeList)});