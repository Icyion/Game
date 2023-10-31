const prompt = require("prompt-sync")();

//To carry on to the next line we need to press Enter button
function waitForEnter() {
  const userInput = prompt("");

  if (userInput === null || userInput.trim() === "") {
    // User pressed Enter or cancelled the prompt
  } else {
    // User entered something other than Enter
    console.log("Invalid input. Please press Enter.");
    waitForEnter();
  }
}

let pickedHeroClass;

// CONNECTED TO YOUR CHOOSE CLASS FUNCTION
const heroClasses = {
  class1: "Warrior",
  class2: "Mage",
  class3: "Holy Knight",
  class4: "Archer"
}


//HERO OPTIONS MID BATTLE
let attack = 'Attack';
let skill = `Skill`;
let special = `Special`;
let item = `Item`;
let dmg;

const warrior = [
  attack, 
  skill,
  special,
  item,
]

// CHOOSE YOUR NAME FUNCTION
let heroName = ``;
const name = () => {
  heroName = prompt('Enter your heros name: ');
  return heroName;
};

// CHOOSE YOUR CLASS FUNCTION
const chooseHeroClass = () => {
    
  while (true) {

    const heroClass = prompt(`Choose between these hero classes: ${heroClasses.class1}[1] || ${heroClasses.class2}[2] || ${heroClasses.class3}[3] || ${heroClasses.class4}[4] `);

      if (heroClass === heroClasses.class1 || heroClass === "1") {
      pickedHeroClass = `Warrior`;
      console.log(`Good choice, ${pickedHeroClass}...`);
      return pickedHeroClass;
    } else if (heroClass === heroClasses.class2 || heroClass === "2") {
      pickedHeroClass = `Mage`;
      console.log(`Good choice, ${pickedHeroClass}...`);
      return pickedHeroClass;
    } else if (heroClass === heroClasses.class3 || heroClass === "3") {
      pickedHeroClass = `Holy Knight`;
      console.log(`Good choice, ${pickedHeroClass}...`);
      return pickedHeroClass;
    } else if (heroClass === heroClasses.class4 || heroClass === "4") {
      pickedHeroClass = `Archer`;
      console.log(`Good choice, ${pickedHeroClass}...`);
      return pickedHeroClass;
    } else {
      console.log("Invalid class, please choose again");
    }  
}
}

const randomFight = () => {
  const introMsg = prompt(`
          ~~~
You are battling a ${area1Enemy.name}.
          ~~~`);
  
}

class Hero {
  constructor (name, health, damage, dead, weapon, x, y, image) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.dead = dead;
    this.weapon = weapon;
    this.x = x;
    this.y = y;
    this.image = image;
  }

  fight (choice1, choice2, choice3, choice4) {
    while (true) {
      const randomEncounter = prompt(`What would you like to do: ${warrior[0]}[1] || ${warrior[1]}[2] || ${warrior[2]}[3] || ${warrior[3]}[4]: `);
      if (randomEncounter === choice1) {
        console.log(`You attack ${this.name} and inflict ${this.damage} damage`);
        waitForEnter();
        return dmg;
      } else if (randomEncounter === choice2) {
        console.log(`Sorry you dont have a ${skill} yet`);
      } else if (randomEncounter === choice3) {
        console.log(`Sorry you dont have a ${special} yet`);
      } else if (randomEncounter === choice4) {
        console.log(`Sorry you dont have an ${item}`);
      } else {

      }
    }
  }
}

//hero = new Hero(heroName);


class Area1Enemy { // name of the class
  constructor(name, health, damage, dead, x, y, image){ // constructor = method, inside brackets = parameters
      this.name = name; // reference to the properties of the instance being created until this.image
      this.health = health; // int
      this.damage = damage;
      this.skill2 = skill;
      this.dead = dead;
      this.x = x; 
      this.y = y;
      this.image = image;
    }

    weaponAttack(Hero) { 
      console.log(`${this.name} attacks ${player} for ${this.dmg} damage.`);
      Hero.takeDamage(this.damage);
    }
  
    takeDamage(amount){
      this.health -= amount; 
        if (this.health <= 0){
            this.dead = true; 
            console.log(`${this.name} has been obliterated`);
        }
    }

    healDamage(amount){
      this.health += amount
     if (this.health <= Math.floor((this.health/100)*20)) {
        console.log(`${this.name} uses ${this.skill2}`);
        console.log(`${this.name} heals for 28`);
    } else {
        weaponAttack(Hero);
    }
  } 
}

const area1Enemies = [
  minotaur = new Area1Enemy('Minotaur', 100, Math.floor(Math.random()*(4)+1),'heal',true, {x: 10, y: 20}, 'minotaur.jpg'),
  demon = new Area1Enemy ('Demon', 110, Math.floor(Math.random()*(5)+3), true, {x: 20}, {y: 40}, 'demon.jpg'),
  netherfiend = new Area1Enemy ('Netherfiend', 120, Math.floor(Math.random()*(9)+5), true, 50, 60, 'netherfiend.jpg')
];

  const getRandomEnemy = (enemyList) => {
    const randomIndex = Math.floor(Math.random() * enemyList.length);
    return enemyList[randomIndex];
  }

const area1Enemy = getRandomEnemy(area1Enemies);


const randomEnemy = getRandomEnemy();



waitForEnter();
console.log('Hello player...');
waitForEnter();
console.log('Welcome,' , name());
chooseHeroClass();
waitForEnter();
console.log(`"I know you have loads of questions, ${heroName}".`); 
waitForEnter();
console.log(`"But I strongly believe you are the only one you can save us from terrible danger."`);
waitForEnter();
console.log(`"I dont have time to explain but you will learn what is happening soon enough."`);
waitForEnter();
console.log(`...`);
waitForEnter();
console.log(`...`);
waitForEnter();
console.log(`"H.. He.. Hero, wake up. You need to defend yourself quick. Can't have you eaten alive in the first 5 seconds."`); 
waitForEnter();

console.log('You dont know where you are and suddenly get attacked by a weird looking creature.. It doesnt seem wanting to be friends, lets fight back!');
waitForEnter();

console.log(randomEnemy);


