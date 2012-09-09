var Strip = Spine.Class.create({
	init: function(args) {
		this.row = args.row;
		this.block = args.block;
	},
	block: null,
	row: null,
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

var strip1 = oddStrip.init({
	block: 0,
	row: 1
});
var strip2 = evenStrip.init({
	block: 0,
	row: 2
});