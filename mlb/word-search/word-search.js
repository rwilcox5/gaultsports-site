firstClick = [-1,-1];



function updateCell([block,spot],piece){
	if (hideTeams){
		document.getElementById('cell'+block.toString()+spot.toString()).innerHTML='<font color="red">'+piece[0]+'</font><br> ';
	}
	else if (hidePos){
		document.getElementById('cell'+block.toString()+spot.toString()).innerHTML=' <br>'+piece[1];
	}
	else{
		document.getElementById('cell'+block.toString()+spot.toString()).innerHTML='<font color="red">'+piece[0]+'</font><br>'+piece[1];
	}
}

function setClicker(block,spot){
	document.getElementById('cell'+block.toString()+'-'+spot.toString()).addEventListener("click", function(){
		if (firstClick[0]>-1 && firstClick[0]-block == firstClick[1]-spot){
			var i =0;
			if (firstClick[0]==block+9){
				for (i=0;i<=firstClick[0]-block;i++){
					document.getElementById('cell'+(block+i).toString()+'-'+(spot+i).toString()).className += ' crossed';
				}
				firstClick = [-1,-1];
			}
			else if (firstClick[0]==block-9){
				for (i=0;i>=firstClick[0]-block;i--){
					document.getElementById('cell'+(block+i).toString()+'-'+(spot+i).toString()).className += ' crossed';
				}
				firstClick = [-1,-1];
			}

		}
		else if (firstClick[0]>-1 && firstClick[0]==block){
			var i =0;
			if (firstClick[1]==spot+9){
				for (i=0;i<=firstClick[1]-spot;i++){
					document.getElementById('cell'+(block).toString()+'-'+(spot+i).toString()).className += ' horzline';
				}
				firstClick = [-1,-1];
			}
			else if (firstClick[1]==spot-9){
				for (i=0;i>=firstClick[1]-spot;i--){
					document.getElementById('cell'+(block).toString()+'-'+(spot+i).toString()).className += ' horzline';
				}
				firstClick = [-1,-1];
			}

		}
		else if (firstClick[0]>-1 && firstClick[1]==spot){
			var i =0;
			if (firstClick[0]==block+9){
				for (i=0;i<=firstClick[0]-block;i++){
					document.getElementById('cell'+(block+i).toString()+'-'+(spot).toString()).className += ' vertline';
				}
				firstClick = [-1,-1];
			}
			else if (firstClick[0]==block-9){
				for (i=0;i>=firstClick[0]-block;i--){
					document.getElementById('cell'+(block+i).toString()+'-'+(spot).toString()).className += ' vertline';
				}
				firstClick = [-1,-1];
			}

		}
		else  {
			firstClick = [block,spot];
		}


	});
}

function chgTeam(teamName){
	selTeam = teamName;
	selPos = '';
}

function chgPos(posName){
	selTeam = '';
	selPos = posName;
}

function updateStat(stat_name,statID,named=false){
	if (named){
		for (i=0;i<nsize;i++){
			for (ii=0;ii<nsize;ii++){
				cellname = document.getElementById('cell'+i.toString()+'-'+ii.toString()).innerHTML;
				if (cellname==stats[stat_name][statID]){
					if (document.getElementById('cell'+i.toString()+'-'+ii.toString()).style.color=='red'){
						document.getElementById('cell'+i.toString()+'-'+ii.toString()).style.color='black';
					}
					else{
						document.getElementById('cell'+i.toString()+'-'+ii.toString()).style.color='red';
					}
				}
			}
		}
	}
	else{
		document.getElementById(stat_name+statID.toString()).innerHTML = '<button class="button fit small" onclick="updateStat(\''+stat_name+'\','+statID.toString()+',true);">'+stats[stat_name][statID]+'</button>';
	}
}

letters =  [['Justin Upton', 'Nelson Cruz', 'Bryce Harper', 'Jarrod Dyson', 'Jarrod Dyson', 'Jose Altuve', 'Paul Goldschmidt', 'Trea Turner', 'Jean Segura', 'Hernan Perez', 'Rajai Davis', 'Starling Marte', 'Billy Hamilton', 'Jonathan Villar'], ['Chris Davis', 'Mark Trumbo', 'Khris Davis', 'Dustin Pedroia', 'Joey Votto', 'Charlie Blackmon', 'Ben Zobrist', 'Josh Donaldson', 'Carlos Santana', 'Jean Segura', 'Rajai Davis', 'George Springer', 'Brian Dozier', 'Mookie Betts'], ['Chris Carter', 'Miguel Cabrera', 'Brandon Belt', 'Brian Dozier', 'Dustin Pedroia', 'Xander Bogaerts', 'Hernan Perez', 'Jose Altuve', 'Bryce Harper', 'Xander Bogaerts', 'Chris Davis', 'Freddie Freeman', 'Josh Donaldson', 'Manny Machado'], ['Mike Napoli', 'Anthony Rizzo', 'Mookie Betts', 'Nelson Cruz', 'Edwin Encarnacion', 'George Springer', 'Jonathan Villar', 'David Ortiz', 'Chris Davis', 'Joey Votto', 'Trea Turner', 'Mark Trumbo', 'Brian Dozier', 'Chris Carter'], ['Justin Upton', 'Hanley Ramirez', 'Hanley Ramirez', 'Rajai Davis', 'Khris Davis', 'Nolan Arenado', 'Brian Dozier', 'Miguel Sano', 'Ben Zobrist', 'Jose Altuve', 'Brandon Belt', 'Miguel Sano', 'Josh Donaldson', 'Justin Upton'], ['Miguel Sano', 'Mookie Betts', 'Jose Altuve', 'Chris Davis', 'Manny Machado', 'Ian Kinsler', 'Chris Carter', 'Starling Marte', 'Starling Marte', 'Mookie Betts', 'Hernan Perez', 'Carlos Santana', 'Josh Donaldson', 'Todd Frazier'], ['George Springer', 'Albert Pujols', 'Robinson Cano', 'Jarrod Dyson', 'Jonathan Villar', 'Kris Bryant', 'George Springer', 'Todd Frazier', 'Jonathan Villar', 'Jean Segura', 'Kris Bryant', 'Freddie Freeman', 'Ben Zobrist', 'Xander Bogaerts'], ['Danny Espinosa', 'David Ortiz', 'Danny Espinosa', 'Chris Davis', 'Anthony Rizzo', 'Josh Donaldson', 'Charlie Blackmon', 'Chris Carter', 'Kris Bryant', 'Dustin Pedroia', 'Miguel Sano', 'Xander Bogaerts', 'Charlie Blackmon', 'Freddie Freeman'], ['Jonathan Villar', 'Edwin Encarnacion', 'DJ LeMahieu', 'Trea Turner', 'Mike Trout', 'Mookie Betts', 'Kris Bryant', 'Jose Altuve', 'Josh Donaldson', 'Robinson Cano', 'Kyle Seager', 'Manny Machado', 'Nolan Arenado', 'Brian Dozier'], ['Freddie Freeman', 'Nolan Arenado', 'Xander Bogaerts', 'Jonathan Villar', 'Hanley Ramirez', 'Mike Trout', 'Dustin Pedroia', 'Josh Donaldson', 'Starling Marte', 'Corey Seager', 'Trea Turner', 'Mookie Betts', 'Jose Altuve', 'Jose Altuve'], ['Mark Trumbo', 'Miguel Cabrera', 'Jose Altuve', 'Anthony Rizzo', 'Hanley Ramirez', 'Khris Davis', 'Brandon Belt', 'Robinson Cano', 'Miguel Cabrera', 'Xander Bogaerts', 'Charlie Blackmon', 'Billy Hamilton', 'Bryce Harper', 'Danny Espinosa'], ['Joey Votto', 'George Springer', 'Jean Segura', 'Billy Hamilton', 'Miguel Cabrera', 'Trea Turner', 'Jose Altuve', 'Kyle Seager', 'Danny Espinosa', 'DJ LeMahieu', 'Ian Kinsler', 'Mike Trout', 'Joey Votto', 'Chris Davis'], ['Ian Kinsler', 'Nolan Arenado', 'Charlie Blackmon', 'Mike Napoli', 'Kyle Seager', 'Trea Turner', 'David Ortiz', 'Jean Segura', 'Josh Donaldson', 'Miguel Cabrera', 'David Ortiz', 'Charlie Blackmon', 'Mookie Betts', 'David Ortiz'], ['George Springer', 'Joey Votto', 'Corey Seager', 'Joey Votto', 'Miguel Sano', 'Khris Davis', 'Mark Trumbo', 'Albert Pujols', 'Nelson Cruz', 'Manny Machado', 'Albert Pujols', 'Mark Trumbo', 'Edwin Encarnacion', 'Kyle Seager']] ;
stats = {"war": ['Mike Trout', 'Mookie Betts', 'Kris Bryant', 'Jose Altuve', 'Josh Donaldson', 'Robinson Cano', 'Kyle Seager', 'Manny Machado', 'Nolan Arenado', 'Brian Dozier'] , "homeruns": ['Mark Trumbo', 'Nelson Cruz', 'Khris Davis', 'Brian Dozier', 'Edwin Encarnacion', 'Nolan Arenado', 'Chris Carter', 'Todd Frazier', 'Kris Bryant', 'Robinson Cano'] , "runs": ['Mike Trout', 'Mookie Betts', 'Josh Donaldson', 'Kris Bryant', 'Ian Kinsler', 'Nolan Arenado', 'George Springer', 'Xander Bogaerts', 'Charlie Blackmon', 'Jose Altuve'] , "hits": ['Jose Altuve', 'Mookie Betts', 'Jean Segura', 'Dustin Pedroia', 'Robinson Cano', 'Corey Seager', 'Xander Bogaerts', 'DJ LeMahieu', 'Miguel Cabrera', 'Manny Machado'] , "rbi": ['Nolan Arenado', 'Edwin Encarnacion', 'David Ortiz', 'Albert Pujols', 'Mookie Betts', 'Hanley Ramirez', 'Anthony Rizzo', 'Miguel Cabrera', 'Mark Trumbo', 'Nelson Cruz'] , "sb": ['Jonathan Villar', 'Billy Hamilton', 'Starling Marte', 'Rajai Davis', 'Hernan Perez', 'Jean Segura', 'Trea Turner', 'Paul Goldschmidt', 'Jose Altuve', 'Jarrod Dyson'] , "bb": ['Mike Trout', 'Paul Goldschmidt', 'Josh Donaldson', 'Bryce Harper', 'Joey Votto', 'Brandon Belt', 'Carlos Santana', 'Ben Zobrist', 'Freddie Freeman', 'Chris Davis'] , "so": ['Chris Davis', 'Chris Carter', 'Mike Napoli', 'Justin Upton', 'Miguel Sano', 'George Springer', 'Danny Espinosa', 'Jonathan Villar', 'Freddie Freeman', 'Mark Trumbo'] };
nsize = 14;
var i =0; var ii= 0;
for (i=0;i<nsize;i++){
	for (ii=0;ii<nsize;ii++){
		document.getElementById('wordsearch').innerHTML +='<div class="white" id="cell'+i.toString()+'-'+ii.toString()+'">'+letters[i][ii]+'</div>';
	}
}
for (i=0;i<nsize;i++){
	for (ii=0;ii<nsize;ii++){
		setClicker(i,ii);
	}
}

stat_name = 'homeruns';
for (i=0;i<10;i++){
	document.getElementById(stat_name).innerHTML +='<div class="12u" id="'+stat_name+i.toString()+'"><button class="button fit small" onclick="updateStat(\''+stat_name+'\','+i.toString()+');">#'+(i+1).toString()+'</button></div>';
}
stat_name = 'runs';
for (i=0;i<10;i++){
	document.getElementById(stat_name).innerHTML +='<div class="12u" id="'+stat_name+i.toString()+'"><button class="button fit small" onclick="updateStat(\''+stat_name+'\','+i.toString()+');">#'+(i+1).toString()+'</button></div>';
}
stat_name = 'rbi';
for (i=0;i<10;i++){
	document.getElementById(stat_name).innerHTML +='<div class="12u" id="'+stat_name+i.toString()+'"><button class="button fit small" onclick="updateStat(\''+stat_name+'\','+i.toString()+');">#'+(i+1).toString()+'</button></div>';
}

stat_name = 'war';
for (i=0;i<10;i++){
	document.getElementById(stat_name).innerHTML +='<div class="12u" id="'+stat_name+i.toString()+'"><button class="button fit small" onclick="updateStat(\''+stat_name+'\','+i.toString()+');">#'+(i+1).toString()+'</button></div>';
}
stat_name = 'bb';
for (i=0;i<10;i++){
	document.getElementById(stat_name).innerHTML +='<div class="12u" id="'+stat_name+i.toString()+'"><button class="button fit small" onclick="updateStat(\''+stat_name+'\','+i.toString()+');">#'+(i+1).toString()+'</button></div>';
}
stat_name = 'so';
for (i=0;i<10;i++){
	document.getElementById(stat_name).innerHTML +='<div class="12u" id="'+stat_name+i.toString()+'"><button class="button fit small" onclick="updateStat(\''+stat_name+'\','+i.toString()+');">#'+(i+1).toString()+'</button></div>';
}

stat_name = 'sb';
for (i=0;i<10;i++){
	document.getElementById(stat_name).innerHTML +='<div class="12u" id="'+stat_name+i.toString()+'"><button class="button fit small" onclick="updateStat(\''+stat_name+'\','+i.toString()+');">#'+(i+1).toString()+'</button></div>';
}
stat_name = 'hits';
for (i=0;i<10;i++){
	document.getElementById(stat_name).innerHTML +='<div class="12u" id="'+stat_name+i.toString()+'"><button class="button fit small" onclick="updateStat(\''+stat_name+'\','+i.toString()+');">#'+(i+1).toString()+'</button></div>';
}

