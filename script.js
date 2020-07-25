// Write your JavaScript code here!
window.addEventListener("load", function() {  
//fetch JSON planetary 
   let json = []
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      const missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML = `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[0].name}</li>
         <li>Diameter: ${json[0].diameter}</li>
         <li>Star: ${json[0].star}</li>
         <li>Distance from Earth: ${json[0].distance}</li>
         <li>Number of Moons: ${json[0].moons}</li>
      </ol>
      <img src="${json[0].image}">`;
      });
   });

   let form = document.getElementById("launchForm");

form.addEventListener("submit", function(event) {
   event.preventDefault();
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

      if (pilotName.value === "" || copilotName.value === "" || cargoMass.value === "" || fuelLevel.value === "") {
         alert("All fields are required!");
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Invalid Input!");
      } else {
         //shuttle requirements

         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
      
         if (fuelLevel.value < 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            fuelStatus.innerHTML = 'Fuel level too low for launch.';
            launchStatus.style.color = 'red';
         } else if (cargoMass.value > 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            cargoStatus.innerHTML = 'Too much Cargo weight for take-off.';
            launchStatus.style.color = 'red';
         } else {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            launchStatus.style.color = 'green';
         }
      }
      
      });
   });
 


  


//     This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">