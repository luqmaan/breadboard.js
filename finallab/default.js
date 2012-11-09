


var tree = {};


var i = parseInt(0, 2);
var stop = 2;

var node0 = "", node1 = "";

//node0 = "0" + i.toString(2);
//node1 = "1" + i.toString(2);


var collector = [ ["0", "1"] ];

// add a new level to collector
// look at the level before
// for each one of that level's elements
	// add a new element with a 0 on the front
	// add a new element with a 1 on the front

while (stop != 0) {

	var thisLevel = [];
	var prevLevel = collector[collector.length - 1];

	for (var a in prevLevel) {

		thisLevel.push ( "0" + prevLevel[a] );
		thisLevel.push ( "1" + prevLevel[a] );		

	}

	collector.push ( thisLevel );

	stop-=1;
}

console.log (collector);

console.log ("done")

