var output=0;
var oldOutput;
function toss(){
	var output= Math.floor(Math.random()*5);
	console.log("Output" + output);
	console.log("old output"+oldOutput);
	if (output == oldOutput) {
		console.log("Output same. so, Tossing again");
		toss();
	} else{
		oldOutput=output;
		console.log(oldOutput);
		jump(output);
};
	
}
function jump(output){
	switch(output){
	case 0:
	var img=document.getElementById('coin');
	img.src="1.png"
	console.log("Coin Changed.");
	break;

	case 1:
	var img=document.getElementById('coin');
	img.src="2.png"
	console.log("Coin Changed.");
	break;

	case 2:
	var img=document.getElementById('coin');
	img.src="3.png"
	console.log("Coin Changed.");
	break;

	case 3:
	var img=document.getElementById('coin');
	img.src="3.png"
	console.log("Coin Changed.");
	break;

	case 4:
	var img=document.getElementById('coin');
	img.src="4.png"
	console.log("Coin Changed.");
	break;

	default :
	var img=document.getElementById('coin');
	img.src="1.png";
	console.log("Coin Changed.");
	break;
	}
}