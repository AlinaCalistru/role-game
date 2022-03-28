const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/witch1.jpg",
    health: 60,
    diceRoll: [3, 1, 4],
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/wizard.jpg",
    health: 10,
    diceRoll: [6],
    diceCount: 1
}

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
//     let newDiceRolls = [];
//     for (let i = 0; i < diceCount; i++) {
//         newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
//     }
//    return newDiceRolls;
}


function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`
    }).join(" ");
}




function renderCharacter(data) {
    const { elementId, name, avatar, health, diceRoll, diceCount } = data;
    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceHtml}
            </div>
        </div>`;
}

renderCharacter(hero);
renderCharacter(monster);