/* ====================== */
/* PINS                   */
/* ====================== */

function pinVal ( pin ) {

	return block[ pin.terminal ].value();
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
		E: 3
	},
	value: function() {

		// returns the value of the current flowing through the strip
		for (var pin in this.pins) {
			if (this.pins[pin] !== null) {
				return this.pins[pin];
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
		init: function() {

		},
		input: [{
			block: 0,
			terminal: 15,
			letter: 'F'
		},{
			block: 0,
			terminal: 16,
			letter: 'E'
		}],
		output: function() {
			return null;
		}
	})
};

Gates.AND = Gates.Gate.sub({
	output: function() {
		return (pinVal(this.input[0]) === true) && (pinVal(this.input[1]) === true);
	}
});

Gates.OR = Gates.Gate.sub({
	output: function() {
		return (pinVal(this.input[0]) === true) || (pinVal(this.input[1]) === true);
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

var block = [];

for (var i = 0; i < 64; i++) {
	if ( i%2 === 0 ) {
		block.push(evenStrip.init({
			block: 0,
			terminal: i
		}));
	}
	else {
		block.push(oddStrip.init({
			block: 0,
			terminal: i
		}));
	}
}


block[15].pins.F = false;
block[16].pins.E = true;

var and = Gates.AND.init();
var or = Gates.OR.init();
