// ==========================
// 1. Change styles and print paragraph every alternate click
// ==========================
function changeStyle() {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    const h1 = document.querySelector('h1');
    h1.style.color = 'green';
}

function print() {
    const p = document.createElement("p");
    p.textContent = "I have printed a paragraph";
    document.querySelector("h1").appendChild(p);
}

let attached = true; // toggle flag

document.addEventListener("click", function toggle() {
    // Always change styles
    changeStyle();

    // Print paragraph on alternate clicks
    if (attached) {
        print();
    }

    attached = !attached; // flip flag
});

// ==========================
// 2. Prevent default for 3rd link
// ==========================
let links = document.querySelectorAll("a");
let thirdLink = links[2]; // GitHub link

thirdLink.addEventListener("click", function(event) {
    event.preventDefault(); // stop navigation
    console.log("Default action prevented for GitHub link!");
});

// ==========================
// 3. Create 10 paragraphs dynamically with click listeners
// ==========================
let DIV = document.createElement('div');

function para(event) {
    console.log("Clicked on: " + event.target.textContent);
}

for (let i = 1; i <= 10; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph ' + i;

    // Add click listener to each paragraph
    newElement.addEventListener('click', para);

    DIV.appendChild(newElement);
}

// Append the container div to body
document.body.appendChild(DIV);

// ==========================
// 4. Event delegation example (click on spans inside #wrapper)
// ==========================
let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    // Only react if a span was clicked
    if (event.target.nodeName === 'SPAN') {
        console.log("Clicked on span: " + event.target.textContent);
    }
});
