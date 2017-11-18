
$(document).ready(function(){
	var goal = 0;
	var winTotal = 0;
	var lossTotal = 0;
	var gemArray = [];
	var score = 0;

	// goal needs to be a random number 19 - 120 that resets each time a win/loss
	// get random num 19-120
	goal = getRand(19, 120);
	console.log(goal);
	// geerate ran num for gems
	for (var i = 0; i < 4; i++) {
		gemArray.push(getRand(1, 10));
	}


	function getRand(min, max) {
		return Math.floor((Math.random()* max) + min);

	}

	// click listen for gem imput
	$(".gem").click(function(event){
// console.log($(this).text());
	var gemIndex = $(this).data("value");
	var gemValue = gemArray[gemIndex];
	console.log(gemArray[gemIndex]);
	});

$(text).css(color,red)

	//  win total tracks each time numbers match  increase by +1
		// if loss occours say you lose, if win say you win

	// loss total tracks each time score exceeds goal  increase by +1

	// gemArray will hold the 4 gems, 
		// each gem will generate a random number only at the stare of round
			// adds the RGN to the score
			// give var to each gem


	// score add the values from gem RGN
		// if score < goal +1 to loss
		// if ==(=?) goal +1 to wins



});


