module("calculator");

var calculator = new Calculator();

test("Calculator should not be undefined", function(assert){
	assert.ok( calculator != "undefined");
});