const funcObj = {
	arr : ["Java","Node","React","MongoDB"],
	str : "Tutorial",
	info(){ 
		//this.arr is valid as it can refer the outer scope here
		this.arr.forEach(function(value,index)
		{	
			//But this this.str will not reach out to the outer scope where this str defines 
			//this.str find the variable inside only the info() function, there is no such declared variable available then
			//this.str gives undefined like - 0. undefined Java, 1. undefined Node
			console.log(index+". "+this.str+" "+value);
		},this); 
		/****TO GET ACCESS OF str IN FOREACH CALL BACK -
		We must have to pass context of this to the foreach callback function then only above valiables in object can accessible in it. 
		*/
	}
}
funcObj.info(); //
/* 
Output is - without passing 'this to inner callback function'
0. undefined Java
1. undefined Node
2. undefined React
3. undefined MongoDB

Output is - without passing 'this to inner callback function'
0. Tutorial Java
1. Tutorial Node
2. Tutorial React
3. Tutorial MongoDB

*/
