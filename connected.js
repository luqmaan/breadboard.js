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

var breadboard = {
	vcc: [{},{},{},{}],
	vg: [{},{},{},{}],
	a: [{},{},{},{}],
	b: [{},{},{},{}]
}

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


breadboard.vcc.forEach(function(pin, index, obj) {
	"use strict";

	handleTo(pin, 1, "vcc", index )

})

function out(row, col, pin) {
	"use strict";
	console.log (row + col)
	console.log (pin)
}

function handleTo(pin, value, curRow, curCol) {
	"use strict";

	if ( pin.to ) {

		var r = pin.to.row
		var c = pin.to.col
		var nextPin = breadboard[r][c]

		pin.value = value

		console.log (curRow + curCol + " is connected to " + r + c + " which now has the value " + value)

		handleTo(nextPin, value, r, c)
		handleStrip(r, c, value)

	}

}

function handleStrip(row, col, value) {
	"use strict";

	var nextRow

	// later make this a for loop that goes through all the other potential rows
	// for now, since we have only rows A & B, we can just toggle a/b

	// strip search
	if (row === "a")
		nextRow = "b"
	else nextRow = "a"

	// update the value of the other pin on this strip
	breadboard[nextRow][col].value = value

	console.log ("all the pins on " + col + " have the value " + value + " because the pin on " + row + col + " had")

}












