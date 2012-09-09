/* ====================== */
/* PINS                   */
/* ====================== */


// for example
var pinTemplate = {
	block: 0,
	terminal: 15,
	letter: 'F'
};
function getPinVal(pin) {
	return block[ pin.block ][ pin.terminal ].value();
}
function getVerbosePinVal(pin) {
	return block[ pin.block ][ pin.terminal ].verboseValue();
}
function setPinVal(pin, val) {

	console.log("pin " + pin.terminal + pin.letter + ": ");
	console.log(getVerbosePinVal(pin));

	if (typeof val !== "boolean")
		throw "Value: " + val + " is not a boolean";
	else if (getPinVal(pin) !== null)
		throw "Terminal " + pin.block + ":"+ pin.terminal + " already has an inputPin at TODO";
	else {
		block[pin.block][pin.terminal].pins[pin.letter] = val;
		return block[pin.block][ pin.terminal ].value();
	}
}

/* ====================== */
/* STRIPS                 */
/* ====================== */

var Strip = Spine.Class.create({
	init: function(args) {
		this.terminal = args.terminal;
		this.block = args.block;
	},
	block: null,
	terminal: null,
	pins: {
		A: null,
		B: null,
		C: null,
		D: null,
		E: null
	},
	value: function() {

		// returns the value of the current flowing through the strip
		for (var pin in this.pins) {
			if (this.pins[pin] !== null) {
				return this.pins[pin];
			}
		}
		return null;
	},
	verboseValue: function() {

		// returns the value of the current flowing through the strip
		for (var pin in this.pins) {
			if (this.pins[pin] !== null) {
				return {
					block: this.block,
					terminal: this.terminal,
					letter: pin,
					value: this.pins[pin]
				};
			}
		}
		return null;
	}
});

var evenStrip = Strip.sub({});
var oddStrip = Strip.sub({
	pins: {
		F: null,
		G: null,
		H: null,
		I: null,
		J: null
	}
});


/* ====================== */
/* GATES                  */
/* ====================== */

var Gates = {
	Gate: Spine.Class.create({
		init: function(opts) {
			this.inputPin = opts.inputPin;
		},
		inputPin: [],
		outputPin: [],
		evaluate: function() {
			return null;
		}
	})
};

Gates.AND = Gates.Gate.sub({
	evaluate: function() {
		this.outputPin[0] = (getPinVal(this.inputPin[0]) === true) && (getPinVal(this.inputPin[1]) === true);
	}
});

Gates.OR = Gates.Gate.sub({
	evaluate: function() {
		this.outputPin[0] = (getPinVal(this.inputPin[0]) === true) || (getPinVal(this.inputPin[1]) === true);
	}
});


/* ====================== */
/* Constructor            */
/* ====================== */

var strip1 = oddStrip.init({
	block: 1,
	terminal: 1
});
var strip2 = evenStrip.init({
	block: 1,
	terminal: 2
});

var block = { 0 : [], 1: [], 2: [] };

// populate block 0 with 64 pins
for (var i = 0; i < 64; i++) {
	if ( i%2 === 0 ) {
		block[0].push(evenStrip.init({
			block: 0,
			terminal: i
		}));
	}
	else {
		block[0].push(oddStrip.init({
			block: 0,
			terminal: i
		}));
	}
}


/*

	Make gates output to a specified pin

	Test if gates work sequentially:

		var a = 0 (15) || 1 (16)
		var b = 1 (17) && 1 (18);
		var c = a && b;

*/

var pin1 = {
	block: 0,
	terminal: 15,
	letter: 'F'
};
var pin2 = {
	block: 0,
	terminal: 16,
	letter: 'E'
};
var pin3 = {
	block: 0,
	terminal: 17,
	letter: 'F'
};
var pin4 = {
	block: 0,
	terminal: 18,
	letter: 'E'
};


setPinVal( pin3, true );
setPinVal( pin4, true );

//setPinVal( pin1, false );
//setPinVal( pin2, false );


var a = Gates.OR.init({
	inputPin: [pin1, pin2],
	outputPin: [{
		block: 0,
		terminal: 20,
		letter: 'F'
	}]
});

var b = Gates.AND.init({
	inputPin: [pin3, pin4]
});

console.log(a);
console.log(b);

