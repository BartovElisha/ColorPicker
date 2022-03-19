// Class withPrivate variables
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
        let redHexValue = 0;
        let greenHexValue = 0;
        let blueHexValue = 0;

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

// Class with regular variables
// class RgbColor {
//     constructor(redColor,greenColor,blueColor,hexValue,colorName) {
//         this.redColor = redColor;
//         this.greenColor = greenColor;
//         this.blueColor = blueColor;
//         this.hexValue = hexValue;
//         this.colorName = colorName;
//     }

//     generateHexColor() {
//         let redHexValue = 0;
//         let greenHexValue = 0;
//         let blueHexValue = 0;

//         if(this.redColor < 16) {
//             redHexValue = '0' + (this.redColor).toString(16);
//         }
//         else {
//             redHexValue = ((this.redColor).toString(16));
//         }
//         redHexValue = redHexValue.toUpperCase();

//         if(this.greenColor < 16) {
//             greenHexValue = '0' + (this.greenColor).toString(16);
//         }
//         else {
//             greenHexValue = (this.greenColor).toString(16);
//         }
//         greenHexValue = greenHexValue.toUpperCase();

//         if(this.blueColor < 16) {
//             blueHexValue = '0' + (this.blueColor).toString(16);
//         }
//         else {
//             blueHexValue = (this.blueColor).toString(16);
//         }
//         blueHexValue = blueHexValue.toUpperCase();

//         return '#' + redHexValue + greenHexValue + blueHexValue;
//     }
// }

newRgbColor = new RgbColor();

function generateRgbColor() {
    displayPreviousRgbColor();
    
    // Get new RGB Color from input
    newRgbColor.redColor = +document.getElementById('validationCustom01').value;
    newRgbColor.greenColor = +document.getElementById('validationCustom02').value;
    newRgbColor.blueColor = +document.getElementById('validationCustom03').value;
    newRgbColor.hexValue = newRgbColor.generateHexColor();
    newRgbColor.colorName = document.getElementById('validationCustom04').value;

    displayNewRgbColor();
}

function displayPreviousRgbColor() {
    const previousColorViwerElement = document.getElementById('previous-color-viewer');
    document.getElementsByTagName('h5')[1].remove();
    document.getElementById('previous-color-box').remove();

    // Add new color viwer elements
    if(newRgbColor.colorName == undefined) {
        newRgbColor.colorName = '';
    }

    if(newRgbColor.hexValue == undefined) {
        newRgbColor.hexValue = '#'
    }

    previousColorViwerElement.innerHTML += `<h5 id="new-header-dark-mode">Previous RGB Color (Color Name: ${newRgbColor.colorName}, Hex: ${newRgbColor.hexValue})</h5>`;

    previousColorViwerElement.innerHTML += `<div id="previous-color-box" class="color-box" style="background-color: rgb(${newRgbColor.redColor}, ${newRgbColor.greenColor}, ${newRgbColor.blueColor});"></div>`
}

function displayNewRgbColor() {
    const newColorViwerElement = document.getElementById('new-color-viewer');
    document.getElementsByTagName('h5')[0].remove();
    document.getElementById('new-color-box').remove();

    // Add new color viwer elements
    newColorViwerElement.innerHTML += `<h5 id="new-header-dark-mode">New RGB Color (Color Name: ${newRgbColor.colorName}, Hex: ${newRgbColor.hexValue})</h5>`;

    newColorViwerElement.innerHTML += `<div id="new-color-box" class="color-box" style="background-color: rgb(${newRgbColor.redColor}, ${newRgbColor.greenColor}, ${newRgbColor.blueColor});"></div>`
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
