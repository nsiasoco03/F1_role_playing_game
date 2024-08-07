let position; //current position of the player
let tireHealth = 100; //starting tire health
let lapNumber = 1; //starting lap
let gameProgress = 1; //tracks game progress of the player

const playerName = document.querySelector("#playerName");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const team = ["Mercedes","RedBull","Alpine","Aston Martin","Haas","McLaren"];
const drivers = [
  {
    name: "Nico Hulkenberg",
    team: ["Mercedes","RedBull","Alpine","Aston Martin","Haas","McLaren"],
    origin: "America",
    position: [1,2,3,4,5],
  },
  {
    name: "Fernando Alonso",
    team: ["Mercedes","RedBull","Alpine","Aston Martin","Haas","McLaren"],
    origin: "Spain",
    position: [1,2,3,4,5],
  },
  {
    name: "Lando Norris",
    team: ["Mercedes","RedBull","Alpine","Aston Martin","Haas","McLaren"],
    origin: "Britain",
    position: [1,2,3,4,5],
  },
  {
    name: "Guanyu Zho",
    team: ["Mercedes","RedBull","Alpine","Aston Martin","Haas","McLaren"],
    origin: "China",
    position: [1,2,3,4,5],
  },
  {
    name: "Lewis Hamilton",
    team: ["Mercedes","RedBull","Alpine","Aston Martin","Haas","McLaren"],
    origin: "England",
    position: [1,2,3,4,5], 
  },
  {
    name: "Bianca Bustamante",
    team: ["Mercedes","RedBull","Alpine","Aston Martin","Haas","McLaren"],
    origin: "Philippines",
    position: [1,2,3,4,5],
  }
];

button1.onclick = details;

function details(){
  button2.innerText = "Back";
  button1.innerText = "Create Driver";
  console.log("this works");
  button2.style.display = "block";
  button2.onclick = start;
  button1.onclick = DriverCreation;
  text.innerHTML = "start your engines!"
}

function DriverCreation(){
  console.log("This is where you create your driver")
}

function start(){
  text.innerHTML = "In an exciting new world of F1 juniors you are an aspiring F1 driver wanting to be recruited by the top teams to race against the best of the best. You as a junior must work their way up the ladder through races against fellow junior drivers to show the top teams why you should be picked"
  button2.style.display = "none";
}

// // let xp = 0;
// let health = 100;
// let gold = 50;
// let currentWeapon = 0;
// let fighting;
// let monsterHealth;
// let inventory = ["stick"];

// const button1 = document.querySelector('#button1');
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");
// const text = document.querySelector("#text");
// const xpText = document.querySelector("#xpText");
// const healthText = document.querySelector("#healthText");
// const goldText = document.querySelector("#goldText");
// const monsterStats = document.querySelector("#monsterStats");
// const monsterName = document.querySelector("#monsterName");
// const monsterHealthText = document.querySelector("#monsterHealth");
// const weapons = [
//   { name: 'stick', power: 5 },
//   { name: 'dagger', power: 30 },
//   { name: 'claw hammer', power: 50 },
//   { name: 'sword', power: 100 }
// ];
// const monsters = [
//   {
//     name: "slime",
//     level: 2,
//     health: 15
//   },
//   {
//     name: "fanged beast",
//     level: 8,
//     health: 60
//   },
//   {
//     name: "dragon",
//     level: 20,
//     health: 300
//   }
// ]
// const locations = [
//   {
//     name: "town square",
//     "button text": ["Go to store", "Go to cave", "Fight dragon"],
//     "button functions": [goStore, goCave, fightDragon],
//     text: "You are in the town square. You see a sign that says \"Store\"."
//   },
//   {
//     name: "store",
//     "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
//     "button functions": [buyHealth, buyWeapon, goTown],
//     text: "You enter the store."
//   },
//   {
//     name: "cave",
//     "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
//     "button functions": [fightSlime, fightBeast, goTown],
//     text: "You enter the cave. You see some monsters."
//   },
//   {
//     name: "fight",
//     "button text": ["Attack", "Dodge", "Run"],
//     "button functions": [attack, dodge, goTown],
//     text: "You are fighting a monster."
//   },

//   {
//     name: "kill monster",
//     "button text": ["Go to town square", "Go to town square", "Go to town square"],
//     "button functions": [goTown, goTown, easterEgg],
//     text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
//   },
//   {
//     name: "lose",
//     "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
//     "button functions": [restart, restart, restart],
//     text: "You die. &#x2620;"
//   },
//   { 
//     name: "win", 
//     "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
//     "button functions": [restart, restart, restart], 
//     text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
//   },
//   {
//     name: "easter egg",
//     "button text": ["2", "8", "Go to town square?"],
//     "button functions": [pickTwo, pickEight, goTown],
//     text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
//   }
// ];

// // initialize buttons
// button1.onclick = goStore;
// button2.onclick = goCave;
// button3.onclick = fightDragon;

// function update(location) {
//   monsterStats.style.display = "none";
//   button1.innerText = location["button text"][0];
//   button2.innerText = location["button text"][1];
//   button3.innerText = location["button text"][2];
//   button1.onclick = location["button functions"][0];
//   button2.onclick = location["button functions"][1];
//   button3.onclick = location["button functions"][2];
//   text.innerHTML = location.text;
// }

// function goTown() {
//   update(locations[0]);
// }

// function goStore() {
//   update(locations[1]);
// }

// function goCave() {
//   update(locations[2]);
// }

// function buyHealth() {
//   if (gold >= 10) {
//     gold -= 10;
//     health += 10;
//     goldText.innerText = gold;
//     healthText.innerText = health;
//   } else {
//     text.innerText = "You do not have enough gold to buy health.";
//   }
// }

// function buyWeapon() {
//   if (currentWeapon < weapons.length - 1) {
//     if (gold >= 30) {
//       gold -= 30;
//       currentWeapon++;
//       goldText.innerText = gold;
//       let newWeapon = weapons[currentWeapon].name;
//       text.innerText = "You now have a " + newWeapon + ".";
//       inventory.push(newWeapon);
//       text.innerText += " In your inventory you have: " + inventory;
//     } else {
//       text.innerText = "You do not have enough gold to buy a weapon.";
//     }
//   } else {
//     text.innerText = "You already have the most powerful weapon!";
//     button2.innerText = "Sell weapon for 15 gold";
//     button2.onclick = sellWeapon;
//   }
// }

// function sellWeapon() {
//   if (inventory.length > 1) {
//     gold += 15;
//     goldText.innerText = gold;
//     let currentWeapon = inventory.shift();
//     text.innerText = "You sold a " + currentWeapon + ".";
//     text.innerText += " In your inventory you have: " + inventory;
//   } else {
//     text.innerText = "Don't sell your only weapon!";
//   }
// }

// function fightSlime() {
//   fighting = 0;
//   goFight();
// }

// function fightBeast() {
//   fighting = 1;
//   goFight();
// }

// function fightDragon() {
//   fighting = 2;
//   goFight();
// }

// function goFight() {
//   update(locations[3]);
//   monsterHealth = monsters[fighting].health;
//   monsterStats.style.display = "block";
//   monsterName.innerText = monsters[fighting].name;
//   monsterHealthText.innerText = monsterHealth;
// }

// function attack() {
//   text.innerText = "The " + monsters[fighting].name + " attacks.";
//   text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
//   health -= getMonsterAttackValue(monsters[fighting].level);
//   if (isMonsterHit()) {
//     monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
//   } else {
//     text.innerText += " You miss.";
//   }
//   healthText.innerText = health;
//   monsterHealthText.innerText = monsterHealth;
//   if (health <= 0) {
//     lose();
//   } else if (monsterHealth <= 0) {
//     if (fighting === 2) {
//       winGame();
//     } else {
//       defeatMonster();
//     }
//   }
//   if (Math.random() <= .1 && inventory.length !== 1) {
//     text.innerText += " Your " + inventory.pop() + " breaks.";
//     currentWeapon--;
//   }
// }

// function getMonsterAttackValue(level) {
//   const hit = (level * 5) - (Math.floor(Math.random() * xp));
//   console.log(hit);
//   return hit > 0 ? hit : 0;
// }

// function isMonsterHit() {
//   return Math.random() > .2 || health < 20;
// }

// function dodge() {
//   text.innerText = "You dodge the attack from the " + monsters[fighting].name;
// }

// function defeatMonster() {
//   gold += Math.floor(monsters[fighting].level * 6.7);
//   xp += monsters[fighting].level;
//   goldText.innerText = gold;
//   xpText.innerText = xp;
//   update(locations[4]);
// }

// function lose() {
//   update(locations[5]);
// }

// function winGame() {
//   update(locations[6]);
// }

// function restart() {
//   xp = 0;
//   health = 100;
//   gold = 50;
//   currentWeapon = 0;
//   inventory = ["stick"];
//   goldText.innerText = gold;
//   healthText.innerText = health;
//   xpText.innerText = xp;
//   goTown();
// }

// function easterEgg() {
//   update(locations[7]);
// }

// function pickTwo() {
//   pick(2);
// }

// function pickEight() {
//   pick(8);
// }

// function pick(guess) {
//   const numbers = [];
//   while (numbers.length < 10) {
//     numbers.push(Math.floor(Math.random() * 11));
//   }
//   text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
//   for (let i = 0; i < 10; i++) {
//     text.innerText += numbers[i] + "\n";
//   }
//   if (numbers.includes(guess)) {
//     text.innerText += "Right! You win 20 gold!";
//     gold += 20;
//     goldText.innerText = gold;
//   } else {
//     text.innerText += "Wrong! You lose 10 health!";
//     health -= 10;
//     healthText.innerText = health;
//     if (health <= 0) {
//       lose();
//     }
//   }
// }