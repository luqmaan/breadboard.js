

$("#binaryInput").on("change input focus blur", function(e) {

	var binary = $(this).val();
	var decimal = binaryToDecimal( binary );

	if (! /^[01]+$/.test(binary)) {
		$("#binaryInput").addClass("error");
		return;	
	}
	else {
		$("#binaryInput").removeClass("error");
	}

	$("#decimalInput").val(decimal);
	$("#modulusInput").val( theModulus(decimal) );

});

$("#decimalInput").on("change input focus blur", function(e) {

	var decimal = $(this).val();
	var binary = decimalToBinary( decimal );

	if (! /^[0-9]+$/.test(decimal)) {
		$("#decimalInput").addClass("error");
		return;	
	}
	else {
		$("#decimalInput").removeClass("error");
	}

	$("#binaryInput").val(binary);
	$("#modulusInput").val( theModulus(decimal) );

});

function binaryToDecimal( input ){

	var binaryNumber = parseInt(input, 2);
	var decimalNumber = binaryNumber.toString(10);
	return decimalNumber;

}

function decimalToBinary( input ){

	var decimalNumber = parseInt(input);
	var binaryNumber = decimalNumber.toString(2);
	return binaryNumber;

}

function theModulus ( input) {
	return input % 3;
}