TestMyCode.run("testing Hello world function", function(assert){
	var result = helloWorld();

	assert.equals("hello world!", result, "testing hello world function");
});


TestMyCode.run("testing Hello mars function", function(assert){
	var result = helloMars();

	assert.equals("hello mars!", result, "testing hello mars function");
});

TestMyCode.run("testing add function", function(assert){
	var result = add(5, 6);

	assert.equals(11, result, "testing add function");
});