/*

	Breadboard:

	Block   0

	VCC           VG          A             B

0	{-> 0A}       {}         []             [-> 1A]
1	{}            {}         []             [LED -> 2B]
2	{}            {}         []             []
3	{}            {-> 3A}    []             [resistor -> 2A]


	BUS pin 1VCC conects to 1A.

	S1 Now carries 1A. 1B is connected to 2A.

	S2 now carries the value of 1B. Hence, the LED on 2B now turns on when 1A is connected to VCC. When connected to VG, it turns off,

	The short leg of LED on 2B is connected to 3B.

	4A receives ground from BUS pin 4 VG. A resistor on 4B conects to 3A.

	S3 now carries a resisted current from ground. The LED is 

*/

console.log ('hai')

// set up the breadboard
var breadboard = {
	vcc: [{},{},{},{}],
	vg: [{},{},{},{}],
	a: [{},{},{},{}],
	b: [{},{},{},{}]
}

// i hate spelling queue
var kew = [];

// connect the strips
breadboard.vcc[0].to = {
	row: "a",
	col: 0
}
breadboard.b[0].to = {
	row: "a",
	col: 1
}
breadboard.b[1].to = {
	row: "b",
	col: 2,
	type: "led"
}
breadboard.vg[3].to = {
	row: "a",
	col: 3
}
breadboard.b[3].to = {
	row: "a",
	col: 2,
	type: "resistor"
}

// loop through the rows starting with VCC and VG

breadboard.vcc.forEach(function(pin, index, obj) {
	"use strict";
	handleTo(pin, 1, "vcc", index )
})

breadboard.vg.forEach(function(pin, index, obj) {
	"use strict";
	handleTo(pin, 0, "vg", index )
})

breadboard.a.forEach(function(pin, index, obj) {
	"use strict";
	handleTo(pin, undefined, "a", index )
})

breadboard.b.forEach(function(pin, index, obj) {
	"use strict";
	handleTo(pin, undefined, "b", index )
})

console.log ( kew )

// check if the pin is connected to something, and if it handle the connection appropriately
function handleTo(pin, value, curRow, curCol) {
	"use strict";

	// if there is no value specified, we are on row A or B. pass the pins current value to the next pin
	if (value === undefined)
		value = breadboard[curRow][curCol].value

	// if the pin is connected to something (and that something isn't special, like an LED, resistor or gate)
	//    set the value of the thing its connected to
	//    check if that pin is connected to something and repeat
	//    update all the pins on that strip to have the value of the wire we've connected
	if ( pin.to ) {

		var r = pin.to.row
		var c = pin.to.col
		var nextPin = breadboard[r][c]

		pin.value = value

		console.log (curRow + curCol + " is connected to " + r + c + " which now has the value " + value)

		if (pin.type === "led" || pin.type === "resistor") {
			kew.push( {  } )
		}

		handleTo(nextPin, value, r, c)
		handleStrip(r, c, value)

	}

}


// give all the pins on the current row the value 
function handleStrip(row, col, value) {
	"use strict";

	// later make this a for loop that goes through all the other potential rows
	// for now, since we have only rows A & B, we can just toggle a/b
	var nextRow
	if (row === "a")
		nextRow = "b"
	else nextRow = "a"

	// later add a condition to test if a pin on this row already has a value
	// if it does, then throw an error. in real life you can't connect vcc into a strip twice

	// update the value of the other pin on this strip
	breadboard[nextRow][col].value = value

	console.log ("all the pins on " + col + " have the value " + value + " because the pin on " + row + col)

}

// just for output
function out(row, col, pin) {
	"use strict";
	console.log (row + col)
	console.log (pin)
}






