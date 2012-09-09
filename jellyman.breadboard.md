jellyman.breadboard.logic
==

[https://github.com/jellymann/Breadboard]()

Component
--
- HashMap <InputPin, Boolean>
- HashMap <OutputPin, Boolean>
- action
	- called when the user interface interacts with a pin
- receive
	- called when one of the pins has a new value
- getValue

Gates extends Component
--
- Gate()
- OutputPin output;
- receive(InputPin origin)
- Boolean evaluate();
- class Not extends Gate
	- Not()
	- Boolean evaluate()
- class And extends Gate
	- And(int n)
	- Boolean evaluate()
- class Or extends Gate
	- Or(int n)
	- Boolean evaluate()

Switch extends Component
--
- Switch(boolean value)
- action()

Lamp extends Component
--
- Lamp()
- receive(InputPin origin)

Pin
--
- int AUTO_ID = 0;
- int id;
- Component comp; // component pin belongs to
- Pin(Component comp)
- boolean equals(Object obj) // compares two pins
- int hashCode()

InputPin extends Pin
--
- Represents a pin that only accepts input.
- OutputPin connection; // the output pin this pin is connected to
- InputPin(Component comp) 
- receive(boolean value) // called by the connected output pin, requests the value of this pin
- attach(OutputPin pin) // attach to a pin
- detach() // disconnects from the attached pin

OutputPin
--
- Represents a pin that only produces output.
- List<InputPin> connections; // list of connected input pins
- OutputPin(Component comp)
- send(boolean value) // Sends the value to all input pins connected to this pin.
- void addConnection(InputPin pin) // Adds a connection to this output pin and sends its value to the input pin associated with the connection connection.
- removeConnection(InputPin pin) // removes connnection for specified pin
