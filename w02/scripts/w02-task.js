/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Eliezar Gongora";

let CurrentYear = new Date().getFullYear();

let ProfilePicture = "images/EliezarGongora.png";



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.querySelector("#food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");



/* Step 4 - Adding Content */


nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = CurrentYear;

imageElement.setAttribute("src", ProfilePicture);

imageElement.setAttribute("alt", "Profile Picture of Eliezar Gongora");




/* Step 5 - Array */

const foodList = ["Hamburger", "Pizza", "Pupusas", "Pasta", "Seafood"];

foodElement.innerHTML = foodList;
let addflan = "Flan";
foodList.push(addflan);
foodElement.innerHTML += `<br>${foodList}`;