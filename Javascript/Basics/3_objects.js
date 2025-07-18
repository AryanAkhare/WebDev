console.log("Start");

//---------------------------------------------
// OBJECT CREATION USING OBJECT LITERAL
//---------------------------------------------

const rect = {
    length: 1,
    breadth: 2,
    draw() {
        console.log("Draw rectangle");
    }
};

console.log(rect.length); // Output: 1
rect.draw();              // Output: Draw rectangle

//---------------------------------------------
// FACTORY FUNCTION (NO PARAMETERS)
//---------------------------------------------

function createRectangle() {
    const rect = {
        length: 1,
        breadth: 2,
        draw: function () {
            console.log("Draw rectangle");
        }
    };
    return rect;
}

let object1 = createRectangle();

console.log("Perimeter of rect1: " + object1.length + object1.breadth);   // Incorrect: Outputs "12" (string concatenation)
console.log("Perimeter of rect1: " + (object1.length + object1.breadth)); // Correct: Outputs 3

//---------------------------------------------
// PARAMETERIZED FACTORY FUNCTION
//---------------------------------------------

function createRectangle1(len, bre) {
    return {
        length: len,
        breadth: bre,
        draw: function () {
            console.log("Draw rectangle");
        }
    };
}

let obj2 = createRectangle1(2, 3);
console.log("Sum of length and breadth: " + (obj2.length + obj2.breadth)); // Output: 5

//---------------------------------------------
// CONSTRUCTOR FUNCTION
//---------------------------------------------

function Circle() {
    this.radius = 5;
    this.area = function () {
        return 3.14 * this.radius * this.radius;
    };
}

let circleObj = new Circle();
console.log("Area is: " + circleObj.area()); // Output: Area is: 78.5

// Dynamic nature of objects
circleObj.color = "yellow";
console.log(circleObj.color); // Output: yellow

delete circleObj.color;
console.log(circleObj.color); // Output: undefined

//---------------------------------------------
// DYNAMIC FUNCTION CONSTRUCTOR
//---------------------------------------------

// let objName = new funcName(`parameters, declaration, methods`);
let Circle1 = new Function(`
    this.radius = 7;
    this.area = function() {
        return 3.14 * this.radius * this.radius;
    };
`);

let circleObj2 = new Circle1();
console.log("Area is: " + circleObj2.area()); // Output: Area is: 153.86
