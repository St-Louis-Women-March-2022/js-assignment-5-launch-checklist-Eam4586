// Write your helper functions here!
// SUDO Code:
// I need to populate the planet Information
//I need to have the form validate
not empty
not Number
yes number
//I need to have the form change
//fuel, cargo, pilot, copilot
//I need to have the form 


require('isomorphic-fetch');

async function myFetch() {
    const planets = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then(function(response) {
        return response.json()
    });
    return planets;
}

function pickPlanet(planets) {
    let randomNum = Math.floor(Math.random() * planets.length)
    return planets[randomNum]
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    function myDestinationFetch() {
        const json = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            response.json().then(function (json) {
                const destination = document.getElementById("missionTarget");
                destination.innerHTML = `
                <div>
                    <h2>Mission Destination</h2>
                        <ol>
                            <li>Name: ${randomNumber.name}</li>
                            <li>Diameter: ${randomNumber.diameter}</li>
                            <li>Star: ${randomNumber.star}</li>
                            <li>Distance from Earth: ${randomNumber.distance}</li>
                            <li>Number of Moons: ${randomNumber.moons}</li>
                        </ol>
                        <img src="${randomNumber.imageUrl}">
                        </div>
                        `;
            }
        }

function formSubmission() {

                element.setAttribute("pilotStatus", "${pilotNameInput} Ready");
                element.setAttribute("copilotStatus", "${copilotNameInput} Ready");

                let pilotNameInput = document.querySelector("input[name=pilotName]");
                let copilotNameInput = document.querySelector("input[name=copilotName]");
                let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
                let cargoMassInput = document.querySelector("input[name=cargoMass]");

                window.addEventListener("load", function () {
                    const form = document.getElementById("launchForm");
                    form.addEventListener("formSubmit", function () {

                        if (pilotNameInput.value === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") {
                            alert("All fields are required!");
                        }

                        else if (isNaN(cargoMassInput) || isNAN(fuelLevelInput)) {
                            alert("Cargo Mass and Fuel Levels must be entered as a number.");
                        }

                        else if (isNAN(pilotNameInput) === false || isNAN(copilotNameInput) === false) {
                            alert("Pilot Name and CoPilot Name must be entered as a word.");
                        }

                        else {

                            if (fuelLevelInput < 10, 000) {
                                element.setAttribute("fuelStatus", `There is not enough fuel for the journey.`);
                                element.setAttribute("launchStatus", `Shuttle not ready for launch`);
                                launchStatus.style.color = "red";
                                faultyItems.style.visibility = "visible";
                            }

                            else if (cargoMassInput > 10, 000) {
                                element.setAttribute("launchStatus", `Shuttle not ready for launch`);
                                launchStatus.style.color = "red";
                                faultyItems.style.visibility = "visible";
                            }

                            else {
                                element.setAttribute("launchStatus", `Shuttle is ready for launch`);
                                launchStatus.style.color = "green";
                            };
                        };
                    }

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;
