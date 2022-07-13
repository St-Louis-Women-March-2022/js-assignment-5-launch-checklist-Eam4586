// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const destination = document.getElementById(missionTarget);
        destination.innerHTML = `
        <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${imageUrl}">`;
}

function validateInput(event) {
    let inputNumber = Number(event);
    if (inputNumber === ""){
        return "empty";
    }

    else if (isNAN(inputNumber)){
        return "not number";
    }

    else if (isNAN(inputNumber)===false){
        return "is a number"
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    element.setAttribute("pilotStatus", "${pilotNameInput} Ready");
    element.setAttribute("copilotStatus", "${copilotNameInput} Ready");

let pilotNameInput = document.querySelector("input[name=pilotName]");
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]");

    if (validateInput (pilotNameInput) === "empty" || validateInput (copilotNameInput) === "empty" || validateInput (fuelLevelInput) === "empty" || validateInput (cargoMassInput) === "empty" ) {
        alert("All fields are required!");}

    else if (validateInput (cargoMassInput) === "not number" || validateInput (fuelLevelInput) === "not number") {
        alert ("Cargo Mass and Fuel Levels must be entered as a number.");}

    else if (validateInput (pilotNameInput) === "is a number" || validateInput (copilotNameInput) === "is a number"); {
        alert ("Pilot Name and CoPilot Name must be entered as a word.");}

    // else {    
   
    //     if (fuelLevelInput<10,000){
    //         element.setAttribute("fuelStatus",`There is not enough fuel for the journey.`);
    //         element.setAttribute("launchStatus", `Shuttle not ready for launch`);
    //         launchStatus.style.color = "red";
    //         faultyItems.style.visibility = "visible";
    //     }

    //     else if (cargoMassInput>10,000){
    //         element.setAttribute("launchStatus", `Shuttle not ready for launch`);
    //         launchStatus.style.color = "red";
    //         faultyItems.style.visibility = "visible";
    //     }

    //     else {
    //         element.setAttribute("launchStatus", `Shuttle is ready for launch`);
    //         launchStatus.style.color = "green";
    //     }
    // }
    }

async function myFetch() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json){
            const planetsReturned = document.getElementById("name");
    
    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
});
    });
};

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets);
    return index;
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
