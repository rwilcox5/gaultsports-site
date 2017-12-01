


var nrows = parseInt(getQueryVariable('nrows'));
if (nrows==0){nrows = 20;}
if (nrows>100){nrows = 100;}
var startYear = parseInt(getQueryVariable('start'));
var endYear = parseInt(getQueryVariable('end'));
var urlyears = parseInt(getURLyears());
var urlend = urlyears%1000;
var urlstart = (urlyears-urlend)/1000;
urlend = (urlend-50)*20;
urlstart = (urlstart-50)*20;
var wlp = window.location.pathname; 
var moveLocation = false;
if (endYear==0){endYear=urlend;}
if (startYear==0){startYear=urlstart;}
if (startYear<urlstart || startYear > urlstart+20){wlp = wlp.replace('-'+(urlstart/20+50).toString(),'-'+(Math.trunc(startYear/20)+50).toString()); moveLocation = true;}
if (endYear<urlend-20 || endYear > urlend){wlp = wlp.replace((urlend/20+50).toString()+'.',(Math.trunc(endYear/20)+51).toString()+'.'); moveLocation = true;}
if (moveLocation){window.location = wlp+window.location.search;}

var base_str = document.getElementById('question_str').innerHTML;
if (endYear >= 2017){
document.getElementById('question_str').innerHTML = base_str+'since '+startYear.toString()+'?';
}
else{
document.getElementById('question_str').innerHTML = base_str+'between '+startYear.toString()+' and '+endYear.toString()+'?';	
}

var dataArray = [];
	
function createAnswers(){
	answer_spot = document.getElementById('answer_spot');
	for (i=0;i<nrows;i++){
		dataArray.push({'year':2017,'team':'','answer':'','number':0,'points':6});
	}

	for (i=0;i<rawDataArray.length/4;i++){
		if (rawDataArray[i*4+2]>=startYear && rawDataArray[i*4+2]<=endYear){
	        for (ii=0;ii<nrows;ii++){
	            if (rawDataArray[i*4+3]>dataArray[ii]['number']){
	                for (iii=0;iii<nrows-1-ii;iii++){
	                        dataArray[nrows-1-iii]['year']=dataArray[nrows-1-iii-1]['year'];
	                        dataArray[nrows-1-iii]['answer']=dataArray[nrows-1-iii-1]['answer'];
	                        dataArray[nrows-1-iii]['team']=dataArray[nrows-1-iii-1]['team'];
	                        dataArray[nrows-1-iii]['number']=dataArray[nrows-1-iii-1]['number'];
	                }
	                dataArray[ii]['year']=rawDataArray[i*4+2];
	                dataArray[ii]['team']=rawDataArray[i*4+1];
	                dataArray[ii]['number']=rawDataArray[i*4+3];
	                dataArray[ii]['answer']=rawDataArray[i*4];
	                break
	            }
	        }
    	}
    }	

	var answer_str = '';
	answer_str += '<div class="6u mhide"><div class="row"><div class="2u">Year</div><div class="2u">Team</div><div class="2u" id="stat_spota"></div><div class="6u">Name</div></div>';
	for (i=0;i<nrows/2;i++){
	answer_str += '<div class="row"><div class="2u" id="year'+i.toString()+'"><button class="button small" onclick="getYear('+i.toString()+');">Year</button></div><div class="2u" id="team'+i.toString()+'"><button class="button small" onclick="getTeam('+i.toString()+');">Team</div><div class="2u">'+dataArray[i].number.toString()+'</div><div class="6u" id="answer'+i.toString()+'">-------------------------</div></div>';
	}
	answer_str += '</div><div class="6u mhide"><div class="row"><div class="2u">Year</div><div class="2u">Team</div><div class="2u" id="stat_spotb"></div><div class="6u">Name</div></div>';
	for (i=nrows/2;i<nrows;i++){
	answer_str += '<div class="row"><div class="2u" id="year'+i.toString()+'"><button class="button small" onclick="getYear('+i.toString()+');">Year</button></div><div class="2u" id="team'+i.toString()+'"><button class="button small" onclick="getTeam('+i.toString()+');">Team</div><div class="2u">'+dataArray[i].number.toString()+'</div><div class="6u" id="answer'+i.toString()+'">-------------------------</div></div>';
	}
	answer_str += '</div>';
	answer_str += '<div class="12u mshow"><div class="row"><div class="2u">Year</div><div class="2u">Team</div><div class="2u" id="stat_spota"></div><div class="6u">Name</div></div>';
	for (i=0;i<nrows;i++){
	answer_str += '<div class="row"><div class="2u" id="year'+i.toString()+'"><button class="button small" onclick="getYear('+i.toString()+');">Year</button></div><div class="2u" id="team'+i.toString()+'"><button class="button small" onclick="getTeam('+i.toString()+');">Team</div><div class="2u">'+dataArray[i].number.toString()+'</div><div class="6u" id="answer'+i.toString()+'">-------------------------</div></div>';
	}
	answer_str += '</div>';

	answer_str += '<div class="12u"><button class="button-primary" onclick="showAnswers();">Show Answers</button></div>';
	answer_spot.innerHTML = answer_str;
	var spot_str = '';
	if (stat_id=='pitcher-9'){spot_str = 'bWAR';}
	if (stat_id=='pitcher-14'){spot_str = 'Wins';}
	if (stat_id=='pitcher-17'){spot_str = 'Saves';}
	if (stat_id=='pitcher-23'){spot_str = 'K';}
	document.getElementById('stat_spota').innerHTML = spot_str; document.getElementById('stat_spotb').innerHTML = spot_str;

	var input_ids = document.getElementById("answer");

	// Show label but insert value into the input:
	  var id_list = [];
	  for (i=0;i<npitchers;i++) {id_list.push(pitcher_names[i]);}
	new Awesomplete(input_ids, {
	  autoFirst: true,
	  sort: false,
	  list: id_list,

	});

	answer_input = document.getElementById('answer');
	answer_input.addEventListener('awesomplete-selectcomplete',setAnswer);

}

function setAnswer(){
	answer = document.getElementById('answer').value;
	for (i=0;i<nrows;i++){
		if (dataArray[i].answer==answer && dataArray[i].points>0){
			document.getElementById('answer'+i.toString()).innerHTML=answer; 
			var points = parseInt(document.getElementById('points').innerHTML);
			points += dataArray[i].points;
			document.getElementById('points').innerHTML = points;
			dataArray[i].points = 0;
			break;
		}
	}
	document.getElementById('answer').value = '';
	var points = parseInt(document.getElementById('points').innerHTML);
	points -= 1;
	document.getElementById('points').innerHTML = points;
}

function getYear(answern){
	document.getElementById('year'+answern.toString()).innerHTML = dataArray[answern].year.toString();
	var points = parseInt(document.getElementById('points').innerHTML);
	points -= 1;
	document.getElementById('points').innerHTML = points;
}
function getTeam(answern){
	document.getElementById('team'+answern.toString()).innerHTML = dataArray[answern].team.toString();
	var points = parseInt(document.getElementById('points').innerHTML);
	points -= 2;
	document.getElementById('points').innerHTML = points;
}
function showAnswers(){
	for (i=0;i<nrows;i++){
		if (dataArray[i].points>0){
			document.getElementById('answer'+i.toString()).innerHTML='<span style="color:red;">'+dataArray[i].answer+'</span>'; 
			dataArray[i].points = 0;
		}
		document.getElementById('year'+i.toString()).innerHTML = dataArray[i].year.toString();
		document.getElementById('team'+i.toString()).innerHTML = dataArray[i].team.toString();
	}

}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(0);
}
function getURLyears(){
		var vars = window.location.pathname.split("-");
		var yearshtml = vars[vars.length-1].split(".");
       return(yearshtml[0]);
}