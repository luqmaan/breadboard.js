

Pins are connected to strips. A strip passes connnections from one pin to the rest of the pins on the strip. The connectino from an empty (but defined) pin can be sent to another pin on a different strip. Or it can be sent to a gate.

- Strip Object
	- can be even or odd
	- creates and has a collection of 5 pins
		- even ABCDE
		- odd FGHIJ
	- getValue()
		- finds the first connected pin on a strip, asks it getConnectedValue
		- 
	- Pin Object
		- pointer parentStrip
		- output
			- connect to a pin
			- connect
		- input
			- accept a connection from another pin
			- receive
			- 
			- bool isConnected
			- pointer connectedTo
			- sets isConnected
			- sets connectedTo
			- 
		- bool getValue()
			- if the pin is currently connected to something, it returns null
			- if the pin is not connected, it asks the strip it is on for getValue

		- does not have a setValue function, values are set by connecting to another pin that is on a strip with a defined value

Gate Object