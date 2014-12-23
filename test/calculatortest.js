module("calculator");

var calculator = new Calculator();

test("Calculator should not be undefined", function(assert){
	assert.ok( calculator != "undefined");
});


test("simple add", function(assert){
	var result = calculator.add(5, 3);
	equal(result, 8);
});