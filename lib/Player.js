const Potion = require('../lib/Potion');
const Character = require('./Character');

// function Player(name = '') {
//     this.name = name;

//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);
//     this.inventory = [new Potion('health'), new Potion()];

//     this.getStats = function() {
//         return {
//             potions: this.inventory.length,
//             health: this.health,
//             strength: this.strength,
//             agility: this.agility
//         };
//     };

//     this.getInventory = function() {
//         if (this.inventory.length) {
//         return this.inventory;
//         } 
//         return false;
//     };
// }

class Player extends Character {
    constructor(name = '') {
    super(name);

    //this.name = name;

    //this.health = Math.floor(Math.random() * 10 + 95);
    //this.strength = Math.floor(Math.random() * 5 + 7);
    //this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
          };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
          }
          return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];
      console.log(potion);

      switch (potion.name) {
        case 'agility':
          this.agility += potion.value;
          break;
        case 'health':
          this.health += potion.value;
          break;
        case 'strength':
          this.strength += potion.value;
          break;
      }
    }
}

// Player.prototype = Object.create(Character.prototype);

// Player.prototype.getStats = function() {
//     return {
//       potions: this.inventory.length,
//       health: this.health,
//       strength: this.strength,
//       agility: this.agility
//     };
//   };
  
//   Player.prototype.getInventory = function() {
//     if (this.inventory.length) {
//       return this.inventory;
//     }
//     return false;
//   };

//   Player.prototype.getHealth = function() {
//       return `${this.name}'s health is now ${this.health}`;
//   }

//   Player.prototype.isAlive = function() {
//       if (this.health === 0) {
//           return false
//       } else {
//           return true
//       }
//   }

//   Player.prototype.reduceHealth = function(health) {
//       this.health -= health;

//       if (this.health < 0) {
//           this.health = 0;
//       }
//   }

//   Player.prototype.getAttackValue = function() {
//       const min = this.strength - 5;
//       const max = this.strength + 5;

//       return Math.floor(Math.random() * (max - min) + min);
//   }

//   Player.prototype.addPotion = function(potion) {
//     this.inventory.push(potion);
//   };

//   Player.prototype.usePotion = function(index) {

//     // Splice is creating a new "remove" array from inventory and storing in variable 
//       const potion = this.getInventory().splice(index, 1)[0];
//       console.log(potion);

//       switch (potion.name) {
//         case 'agility':
//           this.agility += potion.value;
//           break;
//         case 'health':
//           this.health += potion.value;
//           break;
//         case 'strength':
//           this.strength += potion.value;
//           break;
//       }
//   }


module.exports = Player;