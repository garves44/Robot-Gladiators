var playerName = window.prompt("What is your robot's name?");
var playerHealth = 110;
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
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
};

fight();
