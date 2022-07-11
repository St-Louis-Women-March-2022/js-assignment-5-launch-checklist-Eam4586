// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const destination = document.getElementById(“output”);
    destination.innerHTML = 
    <div>
        <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json.name}</li>
                <li>Diameter: ${json.diameter}</li>
                <li>Star: ${json.star}</li>
                <li>Distance from Earth: ${json.distance}</li>
                <li>Number of Moons: ${json.moons}</li>
            </ol>
            <img src="${json.image}">
</div>
};

function validateInput(event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
        alert("All fields are required!")};

    if (isNAN(cargoMassInput.value) || (fuelLevelInput.value)) {
        alert ("Cargo Mass and Fuel Levels must be entered as a number.")}

    if (isNAN(pilotNameInput.value) || (copilotNameInput.value) === false) {
        alert ("Pilot Name and CoPilot Name must be entered as a word.") }
        event.preventDefault();
         };

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    element.setAttribute("pilotStatus", "${pilotNameInput} Ready");
    element.setAttribute("copilotStatus", "${copilotNameInput} Ready");
   
    if (fuelLevelInput<10,000){
        element.setAttribute("fuelStatus",`There is not enough fuel for the journey.`);
        element.setAttribute("launchStatus", `Shuttle not ready for launch`);
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";
    }

    else if (cargoMassInput>10,000){
        element.setAttribute("launchStatus", `Shuttle not ready for launch`);
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";
    }

    else {
        element.setAttribute("launchStatus", `Shuttle is ready for launch`);
        launchStatus.style.color = "green";
    }
};

async function myFetch() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        const planetsReturned = document.getElementById("name");
} );
    

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
