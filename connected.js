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
	row: "A",
	col: 0
}
breadboard.b[0].to = {
	row: "A",
	col: 1
}
breadboard.b[1].to = {
	row: "B",
	col: 2,
	type: "led"
}
breadboard.vg[3].to = {
	row: "A",
	col: 3
}
breadboard.b[3].to = {
	row: "A",
	col: 2,
	type: "resistor"
}
