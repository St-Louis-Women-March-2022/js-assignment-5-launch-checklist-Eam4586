// Write your helper functions here!
// require('isomorphic-fetch');

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

function validateInput(inputNumber) {
    // let inputNumber = Number(event);
    if (inputNumber === ""){
        return "empty";
    }

    else if (isNaN(inputNumber)){
        return "not number";
    }

    else if (isNaN(inputNumber)===false){
        return "is a number"
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById ("pilotStatus")
    let copilotStatus = document.getElementById ("copilotStatus")
    let fuelStatus = document.getElementById ("fuelStatus")
    let cargoStatus = document.getElementById ("cargoStatus")
    let launchStatus = document.getElementById ("launchStatus")

    pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch.`;
    copilotStatus.innerHTML =`Copilot ${copilot} is ready for launch`;

    if (validateInput (pilot) === "empty" || validateInput (copilot) === "empty" || validateInput (fuelLevel) === "empty" || validateInput (cargoLevel) === "empty" ) {
        alert("All fields are required!");
    }

    else if (validateInput (cargoLevel) === "not number" || validateInput (fuelLevel) === "not number") {
        alert ("Cargo Mass and Fuel Levels must be entered as numbers.");
    }

    else if (validateInput (pilot) === "is a number" || validateInput (copilot) === "is a number") {
        alert ("Pilot Name and CoPilot Name must be entered as a word.");
    
    } else {    

        if (fuelLevel>=10000 && cargoLevel<10000){
            fuelStatus.innerHTML =`There is enough fuel for the journey.`;
            cargoStatus.innerHTML = `Cargo is light enough for launch.`
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
            list.style.visibility = "visible";
        }
        
        else if (fuelLevel<10000){
            fuelStatus.innerHTML =`There is not enough fuel for the journey.`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            list.style.visibility = "visible";
        }

        else if (cargoLevel>10000){
            cargoStatus.innerHTML = `Cargo is too heavy.`
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            list.style.visibility = "visible";
        };
    };
    };

async function myFetch() {
    let planetsReturned;
    
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json()
        
        });

    return planetsReturned;
};

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
};

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
