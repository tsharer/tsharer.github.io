
function showHide() {
	let moreElem = document.getElementById("more");
	let linkElem = document.getElementById ("show-hide");
	
	if (moreElem.classList.contains("hidden")){
		moreElem.classList.remove("hidden");
		linkElem.innerHTML="Show less..";
	}
	else {
		moreElem.classList.add ("hidden");
		linkElem.innerHTML = "Show more..";
	}
}

function showHideTwo() {
	let moreElemTwo = document.getElementById("more-2");
	let linkElemTwo = document.getElementById ("show-hide-2");
	
	if (moreElemTwo.classList.contains("hidden")){
		moreElemTwo.classList.remove("hidden");
		linkElemTwo.innerHTML="Show less..";
	}
	else {
		moreElemTwo.classList.add ("hidden");
		linkElemTwo.innerHTML = "Show more..";
	}
}


function showAnswers() {
 	let firstQ = document.getElementById("quest-1").value;
	let secondQ = document.getElementById("quest-2").value;
	let thirdQ = document.getElementById("quest-3").value; 
	let fourthQ = document.getElementById("quest-4").value;
	let qResults = document.getElementById("results");
	
	qResults.classList.remove("hidden");
	
	let total = 0;

	if(firstQ=="strong"){
		document.getElementById("result1").innerHTML = "Question 1 - Correct";
		total += 1; 
	}
	else{
		document.getElementById("result1").innerHTML = "Question 1 - Incorrect"; 
	}
	
	if(secondQ=="src"){
		document.getElementById("result2").innerHTML = "Question 2 - Correct";
		total += 1; 
	}
	else{
		document.getElementById("result2").innerHTML = "Question 2 - Incorrect"; 
	}
	
	if(thirdQ=="th, tr, td"){
		document.getElementById("result3").innerHTML = "Question 3 - Correct";
		total += 1; 
	}
	else{
		document.getElementById("result3").innerHTML = "Question 3 - Incorrect"; 
	}
	
	if(fourthQ=="Creates a list with bullet points"){
		document.getElementById("result4").innerHTML = "Question 4 - Correct";
		total += 1; 
	}
	else{
		document.getElementById("result4").innerHTML = "Question 4 - Incorrect"; 
	}
	
	let score = document.getElementById("score");
	score.innerHTML+=total + "/4";
}




setInterval(changePic, 1000);
function changePic () {
	let bigPic = document.getElementById ("big-pic");
	let num = bigPic.getAttribute("data-num");

	
	if (num==1){
		bigPic.src="images/formal.jpg";
		bigPic.setAttribute("data-num", "2");
	}
	else if (num==2){
		bigPic.src="images/bookstore.jpg";
		bigPic.setAttribute("data-num", "3");
	}
	else if (num==3){
		bigPic.src="images/football.jpg";
		bigPic.setAttribute("data-num", "4");
	}
	else {
		bigPic.src="images/london.jpg";
		bigPic.setAttribute("data-num", "1");
}
}