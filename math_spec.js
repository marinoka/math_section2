// tell the spec where to find our code
var math = require('../math');

describe("A simple arithmetic program", funtion(){
	it("can add two numbers", funtion(){
		expect(math.add(3,5)).toBe(8);
	});
	it("can subtract two numbers", function(){
		expect(math.subtract(8,3)).tobe(5);
	});
});