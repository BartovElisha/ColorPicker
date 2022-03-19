// Class with Private variables
class RgbColor {
    #redColor = 255;
    #greenColor = 255;
    #blueColor = 255;
        
    set redColor(value) {
        if(isNaN(value) || value < 0 || value > 255) {  // Return true if value is not a number
            alert('Invalid Value');
            return;
        }
        this.#redColor = value;
    }

    set greenColor(value) {
        if(isNaN(value) || value < 0 || value > 255) {  // Return true if value is not a number
            alert('Invalid Value');
            return;
        }
        this.#greenColor = value;
    }

    set blueColor(value) {
        if(isNaN(value) || value < 0 || value > 255) {  // Return true if value is not a number
            alert('Invalid Value');
            return;
        }
        this.#blueColor = value;
    }

    get redColor() {
        return this.#redColor;
    }

    get greenColor() {
        return this.#greenColor;
    }

    get blueColor() {
        return this.#blueColor;
    }

    constructor(hexValue,colorName) {
        this.hexValue = hexValue;
        this.colorName = colorName;
    }

    generateHexColor() {
        let redHexValue = '';
        let greenHexValue = '';
        let blueHexValue = '';

        if(this.#redColor < 16) {
            redHexValue = '0' + (this.#redColor).toString(16);
        }
        else {
            redHexValue = ((this.#redColor).toString(16));
        }
        redHexValue = redHexValue.toUpperCase();

        if(this.#greenColor < 16) {
            greenHexValue = '0' + (this.#greenColor).toString(16);
        }
        else {
            greenHexValue = (this.#greenColor).toString(16);
        }
        greenHexValue = greenHexValue.toUpperCase();

        if(this.#blueColor < 16) {
            blueHexValue = '0' + (this.#blueColor).toString(16);
        }
        else {
            blueHexValue = (this.#blueColor).toString(16);
        }
        blueHexValue = blueHexValue.toUpperCase();

        return '#' + redHexValue + greenHexValue + blueHexValue;
    }
}

let previousRgbColor = new RgbColor();
let colorsHistoryMap = new Map();

function generateRgbColor() {
    let newRgbColor = new RgbColor(); 

    displayPreviousRgbColor();
    
    // Get new RGB Color from input
    newRgbColor.redColor = +document.getElementById('validationCustom01').value;
    newRgbColor.greenColor = +document.getElementById('validationCustom02').value;
    newRgbColor.blueColor = +document.getElementById('validationCustom03').value;
    newRgbColor.colorName = document.getElementById('validationCustom04').value;
    newRgbColor.hexValue = newRgbColor.generateHexColor();    

    addColorToHistoryMap(newRgbColor);

    // Update previousRgbColor
    // Get Data from colors history Map
    previousRgbColor.redColor = colorsHistoryMap.get(newRgbColor.colorName).redColor;
    previousRgbColor.greenColor = colorsHistoryMap.get(newRgbColor.colorName).greenColor;
    previousRgbColor.blueColor = colorsHistoryMap.get(newRgbColor.colorName).blueColor;
    previousRgbColor.colorName = colorsHistoryMap.get(newRgbColor.colorName).colorName;
    previousRgbColor.hexValue = colorsHistoryMap.get(newRgbColor.colorName).hexValue;

    fillColorsDropdownList();

    displayNewRgbColor(newRgbColor);
}

function displayPreviousRgbColor() {
    const previousColorViwerElement = document.getElementById('previous-color-viewer');
    document.getElementById('previous-header-dark-mode').remove();
    document.getElementById('previous-color-box').remove();

    // Add new color viwer elements
    if(previousRgbColor.colorName == undefined) {
        previousRgbColor.colorName = '';
    }

    if(previousRgbColor.hexValue == undefined) {
        previousRgbColor.hexValue = ''
    }

    previousColorViwerElement.innerHTML += `<h5 id="previous-header-dark-mode">Previous RGB Color (Color Name: ${previousRgbColor.colorName}, RGB(${previousRgbColor.redColor},${previousRgbColor.greenColor},${previousRgbColor.blueColor}), Hex Value: ${previousRgbColor.hexValue})</h5>`;

    previousColorViwerElement.innerHTML += `<div id="previous-color-box" class="color-box" style="background-color: rgb(${previousRgbColor.redColor}, ${previousRgbColor.greenColor}, ${previousRgbColor.blueColor});"></div>`
}

function displayNewRgbColor(newRgbColor) {
    const newColorViwerElement = document.getElementById('new-color-viewer');
    document.getElementById('new-header-dark-mode').remove();
    document.getElementById('new-color-box').remove();

    // Add new color viwer elements
    newColorViwerElement.innerHTML += `<h5 id="new-header-dark-mode">New RGB Color (Color Name: ${newRgbColor.colorName}, RGB(${newRgbColor.redColor},${newRgbColor.greenColor},${newRgbColor.blueColor}), Hex Value: ${newRgbColor.hexValue})</h5>`;

    newColorViwerElement.innerHTML += `<div id="new-color-box" class="color-box" style="background-color: rgb(${newRgbColor.redColor}, ${newRgbColor.greenColor}, ${newRgbColor.blueColor});"></div>`
}

function addColorToHistoryMap(newRgbColor) {
    colorsHistoryMap.set(newRgbColor.colorName,newRgbColor)
}

// This function gets colors from the colors history Map and sets it to inner HTML dropdown list
function fillColorsDropdownList() {
    const dropdownColorsElement = document.getElementById('dropdown-list');

    // Clear old colors history list
    while(document.getElementById('li-color-row')) {
        let listElement = document.getElementById('li-color-row');
        listElement.remove();
    }

    // Print new colors history list
    for(let color of colorsHistoryMap.keys()) {
        dropdownColorsElement.innerHTML += `<li id="li-color-row"><a class="dropdown-item" href="#" onclick="showColorFromHistory('${color}')">${color}</a></li>`;        
    }
}

function showColorFromHistory(color) {
    let newRgbColor = new RgbColor();

    // Get Data from colors history Map
    newRgbColor.redColor = colorsHistoryMap.get(color).redColor;
    newRgbColor.greenColor = colorsHistoryMap.get(color).greenColor;
    newRgbColor.blueColor = colorsHistoryMap.get(color).blueColor;
    newRgbColor.colorName = colorsHistoryMap.get(color).colorName;
    newRgbColor.hexValue = colorsHistoryMap.get(color).hexValue;

    displayNewRgbColor(newRgbColor);
}

// Change Dark/Light mode function
function togleDisplayDarkLightMode() {
    let bodyElement = document.body;
    let headerElement = document.getElementById('header-dark-mode');
    let formElement = document.getElementById('form-dark-mode');
    let newHeaderElement = document.getElementById('new-header-dark-mode');
    let previousHeaderElement = document.getElementById('previous-header-dark-mode');
    let DarkSvgiconElement = document.getElementById('icon-dark-mode');
    
    // Body Element update Dark/Light mode
    bodyElement.classList.toggle("bg-dark");

    // Header Element update Dark/Light mode
    headerElement.classList.toggle("bg-dark");
    headerElement.classList.toggle("text-white");
        
    // Form Element update Dark/Light mode
    formElement.classList.toggle("text-white")

    // Color Viewer Header Elements update Dark/Light mode
    newHeaderElement.classList.toggle("text-white")
    previousHeaderElement.classList.toggle("text-white")

    // Display mode icon Element update Dark/Light mode
    DarkSvgiconElement.classList.toggle("icon-dark");
}
