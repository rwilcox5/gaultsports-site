question_teams = ["Did you ever play for the ","Did you only play for the ","Did you play at least 2 seasons for the ","Did you play at least 3 seasons for the ","Did you play at least 4 seasons for the ","Did you play at least 5 seasons for the ","Did you play at least 6 seasons for the ","Did you play at least 7 seasons for the ","Did you play at least 8 seasons for the ","Did you play at least 9 seasons for the ","Did you play at least 10 seasons for the ","Did you play at least 11 seasons for the ","Did you play at least 12 seasons for the ","Did you play at least 13 seasons for the ","Did you play at least 14 seasons for the ","Did you play at least 15 seasons for the ","Did you play at least 16 seasons for the ","Did you play at least 17 seasons for the ","Did you play at least 18 seasons for the ","Did you play at least 19 seasons for the ","Did you play at least 20 seasons for the ","Did you play at least 21 seasons for the ","Did you play at least 22 seasons for the ","Did you play at least 23 seasons for the ","Did you play at least 24 seasons for the ","Did you play at least 25 seasons for the ","Did you play at least 26 seasons for the ","Did you play at least 27 seasons for the ","Did you play at least 28 seasons for the ","Did you play at least 29 seasons for the "];
question_stats = ["Did you ever hit at least ","Did you ever hit fewer than "];
team_nicknames = ["Yankees","Red Sox","Dodgers","Braves","White Sox","Cubs","Reds","Indians","Tigers","Browns","Giants","Athletics","Phillies","Pirates","Cardinals","Senators","Browns","Yankees","Blue Jays","Braves","Orioles","Athletics","Dodgers","Giants","Angels","Twins","Senators","Astros","Mets","Angels","Braves","Athletics","Royals","Expos","Padres","Pilots","Brewers","Rangers","Mariners","Blue Jays","Rockies","Marlins","Angels","Diamondbacks","Brewers","Rays","Nationals","Marlins"];
stat_names = [['homers',11],['triples',10],['doubles',9],['singles',8],['hits',7],['runs',6],['at-bats',5],['games',4],['rbi',12],['sb',13],['walks',14],['strikeouts',15],['hbp',16],['average',17],['onbase',18],['slugging',19]];
other_array = [['year',0],['league',2],['division',3]];

function createQuestions(){

	var question_input = document.getElementById("question");

	// Show label but insert value into the input:
	  var id_list = [];
	  for (i=0;i<question_teams.length;i++) {
	  	id_list.push(question_teams[i]);
	  }
	  for (i=0;i<question_stats.length;i++) {
	  	id_list.push(question_stats[i]);
	  }
	  for (i=0;i<question_teams.length;i++) {
	  	for (ii=0;ii<team_nicknames.length;ii++){
	  		id_list.push(question_teams[i]+team_nicknames[ii]+"?");
	  	}
	  }

	new Awesomplete(question_input, {
	  autoFirst: true,
	  sort: false,
	  list: id_list,

	});

	question_input.addEventListener('awesomplete-selectcomplete',setQuestion);

}
function setQuestion(e){
	if(e.keyCode === 13){
        e.preventDefault();
		var answers = document.getElementById("answer_spot");
		var question_input = document.getElementById("question");
		var isdone = false;
		var the_question = question_input.value.toLowerCase().replace('home runs','homers').replace('at bats','at-bats').replace('stolen bases','sb').replace('batting average','average').replace('on base percentage','onbase').replace('slugging percentage','slugging');
		var split_q = the_question.slice(0,the_question.length-1).split(' ');
		if (the_question[the_question.length-1]=='?'){isdone = true;}

		if (isdone){
			answers.insertRow(0);
			answers.rows[0].insertCell(0);
			answers.rows[0].cells[0].innerHTML = question_input.value;
			answers.rows[0].insertCell(1);
			var stat_data = []; var year_data = []; var team_data = []; var docareer = true;
			for (ii=0;ii<split_q.length;ii++){
				if (ii>2){
					for (i=0;i<stat_names.length;i++){
						if (stat_names[i][0].toLowerCase()==split_q[ii]){stat_data.push({'modifier':split_q[ii-3]+' '+split_q[ii-2],'number':parseFloat(split_q[ii-1]),'stat_id':stat_names[i][0]}); }
					}
				}
				if (ii>0){
					if (split_q[ii]>=1800 && split_q[ii]<=2100){
						if (split_q[ii-1]=='in'){year_data.push({'modifier':'in','number':parseInt(split_q[ii])});}
						else if (split_q[ii-1]=='before'){year_data.push({'modifier':'before','number':parseInt(split_q[ii])});}
						else if (split_q[ii-1]=='since'){year_data.push({'modifier':'since','number':parseInt(split_q[ii])});}
						else if (split_q[ii-1]=='after'){year_data.push({'modifier':'after','number':parseInt(split_q[ii])});}
						else if (split_q[ii-1]=='between' && split_q[ii+1]=='and' && split_q[ii+2]>=1800 && split_q[ii+2]<=2100){year_data.push({'modifier':'between','number':[parseInt(split_q[ii]),parseInt(split_q[ii+2])]});}
						else if (split_q[ii-1]=='from' && split_q[ii+1]=='to' && split_q[ii+2]>=1800 && split_q[ii+2]<=2100){year_data.push({'modifier':'between','number':[parseInt(split_q[ii]),parseInt(split_q[ii+2])]});}
					}
				}
				for (i=0;i<team_nicknames.length;i++){
					if (split_q[ii]==team_nicknames[i].toLowerCase()){
						if (team_data.length==1){
							for (iii=ii;iii>0;iii--){
								if (split_q[iii]=='and') {team_data.push('and');team_data.push(split_q[ii]);break;}
							 	else if (split_q[iii]=='or') {team_data.push('or');team_data.push(split_q[ii]);break;}
							 	else{team_data.push(split_q[ii]);}
							 }
							
						}
						else{team_data.push(split_q[ii]);}
					}
				}
				if (split_q[ii]=='season'){
					if (ii>0){
						if (split_q[ii-1]=='a' || split_q[ii-1]=='one'){docareer = false;}
					}
					
				}

			}


			if (stat_data.length>0 || team_data.length>0 || year_data.length>0){
				answers.rows[0].cells[1].innerHTML = "No";
				var team_range = [];
				if (team_data.length>0){
					for (i=0;i<team_data.length;i++){if (team_data[i] != 'and' && team_data[i] != 'or'){team_range.push(team_data[i]);}}
				}

				var year_range = [0,4000];
				if (year_data.length>0){
					for (ii=0;ii<year_data.length;ii++){
						if (year_data[ii]['modifier']=='before'){year_range[1]=year_data[ii]['number']-1;}
						else if (year_data[ii]['modifier']=='since'){year_range[0]=year_data[ii]['number'];}
						else if (year_data[ii]['modifier']=='after'){year_range[0]=year_data[ii]['number']+1;}
						else if (year_data[ii]['modifier']=='between'){year_range[0]=year_data[ii]['number'][0];year_range[1]=year_data[ii]['number'][1]; break;}
						else if (year_data[ii]['modifier']=='in'){year_range[0]=year_data[ii]['number'];year_range[1]=year_data[ii]['number']; break;}
					}
				}
				var total_stat = [];
				if (docareer){for (i=0;i<stat_data.length;i++){total_stat.push(0);}}
				for (ii=0;ii<player_array.length;ii++){
					if (player_array[ii]['year']>=year_range[0] && player_array[ii]['year']<=year_range[1]){
						var goodteam = true;
						if (team_range.length>0){
							goodteam = false;
							for (i=0;i<team_range.length;i++){if (player_array[ii]['nickname'].toLowerCase()==team_range[i]){goodteam = true;}}
						}
						if (goodteam){
							answers.rows[0].cells[1].innerHTML = "Yes";
							for (i=0;i<stat_data.length;i++){
								total_stat[i]+=player_array[ii][stat_data[i]['stat_id']];
								if (answers.rows[0].cells[1].innerHTML == "Yes" || docareer){
									answers.rows[0].cells[1].innerHTML = "No";
									if (stat_data[i]['modifier']=='at least'){
										if (player_array[ii][stat_data[i]['stat_id']]>=stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}	
									}
									else if (stat_data[i]['modifier']=='more than'){
										if (player_array[ii][stat_data[i]['stat_id']]>stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
									}
									else if (stat_data[i]['modifier']=='greater than'){
										if (player_array[ii][stat_data[i]['stat_id']]>stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
									}
									else if (stat_data[i]['modifier']=='less than'){
										if (player_array[ii][stat_data[i]['stat_id']]<stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
									}
									else if (stat_data[i]['modifier']=='fewer than'){
										if (player_array[ii][stat_data[i]['stat_id']]<stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
									}
									else if (stat_data[i]['modifier']=='at most'){
										if (player_array[ii][stat_data[i]['stat_id']]<=stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
									}
									else if (i>0 && stat_data[i]['modifier'].search('and')>-1){
										stat_data[i]['modifier']=stat_data[i-1]['modifier'];
										if (player_array[ii][stat_data[i]['stat_id']]>stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
									}
								}
							}
							if (answers.rows[0].cells[1].innerHTML == "Yes" && !docareer){break;}
						}
					}
				}
				if (docareer){
					answers.rows[0].cells[1].innerHTML = "Yes";
					for (i=0;i<total_stat.length;i++){
						if (answers.rows[0].cells[1].innerHTML == "Yes"){
							answers.rows[0].cells[1].innerHTML = "No";
							if (stat_data[i]['modifier']=='at least'){
								if (total_stat[i]>=stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}	
							}
							else if (stat_data[i]['modifier']=='more than'){
								if (total_stat[i]>stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
							}
							else if (stat_data[i]['modifier']=='greater than'){
								if (total_stat[i]>stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
							}
							else if (stat_data[i]['modifier']=='less than'){
								if (total_stat[i]<stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
							}
							else if (stat_data[i]['modifier']=='fewer than'){
								if (total_stat[i]<stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
							}
							else if (stat_data[i]['modifier']=='at most'){
								if (total_stat[i]<=stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
							}
							else if (i>0 && stat_data[i]['modifier'].search('and')>-1){
								stat_data[i]['modifier']=stat_data[i-1]['modifier'];
								if (total_stat[i]>stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
							}
						}
					}

				}
			}
			else{
				answers.rows[0].cells[1].innerHTML = "???";	
			}			
			
			
			question_input.value = '';
		}

	}
}

