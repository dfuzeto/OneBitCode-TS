function sendSpaceship(name:string, captain:string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitao ${spaceship.captain} foi enviada em uma missao!`)
    return spaceship
}

function accelerate(targetSpeed:number, spaceship: { name: string, speed: number}) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade de ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed = targetSpeed) {
        alert(`A velocidade de ${spaceship.name} nao foi alterada`)
    } else {
        alert(`Velocidade de ${spaceship.name} aumentando para ${targetSpeed}`)
    }
}

const spaceshipName = prompt(`Insira o nome da sua nave!`)
const spaceshipCaptain = prompt(`Insira o nome do capitao da nave ${spaceshipName}`)

sendSpaceship(spaceshipName, spaceshipCaptain)