
question_names = ["Did you ever play for the ","Did you only play for the "];
team_nicknames = ["Braves","Yankees","Cardinals"];
	
function createQuestions(){

	var question_input = document.getElementById("question");

	// Show label but insert value into the input:
	  var id_list = [];
	  for (i=0;i<question_names.length;i++) {
	  	id_list.push(question_names[i]);
	  	for (ii=0;ii<team_nicknames.length;ii++){
	  		id_list.push(question_names[i]+team_nicknames[ii]+"?");
	  	}
	  }
	new Awesomplete(question_input, {
	  autoFirst: true,
	  sort: false,
	  list: id_list,

	});

	question_input.addEventListener('awesomplete-selectcomplete',setQuestion);

}
function setQuestion(){
	var answers = document.getElementById("answer_spot");
	var question_input = document.getElementById("question");
	var isdone = true;
	for (i=0;i<question_names.length;i++){
		if (question_names[i]==question_input.value){
			isdone = false;
		}

	}

	if (isdone){
		answers.insertRow(0);
		answers.rows[0].insertCell(0);
		answers.rows[0].cells[0].innerHTML = question_input.value;
		answers.rows[0].insertCell(1);
		answers.rows[0].cells[1].innerHTML = "Yes";
		
		question_input.value = '';
	}
}
