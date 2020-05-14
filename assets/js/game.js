// Game States
// WIN - Player Defeats all the robots.
//  * Fight all enemy robots
//  * Defeat each enemy robot
// LOSE - Player's health reaches zero or less.

//FIGHT SEQUENCE
var fightOrSkip = function () {
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'fight' or 'skip' to choose.");
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer. Please try again!");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to skip the battle?");
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    return false;
}
var fight = function (enemy) {
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip()) {
                break;
            }
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " still has " + enemy.health + " health remaining."
            ); //damage to enemy
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            } //check enemy's health
        } else {
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            ); //damage to player
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            } // check players's health
        }
        isPlayerTurn = !isPlayerTurn;
    }
}
//Starting Game Function
var startGame = function () {
    //reset player
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var shopConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (shopConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You lost your robot in battle! GAME OVER!");
            break;
        }
    }
    endGame();
};
//RANDOM NUMBER FUNCTION
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
};
//SHOP FUNCTION
var shop = function () {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "1":
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "2":
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "3":
        case "LEAVE":
        case "leave":
            window.alert("Leaving the shop.");
            break;
        default:
            shop();
            break;
    }
};
//END GAME
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("Your final score was" + playerInfo.money + "!");
    }
    //play again 
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for play Robot Gladiators! Come back soon!");
    }
};
//Player Name function
var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
}
//Player STATS
var playerInfo = {
    name: getPlayerName(),
    health: 110,
    attack: 11,
    money: 10,
    reset: function () {
        this.health = 110;
        this.money = 11;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for $7.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for $7.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

//ENEMY STATS
var enemyInfo = [{
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
// Auto start when page loads
startGame();