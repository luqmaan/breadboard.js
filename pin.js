
function getPinVal(pointer) {
	// console.log(block[pointer.block].bus.vcc[1].value);
	var pin = block[pointer.block].bus[pointer.type][pointer.pin];
	return pin.value();
};

var block = {0: {}, 1: {}, 2: {}};

block[0].bus = {
	vcc: {},
	vg: {}
};

block[0].bus.vcc[1] = {
	is: false,
	value: function() {
		return this.is;
	},
	to: {
		block: 0,
		terminal: "T1",
		pin: "H"
	}
};

block[0].terminal = {};

block[0].terminal.T1 = {
	pins: {
		F: {
			parent: {
				block: 0,
				terminal: "T1"
			}
		},
		G: {
			parent: {
				block: 0,
				terminal: "T1"
			}
		},
		H: {
			parent: {
				block: 0,
				terminal: "T1"
			},
			from: {
				block: 0,
				type: "vcc",
				pin: 1
			},
			value: function() {
				return getPinVal( this.from );
			}
		},
		I: {
			parent: {
				block: 0,
				terminal: "T1"
			}
		},
		J: {
			parent: {
				block: 0,
				terminal: "T1"
			}
		}
	}
};

var B0T1H = block[0].terminal.T1.pins.H.value();

// should be true
console.log ("B0T1H: " + B0T1H);

