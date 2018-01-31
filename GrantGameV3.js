var playerName;

var user = {
	name: playerName,
	health: 40,
	healsRemaining: 2, 
	wins: 0,
	generateAttackDamage(){
		return Math.floor(Math.random()*3)+1;
	},
	heal(){
		this.healsRemaining --;
		return (this.health += (Math.floor(Math.random()*10)+1));
		console.log("You've healed yourself! You now have " + health + "!");
		console.log("You now have " + this.healsRemaining + " heals left.");
	}
};
var grant = {
	name: "Grant",
	health: 10,
	generateAttackDamage: function (){
		return (Math.floor(Math.random()*5)+1);
	}
};

function startCombat(){
	while (user.wins<5 && user.health>0){
		var attacking = prompt("Would you like to attack, heal, or quit?");
		if (attacking.toLowerCase() === "attack"){
			if (user.health > 0 && grant.health > 0){
				grant.health -= grant.generateAttackDamage();
				user.health -= user.generateAttackDamage();
				console.log("Grant the Almighty Chicken has " + grant.health + " left!");
				console.log(playerName + " has " + user.health + " left!");
			} else if (grant.health <= 0){
				user.wins++;
				console.log("You've beaten one stage of Grant the Almighty Chicken! Keep going!")
				grant.health=10;
			};
		} else if (attacking.toLowerCase()==="heal"){
			if (user.healsRemaining > 0){
				user.heal();
			} else {
				console.log("You have no heals left!");
			};
		} else {
			console.log("Seriously? You WOULD quit.");
			break;
		};
	} if (user.wins >= 5){
		console.log("You've beaten Grant for good!");
	} else if (user.health <=0){
		console.log("Grant the Mighty Chicken has won!");
	};
};

function startGame (){
  var playing = prompt("Would you like to play?");
  if (playing.toLowerCase() === "yes"){
    playerName = prompt("What is your name?");
    startCombat();
  } else {
    console.log("You're missing out, bruh.");
  }
}

startGame();








