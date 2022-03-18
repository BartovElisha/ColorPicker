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

    constructor(fullColor,hexValue) {
        this.fullColor = fullColor;
        this.hexValue = hexValue;
    }

    generateHexColor() {
        this.hexValue = (this.#redColor).toString(16)+
                        (this.#greenColor).toString(16)+
                        (this.#blueColor).toString(16);

            return this.hexValue;
        }

    generateFullColor() {
        // need add converion from R,G,B values to Decimal Value
        this.fullColor = 0;
        return this.fullColor;
    }
}

newRgbColor = new RgbColor();

function generateRgbColor() {
    displayPreviousRgbColor();
    
    // Get new RGB Color from input
    newRgbColor.redColor = +document.getElementById('validationCustom01').value; 
    newRgbColor.greenColor = +document.getElementById('validationCustom02').value; 
    newRgbColor.blueColor = +document.getElementById('validationCustom03').value; 
    newRgbColor.hexValue = newRgbColor.generateHexColor();
    newRgbColor.fullColor = newRgbColor.generateFullColor();

    console.log('Red: '+newRgbColor.redColor);
    console.log('Green: '+newRgbColor.greenColor);
    console.log('Blue: '+newRgbColor.blueColor);
    console.log('Hex: #'+newRgbColor.hexValue);
    console.log('Full Color: '+newRgbColor.fullColor);

    displayNewRgbColor();
}

function displayPreviousRgbColor() {
    const previousColorViwerElement = document.getElementById('previous-color-viewer');
    document.getElementById('previous-color-box').remove();

    // Add new color viwer elements
    previousColorViwerElement.innerHTML += `<div id="previous-color-box" class="color-box" style="background-color: rgb(${newRgbColor.redColor}, ${newRgbColor.greenColor}, ${newRgbColor.blueColor});"></div>`
}

function displayNewRgbColor() {
    const newColorViwerElement = document.getElementById('new-color-viewer');
    document.getElementById('new-color-box').remove();

    // Add new color viwer elements
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
