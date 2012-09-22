
Bus Pins Call Forward

==

Start with the pins on the bus strip.

For each pin, check to see if it points to another pin (aka is connected by a wire to another pin)

	If not connected

		 do nothing

	If the current pin is connected, then
		
		Follow the connection to the next pin

		(STRIP SEARCH)
		<I></I>dentify the strip it is on
		Find all pins connected to that strip

		For each pin on that strip

			If the pin (pin1) points to another pin (pin2), then follow pin2 and perform the strip search operation

			If the pin points to a gate, follow the gate

				Tell the gate that the current pin is now connected

				Ask the gate if it has received sufficient connections

					If the gate has received sufficient connections

						perform the operation of the gate

						find each (in case demux) output pin of the gate

							perform the strip search operation on the strip the output pin is connected to

					Else If the gate has received insufficent connections
						store the value of the pin with the gate

			If the pin points to a resistor

				if the pin has the value 0
					set the resistor ON

				else
					set the resistor to OFF

			If the pin points to a LED

				Ask the LED if it has sufficient connections

					if the LED has sufficient connections

						set the value of the current connection

						tell the LED to evaluate (turn on or off depending on connections)

					if the LED has insufficient connections

						set the value of the current connection

			If the pin points to a bus pin

				throw an error


NOTES:

	Assumes that a current is either:

		0 : ground
		5 : vcc
		2 (resistor connected to ground)



An idea for organizing objects
==

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