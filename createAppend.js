// html elements
let body = document.querySelector("body");
let container = document.querySelector(".container");

// 1. Create an h2 element.
// - Store it in a variable called h2.
let h2 = document.createElement("h2");

// 2. Set the innerHTML of h2 to your name.
h2.innerHTML = "Kenneth Payne";


// 3. Style at least two different properties for the heading.
h2.style.backgroundColor = "black";
h2.style.color = "white";
h2.style.fontSize = "50px";

// 4. Select the container div and append the h2 element.
container.appendChild(h2);


// 5. Create a paragraph element.
// - Store it in a variable called para.
let par = document.createElement("p");

// 6. Set the innerHTML of para to a fact about yourself.
par.innerHTML = "I love to play outside <i>by</i> myself";

// 7. Style at least two different properties for the paragraph.
par.style.fontWeight = "bold";
par.style.fontSize = "20px";
// 8. Select the container div and append the paragraph element.
container.appendChild(par);


// Uncomment the code below after completing 1-8.
// Where do you see this on the page?
// Why is it located there even though the body is selected?
let h1 = document.createElement('h1');
h1.innerHTML = "My Webpage";
body.appendChild(h1);
// because it becomes the last child