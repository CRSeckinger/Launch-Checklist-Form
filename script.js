// Write your JavaScript code here!
window.addEventListener("load", function() {  

   let form = document.getElementById("launchForm");

form.addEventListener("submit", function(event) {
   event.preventDefault();
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let cargoMass = document.getElementById("cargoMass");
   let fuelLevel = document.getElementById("fuelLevel");
      if (copilotName.value === "" || pilotName.value === "" || cargoMass.value === "" || fuelLevel.value === "") {
         alert("All fields are required!");
         
      } 
   });

});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
