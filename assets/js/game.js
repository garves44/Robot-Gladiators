// Game States
// WIN - Player Defeats all the robots.
//  * Fight all enemy robots
//  * Defeat each enemy robot
// LOSE - Player's health reaches zero or less.
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 110;
var playerAttack = 11;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 55;
var enemyAttack = 14;

var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            var confirmSkip = window.confirm("Are you sure you'd like to skip the battle?"); // confirm user wants to skip battle
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight! Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } // if yes, leave fight
        }    
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " still has " + enemyHealth + " health remaining."
            );
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");   
            } //check enemy's health
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            ); //damage to player
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            } // check players's health
        }
    };   
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

console.log(playerName, playerHealth, playerAttack); // This log will keep track of player Name/health/Attack
console.log(enemyNames, enemyHealth, enemyAttack); // This log will keep track of enemy Name/health/attack