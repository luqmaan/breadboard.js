
Algorithm for generating the list of binary numbers's followed by their modulus
==

Create a list of all the states

example

a/0 -0->b/0 -1->c/1

Storing data
---

Approach 1: Linked json objects

	a : {
		mod: 0,
		0: "b",
		1: "c"
	}

	b: {
		mod: 0,
		0: "d",
		1: "e"
	}

	c : {
		mod: 1,
		0: "f",
		1: "g"
	}


Approach 2: A giant tree

	tree: {
		"0": {
			mod: 0,
			"00": {
				mod: 0,
				0: ...,
				1: ....
			},
			"01": {
				mod: 1,
				0: ...,
				1: ...
			}
		}
	}


10101

0
1

00
10
01
11

000
100
010
110
001
101
011
111


