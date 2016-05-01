var assert = {

	 	count : 0,

	 	pass : 0,

	 	equals : function (exRes, result, funcName){

	 		var nuBlock = document.createElement('div');
	 		nuBlock.id = 'square' + this.count;
	 		nuBlock.style.height = '300px';
	 		nuBlock.style.width = '300px';
	 		nuBlock.style.border = '3px solid black';
	 		nuBlock.style.display = 'inline-block';
	 		nuBlock.style.color = 'blue';
	 		document.body.appendChild(nuBlock);

	 		var rg = new RedOrGreen(nuBlock.id);
	 		if(exRes === result){
	 			this.pass++;
	 			nuBlock.innerHTML = funcName;
	 			rg.makeGreen();
	 		}
	 		else{

	 			nuBlock.innerHTML = funcName;
	 			rg.makeRed();

	 		}
	 		
	 		this.count++;
	 	}
}

var TestMyCode = {

	run : function(name, testPar){
					this.name = name;
					testPar(assert);
	}
}