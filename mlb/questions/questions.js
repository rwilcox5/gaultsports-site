question_teams = ["Did you ever play for the ","Did you only play for the ","Did you play at least 2 seasons for the ","Did you play at least 3 seasons for the ","Did you play at least 4 seasons for the ","Did you play at least 5 seasons for the ","Did you play at least 6 seasons for the ","Did you play at least 7 seasons for the ","Did you play at least 8 seasons for the ","Did you play at least 9 seasons for the ","Did you play at least 10 seasons for the ","Did you play at least 11 seasons for the ","Did you play at least 12 seasons for the ","Did you play at least 13 seasons for the ","Did you play at least 14 seasons for the ","Did you play at least 15 seasons for the ","Did you play at least 16 seasons for the ","Did you play at least 17 seasons for the ","Did you play at least 18 seasons for the ","Did you play at least 19 seasons for the ","Did you play at least 20 seasons for the ","Did you play at least 21 seasons for the ","Did you play at least 22 seasons for the ","Did you play at least 23 seasons for the ","Did you play at least 24 seasons for the ","Did you play at least 25 seasons for the ","Did you play at least 26 seasons for the ","Did you play at least 27 seasons for the ","Did you play at least 28 seasons for the ","Did you play at least 29 seasons for the "];
question_stats = ["Did you ever hit at least ","Did you ever hit fewer than "];
team_nicknames = ["Yankees","Red Sox","Dodgers","Braves","White Sox","Cubs","Reds","Indians","Tigers","Browns","Giants","Athletics","Phillies","Pirates","Cardinals","Senators","Browns","Yankees","Blue Jays","Braves","Orioles","Athletics","Dodgers","Giants","Angels","Twins","Senators","Astros","Mets","Angels","Braves","Athletics","Royals","Expos","Padres","Pilots","Brewers","Rangers","Mariners","Blue Jays","Rockies","Marlins","Angels","Diamondbacks","Brewers","Rays","Nationals","Marlins"];
stat_names = [['war',3],['ops',20],['homers',11],['triples',10],['doubles',9],['singles',8],['hits',7],['runs',6],['at-bats',5],['games',4],['rbi',12],['sb',13],['walks',14],['strikeouts',15],['hbp',16],['average',17],['onbase',18],['slugging',19]];



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
		var the_question = question_input.value.toLowerCase().replace('all star','all-star').replace(' sox','-sox').replace(' jays','-jays').replace('home runs','homers').replace('at bats','at-bats').replace('stolen bases','sb').replace('batting average','average').replace('on base percentage','onbase').replace('slugging percentage','slugging');
		var split_q = the_question.slice(0,the_question.length-1).split(' ');
		if (the_question[the_question.length-1]=='?'){isdone = true;}

		if (isdone){
			answers.insertRow(0);
			answers.rows[0].insertCell(0);
			answers.rows[0].cells[0].innerHTML = question_input.value;
			answers.rows[0].insertCell(1);
			var stat_data = []; var year_data = []; var team_data = []; var docareer = true; var demo_data = []; var allstar_data = [];
			for (ii=0;ii<split_q.length;ii++){
				stat_data = updateStats(split_q,ii,stat_data);
				year_data = updateYear(split_q,ii,year_data);
				team_data = updateTeam(split_q,ii,team_data);
				allstar_data = updateStar(split_q,ii,allstar_data);
				
				
				if (split_q[ii]=='season'){
					if (ii>0){
						if (split_q[ii-1]=='a' || split_q[ii-1]=='one'){docareer = false;}
					}	
				}
				
				demo_data = updateDemo(split_q,ii,demo_data);
				




			}

			


			if (stat_data.length>0 || team_data.length>0 || year_data.length>0 || demo_data.length>0 || allstar_data.length>0){
				if (docareer){console.log('Career');}else{console.log('Season');}
				for (sdi=0;sdi<stat_data.length;sdi++){console.log(stat_data[sdi]);}
				for (sdi=0;sdi<team_data.length;sdi++){console.log(team_data[sdi]);}
				for (sdi=0;sdi<year_data.length;sdi++){console.log(year_data[sdi]);}
				for (sdi=0;sdi<demo_data.length;sdi++){console.log(demo_data[sdi]);}
				for (sdi=0;sdi<allstar_data.length;sdi++){console.log(allstar_data[sdi]);}
				answers.rows[0].cells[1].innerHTML = "No";
				var team_range = []; var league_range = []; var division_range = [];
				if (team_data.length>0){
					for (i=0;i<team_data.length;i++){
						if (Array.isArray(team_data[i])){
							if (team_data[i][0]=='nl' || team_data[i][0]=='al'){league_range.push(team_data[i][0]);}
							else{division_range.push(team_data[i][0]);}
							
						}
						else if (team_data[i] != 'and' && team_data[i] != 'or'){
							team_range.push(team_data[i]);
						}
					}
				}
				var need_allstars = 0; var have_allstars = 0;
				if (allstar_data.length>0){need_allstars = allstar_data[0];}


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
				var total_stat = []; var cargoodteam = false;

				if (docareer){for (i=0;i<stat_data.length;i++){total_stat.push(0);}}
				var gooddemo = true;
				for (i=0;i<demo_data.length;i++){
					if (Array.isArray(demo_data[i][1])){
						if (player_demo[demo_data[i][0]]<demo_data[i][1][0] || player_demo[demo_data[i][0]]>demo_data[i][1][1] ){gooddemo=false;}
					}
					else{
						if (player_demo[demo_data[i][0]].toLowerCase()!=demo_data[i][1].toLowerCase()){gooddemo=false;}
					}
				}
				for (ii=0;ii<player_array.length;ii++){

					if (player_array[ii]['year']>=year_range[0] && player_array[ii]['year']<=year_range[1]){
						
						if (gooddemo){
							var goodteam = true;
							if (team_range.length>0){
								goodteam = false;
								for (i=0;i<team_range.length;i++){if (player_array[ii]['nickname'].toLowerCase()==team_range[i]){goodteam = true;}}
							}
							console.log(goodteam, league_range, division_range);
							if (goodteam && league_range.length>0){
								goodteam = false;
								for (i=0;i<league_range.length;i++){if (player_array[ii]['league'].toLowerCase()==league_range[i]){goodteam = true;}}
							}
							console.log(goodteam);
							if (goodteam && division_range.length>0){
								goodteam = false;
								for (i=0;i<division_range.length;i++){if (player_array[ii]['division'].toLowerCase()==division_range[i]){goodteam = true;}}
							}
							console.log(goodteam);
							if (goodteam){
								var is_allstar = true;
								if (allstar_data.length>0){is_allstar = false;}
								for (iii=0;iii<allstar_array.length;iii++){
									if (allstar_array[iii]['year']==player_array[ii]['year']){if (docareer){have_allstars += 1;} else {is_allstar = true;}}
								}
								cargoodteam = true;
								answers.rows[0].cells[1].innerHTML = "Yes";
								for (i=0;i<stat_data.length;i++){
									total_stat[i]+=player_array[ii][stat_data[i]['stat_id']];
									if (answers.rows[0].cells[1].innerHTML == "Yes" || docareer){
										answers = updateAnswerStat(player_array[ii][stat_data[i]['stat_id']],stat_data,i,answers);
										
									}
								}
								if (!is_allstar){answers.rows[0].cells[1].innerHTML = "No";}
								if (answers.rows[0].cells[1].innerHTML == "Yes" && !docareer){break;}
							}
						}
					}
				}
				if (docareer){
					answers.rows[0].cells[1].innerHTML = "Yes";
					if (total_stat.length==0 && cargoodteam){
						answers.rows[0].cells[1].innerHTML = "Yes";
					}
					else if (total_stat.length==0 && !cargoodteam){
						answers.rows[0].cells[1].innerHTML = "No";

					}
					for (i=0;i<total_stat.length;i++){
						if (answers.rows[0].cells[1].innerHTML == "Yes"){
							answers = updateAnswerStat(total_stat[i],stat_data,i,answers);
						}
					}
					if (have_allstars<need_allstars){answers.rows[0].cells[1].innerHTML = "No";}

				}
			}
			else{
				answers.rows[0].cells[1].innerHTML = "???";	
			}			
			
			
			question_input.value = '';
		}

	}
}

function updateStats(split_q,ii,stat_data){
	if (ii>2){
		for (i=0;i<stat_names.length;i++){
			if (stat_names[i][0].toLowerCase()==split_q[ii] && split_q[ii-2]=='with'){stat_data.push({'modifier':'at least','number':parseFloat(split_q[ii-1]),'stat_id':stat_names[i][0]}); }
			else if (stat_names[i][0].toLowerCase()==split_q[ii] && split_q[ii-2]=='exactly'){stat_data.push({'modifier':'exactly','number':parseFloat(split_q[ii-1]),'stat_id':stat_names[i][0]}); }
			else if (stat_names[i][0].toLowerCase()==split_q[ii]){stat_data.push({'modifier':split_q[ii-3]+' '+split_q[ii-2],'number':parseFloat(split_q[ii-1]),'stat_id':stat_names[i][0]}); }
		}
	}
	if (ii==2){
		for (i=0;i<stat_names.length;i++){
			if (stat_names[i][0].toLowerCase()==split_q[ii] && split_q[ii-2]=='exactly'){stat_data.push({'modifier':'exactly','number':parseFloat(split_q[ii-1]),'stat_id':stat_names[i][0]}); }
		}
	}
	if (ii==1){
		for (i=0;i<stat_names.length;i++){
			if (stat_names[i][0].toLowerCase()==split_q[ii]){stat_data.push({'modifier':'at least','number':parseFloat(split_q[ii-1]),'stat_id':stat_names[i][0]}); }
		}
	}
	
	return stat_data;
}
function updateDemo(split_q,ii,demo_data){
	if (split_q[ii]=='switch' || split_q[ii]=='switch-hitter'){
		demo_data.push(['bats','B']);
	}
	else if (split_q[ii]=='right'){
		if (ii>0){if(split_q[ii-1]=='bats' || split_q[ii-1]=='bat'){demo_data.push(['bats','R']);}}
		if (ii<split_q.length-2){if(split_q[ii+1]=='handed' && (split_q[ii+2]=='batter' || split_q[ii+2]=='hitter')){demo_data.push(['bats','R']);}}
		if (ii>0){if(split_q[ii-1]=='throws' || split_q[ii-1]=='throw'){demo_data.push(['throws','R']);}}
	}
	else if (split_q[ii]=='right-handed'){
		if (ii>0){if(split_q[ii-1]=='bats' || split_q[ii-1]=='bat'){demo_data.push(['bats','R']);}}
		if (ii<split_q.length-1){if(split_q[ii+1]=='batter' || split_q[ii+1]=='hitter'){demo_data.push(['bats','R']);}}
		if (ii<split_q.length-1){if(split_q[ii+1]=='thrower'){demo_data.push(['throws','R']);}}
		if (ii>0){if(split_q[ii-1]=='throws' || split_q[ii-1]=='throw'){demo_data.push(['throws','R']);}}
	}
	else if (split_q[ii]=='left'){
		if (ii>0){if(split_q[ii-1]=='bats' || split_q[ii-1]=='bat'){demo_data.push(['bats','L']);}}
		if (ii<split_q.length-2){if(split_q[ii+1]=='handed' && (split_q[ii+2]=='batter' || split_q[ii+2]=='hitter')){demo_data.push(['bats','L']);}}
		if (ii>0){if(split_q[ii-1]=='throws' || split_q[ii-1]=='throw'){demo_data.push(['throws','L']);}}
	}
	else if (split_q[ii]=='left-handed'){
		if (ii>0){if(split_q[ii-1]=='bats' || split_q[ii-1]=='bat'){demo_data.push(['bats','L']);}}
		if (ii<split_q.length-1){if(split_q[ii+1]=='batter' || split_q[ii+1]=='hitter'){demo_data.push(['bats','L']);}}
		if (ii<split_q.length-1){if(split_q[ii+1]=='thrower'){demo_data.push(['throws','L']);}}
		if (ii>0){if(split_q[ii-1]=='throws' || split_q[ii-1]=='throw'){demo_data.push(['throws','L']);}}
	}
	else if (split_q[ii]=='southpaw'){
		demo_data.push(['throws','L']);
	}
	if (split_q[ii]=='born'){
		if (ii<split_q.length-2){
			if (split_q[ii+1]=='in'){
				if (parseInt(split_q[ii+2])>1800 && parseInt(split_q[ii+2])<2100){
					demo_data.push(['birthYear',[parseInt(split_q[ii+2]),parseInt(split_q[ii+2])]]);
				}
				else{
					demo_data.push(['birthState',split_q[ii+2].toLowerCase()]);
				}

			}
			else if (split_q[ii+1]=='before' && parseInt(split_q[ii+2])>1800 && parseInt(split_q[ii+2])<2100){
				demo_data.push(['birthYear',[0,parseInt(split_q[ii+2])-1]]);
			}
			else if (split_q[ii+1]=='after' && parseInt(split_q[ii+2])>1800 && parseInt(split_q[ii+2])<2100){
				demo_data.push(['birthYear',[parseInt(split_q[ii+2])+1,2100]]);
			}
			else if (split_q[ii+1]=='since' && parseInt(split_q[ii+2])>1800 && parseInt(split_q[ii+2])<2100){
				demo_data.push(['birthYear',[parseInt(split_q[ii+2]),2100]]);
			}
			else if (ii<split_q.length-4 && split_q[ii+1]=='between' && split_q[ii+3]=='and' && split_q[ii+2]>=1800 && split_q[ii+2]<=2100 && split_q[ii+4]>=1800 && split_q[ii+4]<=2100){demo_data.push(['birthYear',[parseInt(split_q[ii+4]),parseInt(split_q[ii+6])]]);}
			else if (ii<split_q.length-4 && split_q[ii+1]=='from' && split_q[ii+3]=='to' && split_q[ii+2]>=1800 && split_q[ii+2]<=2100 && split_q[ii+4]>=1800 && split_q[ii+4]<=2100){demo_data.push(['birthYear',[parseInt(split_q[ii+4]),parseInt(split_q[ii+6])]]);}				
					
		}
	}
	if (split_q[ii]=='hall'){
		if (ii<split_q.length-2){
			if (split_q[ii+1]=='of'){
				if (split_q[ii+2]=='fame'){
					if (ii<split_q.length-6){
						if (split_q[ii+3]=='in' && parseInt(split_q[ii+4])>1800 && parseInt(split_q[ii+4])<2100){demo_data.push(['inducted',[parseInt(split_q[ii+4]),parseInt(split_q[ii+4])]]);}
						else if (split_q[ii+3]=='before' && parseInt(split_q[ii+4])>1800 && parseInt(split_q[ii+4])<2100){demo_data.push(['inducted',[0,parseInt(split_q[ii+4])-1]]);}
						else if (split_q[ii+3]=='after' && parseInt(split_q[ii+4])>1800 && parseInt(split_q[ii+4])<2100){demo_data.push(['inducted',[parseInt(split_q[ii+4])+1,2100]]);}
						else if (split_q[ii+3]=='since' && parseInt(split_q[ii+4])>1800 && parseInt(split_q[ii+4])<2100){demo_data.push(['inducted',[parseInt(split_q[ii+4]),2100]]);}
						else if (split_q[ii+3]=='between' && split_q[ii+5]=='and' && split_q[ii+4]>=1800 && split_q[ii+4]<=2100 && split_q[ii+6]>=1800 && split_q[ii+6]<=2100){demo_data.push(['inducted',[parseInt(split_q[ii+4]),parseInt(split_q[ii+6])]]);}
						else if (split_q[ii+3]=='from' && split_q[ii+5]=='to' && split_q[ii+4]>=1800 && split_q[ii+4]<=2100 && split_q[ii+6]>=1800 && split_q[ii+6]<=2100){demo_data.push(['inducted',[parseInt(split_q[ii+4]),parseInt(split_q[ii+6])]]);}		
						else {demo_data.push(['inducted',[0,2100]]);}	
					}
					else if (ii<split_q.length-4){
						if (split_q[ii+3]=='in' && parseInt(split_q[ii+4])>1800 && parseInt(split_q[ii+4])<2100){demo_data.push(['inducted',[parseInt(split_q[ii+4]),parseInt(split_q[ii+4])]]);}
						else if (split_q[ii+3]=='before' && parseInt(split_q[ii+4])>1800 && parseInt(split_q[ii+4])<2100){demo_data.push(['inducted',[0,parseInt(split_q[ii+4])-1]]);}
						else if (split_q[ii+3]=='after' && parseInt(split_q[ii+4])>1800 && parseInt(split_q[ii+4])<2100){demo_data.push(['inducted',[parseInt(split_q[ii+4])+1,2100]]);}
						else if (split_q[ii+3]=='since' && parseInt(split_q[ii+4])>1800 && parseInt(split_q[ii+4])<2100){demo_data.push(['inducted',[parseInt(split_q[ii+4]),2100]]);}
						else {demo_data.push(['inducted',[0,2100]]);}
					}
					else{
						demo_data.push(['inducted',[0,2100]]);
					}
				}
			}
		}
	}

	return demo_data;
}

function updateYear(split_q,ii,year_data){
	passii = true;
	if (ii>1){
		if (split_q[ii-2]=='born' || split_q[ii-2]=='fame'){passii = false;}
	}
	if(passii){
		if (ii>0){
			if (ii<split_q.length-2){
				if (split_q[ii]>=1800 && split_q[ii]<=2100){
					if (split_q[ii-1]=='in'){year_data.push({'modifier':'in','number':parseInt(split_q[ii])});}
					else if (split_q[ii-1]=='before'){year_data.push({'modifier':'before','number':parseInt(split_q[ii])});}
					else if (split_q[ii-1]=='since'){year_data.push({'modifier':'since','number':parseInt(split_q[ii])});}
					else if (split_q[ii-1]=='after'){year_data.push({'modifier':'after','number':parseInt(split_q[ii])});}
					else if (split_q[ii-1]=='between' && split_q[ii+1]=='and' && split_q[ii+2]>=1800 && split_q[ii+2]<=2100){year_data.push({'modifier':'between','number':[parseInt(split_q[ii]),parseInt(split_q[ii+2])]});}
					else if (split_q[ii-1]=='from' && split_q[ii+1]=='to' && split_q[ii+2]>=1800 && split_q[ii+2]<=2100){year_data.push({'modifier':'between','number':[parseInt(split_q[ii]),parseInt(split_q[ii+2])]});}
				}
			}
			else{
				if (split_q[ii]>=1800 && split_q[ii]<=2100){
					if (split_q[ii-1]=='in'){year_data.push({'modifier':'in','number':parseInt(split_q[ii])});}
					else if (split_q[ii-1]=='before'){year_data.push({'modifier':'before','number':parseInt(split_q[ii])});}
					else if (split_q[ii-1]=='since'){year_data.push({'modifier':'since','number':parseInt(split_q[ii])});}
					else if (split_q[ii-1]=='after'){year_data.push({'modifier':'after','number':parseInt(split_q[ii])});}
				}
			}
		}
	}

	return year_data;
}

function updateStar(split_q,ii,allstar_data){


	if (split_q[ii]=='all-star'){
		if (ii>1){
			if (split_q[ii-1]=='time'){
				allstar_data.push(parseInt(split_q[ii-2]));
			}
			else if (split_q[ii-1].search('-time')>-1){
				allstar_data.push(parseInt(split_q[ii-1].split('-')[0]));
			}
			else{
				allstar_data.push(1);
			}

		}
		else if (ii>0){
			if (split_q[ii-1].search('-time')>-1){
				allstar_data.push(parseInt(split_q[ii-1].split('-')[0]));
			}
			else{
				allstar_data.push(1);
			}
		}
		else{
			allstar_data.push(1);
		}
	}

	return allstar_data;
}

function updateTeam(split_q,ii,team_data){
	for (i=0;i<team_nicknames.length;i++){
		if (split_q[ii]==team_nicknames[i].toLowerCase().replace(' ','-')){
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
	if (split_q[ii]=='east'){
		team_data.push(['e']);
	}
	if (split_q[ii]=='west'){
		team_data.push(['w']);
	}
	if (split_q[ii]=='central'){
		team_data.push(['c']);
	}

	if (split_q[ii]=='al'){
		team_data.push(['al']);
	}
	if (split_q[ii]=='nl'){
		team_data.push(['nl']);
	}
	return team_data;
}

function updateAnswerStat(stat_value,stat_data,i,answers){
	answers.rows[0].cells[1].innerHTML = "No";
	if (stat_data[i]['modifier']=='at least'){
		if (stat_value>=stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}	
	}
	else if (stat_data[i]['modifier']=='more than'){
		if (stat_value>stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
	}
	else if (stat_data[i]['modifier']=='greater than'){
		if (stat_value>stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
	}
	else if (stat_data[i]['modifier']=='less than'){
		if (stat_value<stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
	}
	else if (stat_data[i]['modifier']=='fewer than'){
		if (stat_value<stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
	}
	else if (stat_data[i]['modifier']=='at most'){
		if (stat_value<=stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
	}
	else if (stat_data[i]['modifier']=='exactly'){
		if (stat_value==stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
	}
	else if (i>0 && stat_data[i]['modifier'].search('and')>-1){
		stat_data[i]['modifier']=stat_data[i-1]['modifier'];
		answers = updateAnswerStat(stat_value,stat_data,i,answers);
	}
	else if (stat_data[i]['modifier'].search('with')>-1){
		if (stat_value>=stat_data[i]['number']){answers.rows[0].cells[1].innerHTML = "Yes";}
	}
	else{
		answers.rows[0].cells[1].innerHTML = "???";
	}
	return answers;
}