var menu;
var planets = [];
function createPlanet() {
    var satellites = [];
    var name = prompt("Give a name to your planet!");
    var coordinates = prompt("What are the coordinates of your planet!");
    var situation;
    do {
        situation = prompt("What is the situation of your planet? (\"Inhabited\" | \"Habitable\" | \"Uninhabitable\" | \"Unexplored!\")");
    } while (!situation);
    var satellitesYorN = prompt("Does your planet have a satellite?");
    if (satellitesYorN === "Yes") {
        do {
            var newSatellite = prompt("What is its name?");
            satellites.push(newSatellite);
            satellitesYorN = prompt("Does your planet have another satellite?");
        } while (satellitesYorN === "Yes");
    }
    var planet = {
        name: name,
        coordinates: coordinates,
        situation: situation,
        satellites: satellites,
    };
    planets.push(planet); // Add the planet to the 'planets' array
    return planet; // Return the created planet
}
function refreshSituation() {
    var name = prompt("What is the name of the planet to be updated?");
    var planetFound = planets.find(function (planet) { return planet.name === name; });
    if (planetFound) {
        var newSituation = prompt("What is the new situation of the planet? (\"Inhabited\" | \"Habitable\" | \"Uninhabitable\" | \"Unexplored!\")");
        planetFound.situation = newSituation;
        alert("Situation of planet ".concat(name, " updated to ").concat(newSituation));
    }
    else {
        alert("Planet with name ".concat(name, " not found"));
    }
}
function addSatellite() {
    var name = prompt("Search for the planet");
    var planetFound = planets.find(function (planet) { return planet.name === name; });
    if (planetFound) {
        var satelliteName = prompt("Enter a name for your satellite");
        planetFound.satellites.push(satelliteName);
    }
    else {
        alert("Planet with name ".concat(name, " was not found"));
    }
}
function removeSatellite() {
    var name = prompt("Search for the planet");
    var planetFound = planets.find(function (planet) { return planet.name === name; });
    if (planetFound) {
        var satelliteName = prompt("Enter the name of the satellite you want to remove");
        var satelliteIndex = planetFound.satellites.indexOf(satelliteName);
        if (satelliteIndex !== -1) {
            planetFound.satellites.splice(satelliteIndex, 1);
            alert("Satellite ".concat(satelliteName, " removed from planet ").concat(name, "."));
        }
        else {
            alert("Satellite with name ".concat(satelliteName, " not found on planet ").concat(name, "."));
        }
    }
    else {
        alert("Planet with name ".concat(name, " not found."));
    }
}
function listPlanets() {
    if (planets.length === 0) {
        alert('No planets available.');
        return;
    }
    var planetListMessage = 'List of Planets:\n';
    for (var _i = 0, planets_1 = planets; _i < planets_1.length; _i++) {
        var planet = planets_1[_i];
        var satellitesList = planet.satellites.length > 0 ? "Satellites: ".concat(planet.satellites.join(', ')) : 'No satellites';
        planetListMessage += "Name: ".concat(planet.name, ", Coordinates: ").concat(planet.coordinates, ", Situation: ").concat(planet.situation, ", ").concat(satellitesList, "\n");
    }
    alert(planetListMessage);
}
do {
    menu = prompt("1. Create a planet!\n2. Update planet situation!\n3. Add a satellite!\n4. Remove a satellite!\n5. List all planets!\n6. Exit!") || '6';
    switch (menu) {
        case '1':
            createPlanet();
            break;
        case '2':
            refreshSituation();
            break;
        case '3':
            addSatellite();
            break;
        case '4':
            removeSatellite();
            break;
        case '5':
            listPlanets();
            break;
        case '6':
            alert("You chose to exit!");
            break;
        default:
            alert('Invalid option!');
    }
} while (menu !== '6');
