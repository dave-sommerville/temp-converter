'use strict';
/*----------------------------------------------------->

        Query Selectors

<----------------------------------------------------*/

const form = document.querySelector('form');
const input = document.querySelector('.initial-temp');

const output = document.querySelector('.output p');
const celsiusRadio = document.querySelector('#celsius');
const fahrenheitRadio = document.querySelector('#fahrenheit');
const convertButton = document.querySelector('.convert-button');
const modeSwitch = document.querySelector('.mode-switch');
const body = document.body;

/*----------------------------------------------------->

        Utility Functions

<----------------------------------------------------*/


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/*----------------------------------------------------->

        Temperature Converter

<----------------------------------------------------*/

convertButton.addEventListener('click', function(event) {

    const inputValue = parseFloat(input.value.trim());

    if (isNaN(inputValue)) {
        output.innerText = 'Please enter a valid number for the temperature.';
        return;
    }
    let result = '';
    if (celsiusRadio.checked) {
        result = `${inputValue}°F is equal to   
        ${toCelsius(inputValue).toFixed(2)}°C`;
    } else if (fahrenheitRadio.checked) {
        result = `${inputValue}°C is equal to 
        ${toFahrenheit(inputValue).toFixed(2)}°F`;
    } else {
        output.innerText("Please select either Celsius or Fahrenheit.");
        return;
    }
    output.innerText = result;
});
// I was unable to figure out how to get the degree symbol to display using
// special characters (&deg;) so I copy and pasted the character (°) and that
// seems to work fine 


/*----------------------------------------------------->

        Night Mode Switch 

<----------------------------------------------------*/

modeSwitch.addEventListener('click', function() {
    body.classList.toggle('night-mode');

    if (body.classList.contains('night-mode')) {
        themeToggleButton.innerText = 'Switch to Light Mode';
    } else {
        themeToggleButton.innerText = 'Switch to Night Mode';
    }
});