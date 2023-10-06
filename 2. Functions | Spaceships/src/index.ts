const spaceShipList: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
}[] = [];

function createSpaceship() {
    const name = prompt('Enter the spaceship name:');
    const pilot = prompt('Enter the pilot name:');
    const crewLimitInput = prompt('Enter the crew limit:');
    
    if (name && pilot && crewLimitInput) {
        const crewLimit = parseInt(crewLimitInput, 10);
        if (!isNaN(crewLimit)) {
            const spaceship = {
                name: name,
                pilot: pilot,
                crewLimit: crewLimit,
                crew: [],
                inMission: false,
            };
            spaceShipList.push(spaceship);
            alert(`Spaceship ${name} has been created!`);
        } else {
            alert('Invalid crew limit input. Spaceship not created.');
        }
    } else {
        alert('Invalid input. Spaceship not created.');
    }
}

function addCrewMember() {
    const name = prompt('Enter the spaceship name to add a crew member:');
    const spaceshipFound = spaceShipList.find(spaceship => spaceship.name === name);

    if (!name) {
        alert('Invalid spaceship name.');
        return;
    }

    if (spaceshipFound) {
        if (spaceshipFound.crew.length >= spaceshipFound.crewLimit) {
            alert(`Spaceship ${name} is full!`);
        } else {
            const personName = prompt('Enter the crew member name:');
            if (personName) {
                spaceshipFound.crew.push(personName);
                alert(`${personName} has been added to ${name}'s crew!`);
            } else {
                alert('Invalid crew member name.');
            }
        }
    } else {
        alert(`Spaceship ${name} not found!`);
    }
}

function sendOnMission() {
    const name = prompt('Enter the spaceship name to send on a mission:');
    const spaceshipFound = spaceShipList.find(spaceship => spaceship.name === name);

    if (!name) {
        alert('Invalid spaceship name.');
        return;
    }

    if (!spaceshipFound) {
        alert(`Spaceship ${name} not found!`);
    } else if (spaceshipFound.inMission) {
        alert(`Spaceship ${name} is already on a mission!`);
    } else {
        alert(`Sending spaceship ${name} on a mission!`);
        spaceshipFound.inMission = true;
    }
}

function listSpaceships() {
    if (spaceShipList.length === 0) {
        alert('No spaceships available.');
        return;
    }

    let spaceshipListMessage = 'List of Spaceships:\n';

    for (const spaceship of spaceShipList) {
        spaceshipListMessage += `Name: ${spaceship.name}, Pilot: ${spaceship.pilot}, Crew Members: ${spaceship.crew.join(', ')}, In Mission: ${spaceship.inMission}\n`;
    }

    alert(spaceshipListMessage);
}

let menu: string;

do {
    menu = prompt(`1. Save spaceship!\n2. Add a crew member!\n3. Send a spaceship on a mission!\n4. List all spaceships!\n5. Exit!`) || '5';

    switch (menu) {
        case '1':
            createSpaceship();
            break;
        case '2':
            addCrewMember();
            break;
        case '3':
            sendOnMission();
            break;
        case '4':
            listSpaceships();
            break;
        case '5':
            alert(`You chose to exit!`);
            break;
        default:
            alert('Invalid option!');
    }
} while (menu !== '5');

