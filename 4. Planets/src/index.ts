type Situation = "Inhabited" | "Habitable" | "Uninhabitable" | "Unexplored!";
type Planet = {
    name: string;
    coordinates: string;
    situation: Situation;
    satellites: string[];
};
let menu

const planets: Planet[] = [];

function createPlanet() {
    let satellites: string[] = [];
    const name = prompt(`Give a name to your planet!`);
    const coordinates = prompt(`What are the coordinates of your planet!`);

    let situation: Situation | undefined;
    do {
        situation = prompt(`What is the situation of your planet? ("Inhabited" | "Habitable" | "Uninhabitable" | "Unexplored!")`) as Situation;
    } while (!situation);

    let satellitesYorN = prompt(`Does your planet have a satellite?`);

    if (satellitesYorN === "Yes") {
        do {
            const newSatellite = prompt(`What is its name?`);
            satellites.push(newSatellite);
            satellitesYorN = prompt(`Does your planet have another satellite?`);
        } while (satellitesYorN === "Yes");
    }

    const planet: Planet = {
        name: name,
        coordinates: coordinates,
        situation: situation,
        satellites: satellites,
    };

    planets.push(planet); // Add the planet to the 'planets' array
    return planet; // Return the created planet
}

function refreshSituation() {
    const name = prompt(`What is the name of the planet to be updated?`);
    const planetFound = planets.find(planet => planet.name === name)
    if (planetFound) {
        const newSituation = prompt(`What is the new situation of the planet? ("Inhabited" | "Habitable" | "Uninhabitable" | "Unexplored!")`) as Situation
        planetFound.situation = newSituation
        alert(`Situation of planet ${name} updated to ${newSituation}`);
    } else {
        alert(`Planet with name ${name} not found`)
    }
}   

function addSatellite() {
    const name = prompt(`Search for the planet`);
    const planetFound = planets.find(planet => planet.name === name);
    if (planetFound) {
        const satelliteName = prompt(`Enter a name for your satellite`)
        planetFound.satellites.push(satelliteName)
    } else {
        alert(`Planet with name ${name} was not found`)
    }
}

function removeSatellite() {
    const name = prompt(`Search for the planet`);
    const planetFound = planets.find(planet => planet.name === name);
    if (planetFound) {
        const satelliteName = prompt(`Enter the name of the satellite you want to remove`) 
        const satelliteIndex = planetFound.satellites.indexOf(satelliteName);

        if (satelliteIndex !== -1) {
            planetFound.satellites.splice(satelliteIndex, 1);
            alert(`Satellite ${satelliteName} removed from planet ${name}.`);
        } else {
            alert(`Satellite with name ${satelliteName} not found on planet ${name}.`);
        }
    } else {
        alert(`Planet with name ${name} not found.`);
    }
}


function listPlanets() {
    if (planets.length === 0) {
        alert('No planets available.');
        return;
    }

    let planetListMessage = 'List of Planets:\n';

    for (const planet of planets) {
        const satellitesList = planet.satellites.length > 0 ? `Satellites: ${planet.satellites.join(', ')}` : 'No satellites';
        planetListMessage += `Name: ${planet.name}, Coordinates: ${planet.coordinates}, Situation: ${planet.situation}, ${satellitesList}\n`;
    }

    alert(planetListMessage);
}

do {
    menu = prompt(`1. Create a planet!\n2. Update planet situation!\n3. Add a satellite!\n4. Remove a satellite!\n5. List all planets!\n6. Exit!`) || '6';

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
            alert(`You chose to exit!`);
            break;
        default:
            alert('Invalid option!');
    }
} while (menu !== '6');