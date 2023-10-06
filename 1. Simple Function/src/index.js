function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capitao ").concat(spaceship.captain, " foi enviada em uma missao!"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade de ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed = targetSpeed) {
        alert("A velocidade de ".concat(spaceship.name, " nao foi alterada"));
    }
    else {
        alert("Velocidade de ".concat(spaceship.name, " aumentando para ").concat(targetSpeed));
    }
}
var spaceshipName = prompt("Insira o nome da sua nave!");
var spaceshipCaptain = prompt("Insira o nome do capitao da nave ".concat(spaceshipName));
sendSpaceship(spaceshipName, spaceshipCaptain);
