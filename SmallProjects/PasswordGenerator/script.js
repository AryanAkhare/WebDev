// ------------------------
// PASSWORD GENERATOR SCRIPT
// ------------------------

// DOM elements
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const indicator = document.querySelector("[data-indicator]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const generateBtn = document.querySelector(".generateButton");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");

let passwordLength = 10;
setIndicator("#ccc");
// ------------------------
// HANDLE SLIDER
// ------------------------
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min))+"% 100%"
}

// initialize slider display
handleSlider();

inputSlider.addEventListener('input', (e) => {
    passwordLength = parseInt(e.target.value);
    handleSlider();
});

// ------------------------
// RANDOM GENERATORS
// ------------------------
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLowerCase() {
    return String.fromCharCode(getRandomInteger(97, 122)); // a-z
}

function generateUpperCase() {
    return String.fromCharCode(getRandomInteger(65, 90)); // A-Z
}

function generateNumber() {
    return String(getRandomInteger(0, 9));
}

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
function generateSymbol() {
    return symbols[getRandomInteger(0, symbols.length - 1)];
}

// ------------------------
// PASSWORD STRENGTH INDICATOR
// ------------------------
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`; 
}



function calcStrength(password) {
    let hasUpper = uppercaseCheck.checked;
    let hasLower = lowercaseCheck.checked;
    let hasNum = numbersCheck.checked;
    let hasSymbol = symbolsCheck.checked;

    if (hasUpper && hasLower && (hasNum || hasSymbol) && passwordLength >= 8) {
        setIndicator("#0f0"); // strong
    } else if ((hasLower || hasUpper) && (hasNum || hasSymbol) && passwordLength >= 6) {
        setIndicator("#ff0"); // medium
    } else {
        setIndicator("#f00"); // weak
    }
}

// ------------------------
// SHUFFLE PASSWORD
// ------------------------
function shufflePassword(password) {
    let arr = password.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = getRandomInteger(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

// ------------------------
// COPY TO CLIPBOARD
// ------------------------
async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied!";
        copyMsg.classList.add("active"); // add active class
    } catch (e) {
        copyMsg.innerText = "Failed to copy!";
        copyMsg.classList.add("active");
        console.error(e);
    }

    setTimeout(() => {
        copyMsg.innerText = "";
        copyMsg.classList.remove("active"); // remove active class after 2s
    }, 2000);
}


copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) copyContent();
});

// ------------------------
// CHECKBOX HANDLER
// ------------------------
function handleCheckBoxChange() {
    let checkCount = 0;
    allCheckBox.forEach(cb => {
        if (cb.checked) checkCount++;
    });

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach(cb => cb.addEventListener('change', handleCheckBoxChange));

// ------------------------
// GENERATE PASSWORD
// ------------------------
function generatePassword() {
    // at least one character from each selected type
    let functionArray = [];
    if (uppercaseCheck.checked) functionArray.push(generateUpperCase);
    if (lowercaseCheck.checked) functionArray.push(generateLowerCase);
    if (numbersCheck.checked) functionArray.push(generateNumber);
    if (symbolsCheck.checked) functionArray.push(generateSymbol);

    if (functionArray.length === 0) return; // no checkbox selected

    let password = "";

    // add one compulsory char of each type
    functionArray.forEach(func => password += func());

    // fill remaining length
    for (let i = 0; i < passwordLength - functionArray.length; i++) {
        const randFunc = functionArray[getRandomInteger(0, functionArray.length - 1)];
        password += randFunc();
    }

    // shuffle final password
    password = shufflePassword(password);

    // update UI
    passwordDisplay.value = password;

    // calculate strength
    calcStrength(password);
}

generateBtn.addEventListener('click', generatePassword);
