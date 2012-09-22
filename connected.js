/*

	Breadboard:

	Block   0

	VCC           VG          A             B

1	{-> 1A}       {}         []             [-> 2A]
2	{}            {}         []             [LED -> 3B]
3	{}            {}         []             []
4	{}            {-> 4A}    []             [resistor -> 3A]


	BUS pin 1VCC conects to 1A.

	S1 Now carries 1A. 1B is connected to 2A.

	S2 now carries the value of 1B. Hence, the LED on 2B now turns on when 1A is connected to VCC. When connected to VG, it turns off,

	The short leg of LED on 2B is connected to 3B.

	4A receives ground from BUS pin 4 VG. A resistor on 4B conects to 3A.

	S3 now carries a resisted current from ground. The LED is 

*/