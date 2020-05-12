var playerName = window.prompt("What is your robot's name?");
var playerHealth = 110;
// check to see if the value of the playerHealth variable is greater then 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
var playerAttack = 11;
var playerMoney = 10;

// This log will keep track of player Name/health/Attack
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 55;
var enemyAttack = 14;

// This log will keep track of enemy Name/health/attack
console.log(enemyName, enemyHealth, enemyAttack);


var fight = function() {
    // Alert Users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " still has " + enemyHealth + " health remaining."
            );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //damage to player
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
        // check players's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        var confirmSkip = windows.confirm("Are you sure you'd like to skip the battle?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
        
    } else {
        window.alert("You need to pick a valid option! Try again.");
    }
};

fight();
