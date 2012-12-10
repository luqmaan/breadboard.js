var tree = {};

var i = parseInt(0, 2);
var stop = 2;

var node0 = "", node1 = "";

//node0 = "0" + i.toString(2);
//node1 = "1" + i.toString(2);

// add a new level to collector
// look at the level before
// for each one of that level's elements
	// add a new element with a 0 on the front
	// add a new element with a 1 on the front

var threeBitNumbers = createArrayOfLevels(5);

//console.log ( threeBitNumbers );

console.log ("done")

function createArrayOfLevels( numberOfBits ) {

	var collector = [ ["0", "1"] ];

	var tree = { "0": {}, "1": {} };

	while (stop <= numberOfBits) {

		var thisLevel = [];
		var prevLevel = collector[collector.length - 1];

		var print = "";

		for (var a in prevLevel) {

			var parentBit = prevLevel[a];

			var node0 = "0" + parentBit;
			var node1 = "1" + parentBit;

			parentsKey = getParentsKey( parentBit );
			
			// console.log (parentsKey);

			//debugger;

			// add node as an object to its parent in the tree
			//tree[ parentsKey ][  node0] = {};
			//tree[ parentsKey ][  node1] = {};

			// add node to thisLevel
			thisLevel.push ( node0 );
			thisLevel.push ( node1 );		

			print+=node0;

			//var bit = threeBitNumbers[l][b];
			//var mod = parseInt(bit,2) % 3;

		}

		console.log ("print");

		//console.log (tree)

		collector.push ( thisLevel );

		//console.log ( thisLevel )

		stop+=1;
	}
	
	return collector;

}

function getParentsKey( parentBit ) {

	// 0 -> 0
	// 00 -> [0][00]
	// 01 -> [0][01]
	// 110110 -> [0][10][110][0110][10110][110110]

	for (var i = 0; i < parentBit.length; i++) {


	}

	return parentBit;

}