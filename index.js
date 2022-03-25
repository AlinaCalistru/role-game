// witch hero object
const hero ={
    elementId:"hero",
    name:"Witch",
    avatar: "images/witch1.jpg",
    health: 60,
    diceRoll: [3,1, 4],
    diceCount: 2
}


// wizard monster object
const monster ={
    elementId:"monster",
    name:"Wizard",
    avatar: "images/wizard.jpg",
    health: 10,
    diceRoll: [4],
    diceCount: 2
}


function renderCharacter(data){
    const {elementId, name, avatar, health, diceRoll, diceCount} = data;
    let diceHtml = "";

    for(let i = 0; i < diceCount; i ++){
        diceHtml += `<div class="dice">6</div>`
    }
   
    document.getElementById(elementId).innerHTML=
    `<div class="character-card">
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}"/>
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container"> ${diceHtml}</div>
</div>`;   
  
}

renderCharacter(hero);
renderCharacter(monster);



