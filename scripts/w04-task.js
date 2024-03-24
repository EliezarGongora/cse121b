/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Eliezar Gongora",

    photo: "images/EliezarGongora1.png",

    favoriteFoods:["Hamburger", "Pizza", "Pupusas", "Pasta", "Seafood","Sushi"],

    hobbies: ["Watch movies", "Listen to music", "Play with my dog", "Take pictures",],

    placesLived: [
        {place:"El Salvador",
         length: "21 years"},

        {place:"Guatemala",
         length: "2 years"}
    ]


};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place:"Idaho, USA",
        length: "5 years"
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie =>{
    let ul = document.createElement("ul");
    ul.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(places=>{
    let place = document.createElement("dt");
    place.textContent = places.place;
    document.querySelector("#places-lived").appendChild(place);
    
    let length = document.createElement("dd");
    length.textContent = places.length;
    document.querySelector("#places-lived").appendChild(length);
});

