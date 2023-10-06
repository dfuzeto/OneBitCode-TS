var spaceShipList = [];
function createSpaceship() {
    var name = prompt('Enter the spaceship name:');
    var pilot = prompt('Enter the pilot name:');
    var crewLimitInput = prompt('Enter the crew limit:');
    if (name && pilot && crewLimitInput) {
        var crewLimit = parseInt(crewLimitInput, 10);
        if (!isNaN(crewLimit)) {
            var spaceship = {
                name: name,
                pilot: pilot,
                crewLimit: crewLimit,
                crew: [],
                inMission: false
            };
            spaceShipList.push(spaceship);
            alert("Spaceship ".concat(name, " has been created!"));
        }
        else {
            alert('Invalid crew limit input. Spaceship not created.');
        }
    }
    else {
        alert('Invalid input. Spaceship not created.');
    }
}
function addCrewMember() {
    var name = prompt('Enter the spaceship name to add a crew member:');
    var spaceshipFound = spaceShipList.find(function (spaceship) { return spaceship.name === name; });
    if (!name) {
        alert('Invalid spaceship name.');
        return;
    }
    if (spaceshipFound) {
        if (spaceshipFound.crew.length >= spaceshipFound.crewLimit) {
            alert("Spaceship ".concat(name, " is full!"));
        }
        else {
            var personName = prompt('Enter the crew member name:');
            if (personName) {
                spaceshipFound.crew.push(personName);
                alert("".concat(personName, " has been added to ").concat(name, "'s crew!"));
            }
            else {
                alert('Invalid crew member name.');
            }
        }
    }
    else {
        alert("Spaceship ".concat(name, " not found!"));
    }
}
function sendOnMission() {
    var name = prompt('Enter the spaceship name to send on a mission:');
    var spaceshipFound = spaceShipList.find(function (spaceship) { return spaceship.name === name; });
    if (!name) {
        alert('Invalid spaceship name.');
        return;
    }
    if (!spaceshipFound) {
        alert("Spaceship ".concat(name, " not found!"));
    }
    else if (spaceshipFound.inMission) {
        alert("Spaceship ".concat(name, " is already on a mission!"));
    }
    else {
        alert("Sending spaceship ".concat(name, " on a mission!"));
        spaceshipFound.inMission = true;
    }
}
function listSpaceships() {
    if (spaceShipList.length === 0) {
        alert('No spaceships available.');
        return;
    }
    var spaceshipListMessage = 'List of Spaceships:\n';
    for (var _i = 0, spaceShipList_1 = spaceShipList; _i < spaceShipList_1.length; _i++) {
        var spaceship = spaceShipList_1[_i];
        spaceshipListMessage += "Name: ".concat(spaceship.name, ", Pilot: ").concat(spaceship.pilot, ", Crew Members: ").concat(spaceship.crew.join(', '), ", In Mission: ").concat(spaceship.inMission, "\n");
    }
    alert(spaceshipListMessage);
}
var menu;
do {
    menu = prompt("1. Save spaceship!\n2. Add a crew member!\n3. Send a spaceship on a mission!\n4. List all spaceships!\n5. Exit!") || '5';
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
            alert("You chose to exit!");
            break;
        default:
            alert('Invalid option!');
    }
} while (menu !== '5');
