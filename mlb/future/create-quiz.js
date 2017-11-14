
function createQuiz(){
	startYear = document.getElementById('startYear').value;
	statType = document.getElementById('statType').value;
	lengthType = document.getElementById('lengthType').value;	
	window.location = '../quizzes/mlb-most-'+statType+'-'+lengthType+'-since-'+startYear.toString()+'.html';
}