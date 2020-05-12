var playerName = window.prompt("What is your robot's name?");
var playerHealth = 110;
// check to see if the value of the playerHealth variable is greater then 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
var playerAttack = 11;

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
    //Subtract the value of "playerAttack" from the value of "enemyHealth"and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    // check players's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();
