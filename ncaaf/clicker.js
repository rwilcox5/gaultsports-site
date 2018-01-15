posValues = [
	{'name':'QB','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
	{'name':'RB','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
	{'name':'WR','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
	{'name':'TE','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
	{'name':'OL','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
	{'name':'DL','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
	{'name':'LB','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
	{'name':'DB','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
	{'name':'K','value': 0.0,'multiplier':1.0,'coaching':0,'players':[]},
];

seasonDay = 0;

myTeamValues = {'passOff':0.0,'passDef':0.0,'rushOff':0.0,'rushDef':0.0,'blockOff':0.0,'blockDef':0.0};

schoolValues = {'grades':0.0,'health':0.0,'capacity':1000,'fans':0.0,'motivation':0.0,'strength':0.0,'training':0.0};

coachValues = {'oc':0.0,'dc':0.0};

facilities = [	{'type':'stadium','upgrades':[0.0,1.0]}
			];

coachTypes = [	{'name':'Coach','value':0.0},
				{'name':'Guru','value':0.0},
				{'name':'Genius','value':0.0},
				{'name':'Wizard','value':0.0}
			];

coachList = [	'Offensive',
				'Defensive',
			];

weights = {	'qbP':.6,'wrP':.3,'teP':.1,
			'rbR':1.0,
			'olB':.6,'teB':.25,'rbB':.15,
			'dbPD':.75,'lbPD':.25,
			'lbRD':.75,'dlRD':.25,
			'dlBD':.8,'lbBD':.2,


			};

scheduleArray = [];

money = 15000.0;

myRecord = [0,0];

haze = [2.5,.5];

winBonus = 1000;

regionTeams = [];

function updateTeam(teamValues){
	teamValues.passOff=posValues[0].value*weights.qbP+posValues[2].value*weights.wrP+posValues[3].value*weights.teP;
	teamValues.rushOff=posValues[1].value*weights.rbR;
	teamValues.blockOff=posValues[4].value*weights.olB+posValues[3].value*weights.teB+posValues[1].value*weights.rbB;
	teamValues.passDef=posValues[7].value*weights.dbPD+posValues[6].value*weights.lbPD;
	teamValues.rushDef=posValues[6].value*weights.lbRD+posValues[5].value*weights.dlRD;
	teamValues.blockDef=posValues[5].value*weights.dlBD+posValues[6].value*weights.lbBD;
}

function trainPlayer(posID,addValue){
	var i = 0;
	for (i=0;i<posValues[posID].players.length;i++){
		posValues[posID].players[i].current +=posValues[posID].players[i].potential*addValue*.0001;
	}
	posValues[posID].players.sort(function(a, b) {  return b.current - a.current;});
	if (posID==8){	posValues[posID].value = posValues[posID].players[0].current; 
					posValues[posID].multiplier = posValues[posID].players[0].potential; }
	else if (posID==0){	posValues[posID].value = posValues[posID].players[0].current*.95+posValues[posID].players[1].current*.05;
						posValues[posID].multiplier = posValues[posID].players[0].potential*.95+posValues[posID].players[1].potential*.05; }
	else if (posID==1){	posValues[posID].value = posValues[posID].players[0].current*.8+posValues[posID].players[1].current*.15+posValues[posID].players[2].current*.05;
						posValues[posID].multiplier = posValues[posID].players[0].potential*.8+posValues[posID].players[1].potential*.15+posValues[posID].players[2].potential*.05; }
	else if (posID==2){	posValues[posID].value = posValues[posID].players[0].current*.45+posValues[posID].players[1].current*.3+posValues[posID].players[2].current*.2+posValues[posID].players[3].current*.05; 
						posValues[posID].multiplier = posValues[posID].players[0].potential*.45+posValues[posID].players[1].potential*.3+posValues[posID].players[2].potential*.2+posValues[posID].players[3].potential*.05;}
	else if (posID==3){	posValues[posID].value = posValues[posID].players[0].current*.8+posValues[posID].players[1].current*.2;
						posValues[posID].multiplier = posValues[posID].players[0].potential*.8+posValues[posID].players[1].potential*.2; }
	else if (posID==4){	posValues[posID].value = posValues[posID].players[0].current*.25+posValues[posID].players[1].current*.2+posValues[posID].players[2].current*.15+posValues[posID].players[3].current*.15+posValues[posID].players[4].current*.15+posValues[posID].players[5].current*.05+posValues[posID].players[6].current*.05;
						posValues[posID].multiplier = posValues[posID].players[0].potential*.25+posValues[posID].players[1].potential*.2+posValues[posID].players[2].potential*.15+posValues[posID].players[3].potential*.15+posValues[posID].players[4].potential*.15+posValues[posID].players[5].potential*.05+posValues[posID].players[6].potential*.05; }
	else if (posID==5){	posValues[posID].value = posValues[posID].players[0].current*.35+posValues[posID].players[1].current*.3+posValues[posID].players[2].current*.15+posValues[posID].players[3].current*.15+posValues[posID].players[4].current*.05;
						posValues[posID].multiplier = posValues[posID].players[0].potential*.35+posValues[posID].players[1].potential*.3+posValues[posID].players[2].potential*.15+posValues[posID].players[3].potential*.15+posValues[posID].players[4].potential*.05; }
	else if (posID==6){	posValues[posID].value = posValues[posID].players[0].current*.4+posValues[posID].players[1].current*.3+posValues[posID].players[2].current*.25+posValues[posID].players[3].current*.05;
						posValues[posID].multiplier = posValues[posID].players[0].potential*.4+posValues[posID].players[1].potential*.3+posValues[posID].players[2].potential*.25+posValues[posID].players[3].potential*.05; }
	else if (posID==7){	posValues[posID].value = posValues[posID].players[0].current*.35+posValues[posID].players[1].current*.3+posValues[posID].players[2].current*.15+posValues[posID].players[3].current*.15+posValues[posID].players[4].current*.05;
						posValues[posID].multiplier = posValues[posID].players[0].potential*.35+posValues[posID].players[1].potential*.3+posValues[posID].players[2].potential*.15+posValues[posID].players[3].potential*.15+posValues[posID].players[4].potential*.05; }

	document.getElementsByClassName('train'+posValues[posID].name+' ability')[0].innerHTML = posValues[posID].value.toFixed(2);
	document.getElementsByClassName('train'+posValues[posID].name+' multiplier')[0].innerHTML = posValues[posID].multiplier.toFixed(2);
	for (i=0;i<posValues[posID].players.length;i++){
		disCurrent = posValues[posID].players[i].current-haze[0]/2.0+Math.random()*haze[0];
		disPotential = posValues[posID].players[i].potential-haze[1]/2.0+Math.random()*haze[1];
		document.getElementById('player'+posValues[posID].name+i.toString()).innerHTML='<div class="4u">'+posValues[posID].players[i].name+'</div><div class="2u">'+posValues[posID].name+'</div><div class="2u">'+posValues[posID].players[i].year+'</div><div class="2u">'+disCurrent.toFixed(2)+'+-'+(haze[0]/2.0).toFixed(2)+'</div><div class="2u">'+disPotential.toFixed(2)+'+-'+(haze[1]/2.0).toFixed(2)+'</div>';
	}
	updateTeam(myTeamValues);


}

function fundraise(amt){
	money += amt;
	document.getElementById('money').innerHTML = money.toString();
}

function addPlayer(posID,year,current,potential,name){
	posValues[posID].players.push({'year':year,'current':current,'potential':potential,'name':name});
	disCurrent = current-haze[0]/2.0+Math.random()*haze[0];
	disPotential = potential-haze[1]/2.0+Math.random()*haze[1];
	document.getElementById('roster').innerHTML += '<div class="row" id="player'+posValues[posID].name+(posValues[posID].players.length-1).toString()+'"><div class="4u">'+name+'</div><div class="2u">'+posValues[posID].name+'</div><div class="2u">'+year+'</div><div class="2u">'+disCurrent.toFixed(2)+'+-'+(haze[0]/2.0).toFixed(2)+'</div><div class="2u">'+disPotential.toFixed(2)+'+-'+(haze[1]/2.0).toFixed(2)+'</div></div>';
}

function hireCoach(type,value,cost){
	var i =0;
	if (money>=cost){
		money -=cost;
		document.getElementById('money').innerHTML = money.toString();
		if (type=='Offense'){
			for (i=0;i<5;i++){
				posValues[i].coaching = value;
				document.getElementsByClassName('train'+posValues[i].name+' coaching')[0].innerHTML = value;
			}
			if (value==1){
				document.getElementById('coachOC').innerHTML = '<div class="6u"><button class="button fit small" onclick="hireCoach(\'Offense\',2,5000);">Hire Offensive Guru</button></div><div class="3u">Offense: +2</div><div class="3u">Cost: 5000/year</div>';
			}
		}
		else if (type=='Defense'){
			for (i=5;i<8;i++){
				posValues[i].coaching = value;
				document.getElementsByClassName('train'+posValues[i].name+' coaching')[0].innerHTML = value;
			}
			if (value==1){
				document.getElementById('coachDC').innerHTML = '<div class="6u"><button class="button fit small" onclick="hireCoach(\'Defense\',2,5000);">Hire Defensive Guru</button></div><div class="3u">Defense: +2</div><div class="3u">Cost: 5000/year</div>';
			}
		}
	}
}

setInterval(function(){ 
	var i = 0;
	for (i=0;i<9;i++){
    	trainPlayer(i,posValues[i].coaching);  
	}
}, 1000);

setInterval(function(){ 
	var i = 0;
	seasonDay +=1;
	if (seasonDay%7==0){
		gameResult = simGame(myTeamValues,scheduleArray[seasonDay/7-1].oppValues);
		if (gameResult[0]>gameResult[1]){
			document.getElementsByClassName('week'+(seasonDay/7).toString()+' time')[0].innerHTML = 'W '+gameResult[0].toString()+'-'+gameResult[1].toString();
			money += winBonus;
			myRecord[0]++;
		}
		else{
			document.getElementsByClassName('week'+(seasonDay/7).toString()+' time')[0].innerHTML = 'L '+gameResult[1].toString()+'-'+gameResult[0].toString();
			myRecord[1]++;
		}
		console.log(seasonDay/7,Date.now());

		document.getElementsByClassName('region'+(6).toString()+' name')[0].innerHTML = 'Dreher';
		document.getElementsByClassName('region'+(6).toString()+' ovrec')[0].innerHTML = myRecord[0].toString()+'-'+myRecord[1].toString();
		document.getElementsByClassName('region'+(6).toString()+' regrec')[0].innerHTML = '0-0';


		if (seasonDay/7<6){
			for (i=0;i<5;i++){
				teamA = regionTeams[i].values;
				oppPassOff = 80.0+Math.random()*20;
				oppPassDef = 80.0+Math.random()*20;
				oppRushOff = 80.0+Math.random()*20;
				oppRushDef = 80.0+Math.random()*20;
				oppBlockOff = 80.0+Math.random()*20;
				oppBlockDef = 80.0+Math.random()*20;
				teamB = {'passOff':oppPassOff,'passDef':oppPassDef,'rushOff':oppRushOff,'rushDef':oppRushDef,'blockOff':oppBlockOff,'blockDef':oppBlockDef};
				gameResult = simGame(teamA,teamB);
				if (gameResult[0]>gameResult[1]){regionTeams[i]['wins']+=1;}
				else if (gameResult[0]<gameResult[1]){regionTeams[i]['losses']+=1;}
				document.getElementsByClassName('region'+(i+1).toString()+' name')[0].innerHTML = regionTeams[i].name;
				document.getElementsByClassName('region'+(i+1).toString()+' ovrec')[0].innerHTML = regionTeams[i].wins.toString()+'-'+regionTeams[i].losses.toString();
				document.getElementsByClassName('region'+(i+1).toString()+' regrec')[0].innerHTML = '0-0';
			}
			

		}
		


	}
}, 6000);


cityList = {'SC':['Columbia','E. Columbia','W. Columbia','N. Columbia','S. Columbia','Charleston','E. Charleston','W. Charleston','N. Charleston','S. Charleston','North Charleston','E. North Charleston','W. North Charleston','N. North Charleston','S. North Charleston','Mount Pleasant','E. Mount Pleasant','W. Mount Pleasant','N. Mount Pleasant','S. Mount Pleasant','Rock Hill','E. Rock Hill','W. Rock Hill','N. Rock Hill','S. Rock Hill','Greenville','E. Greenville','W. Greenville','N. Greenville','S. Greenville','Summerville','E. Summerville','W. Summerville','N. Summerville','S. Summerville','E. Sumter','W. Sumter','N. Sumter','S. Sumter','E. Hilton Head Island','W. Hilton Head Island','N. Hilton Head Island','S. Hilton Head Island','E. Florence','W. Florence','N. Florence','S. Florence','E. Spartanburg','W. Spartanburg','N. Spartanburg','S. Spartanburg','E. Goose Creek','W. Goose Creek','N. Goose Creek','S. Goose Creek','E. Aiken','W. Aiken','S. Aiken','E. Myrtle Beach','W. Myrtle Beach','S. Myrtle Beach','E. Anderson','W. Anderson','S. Anderson','E. Greer','W. Greer','E. Greenwood','W. Greenwood','E. Mauldin','W. Mauldin','E. North Augusta','W. North Augusta','E. Easley','W. Easley','E. Simpsonville','W. Simpsonville','E. Hanahan','W. Hanahan','E. Lexington','W. Lexington','E. Conway','W. Conway','West Columbia','Orangeburg','Clemson','North Myrtle Beach','Bluffton','Cayce','Gaffney','Beaufort','Irmo','Fort Mill','Port Royal','Forest Acres','Newberry','Georgetown','Laurens','Bennettsville'],'FL':[]}
divList = {};

function simGame(teamA,teamB){

	teamBstopPass = 1./(1.+Math.pow(10.,(teamA.passOff-teamB.passDef)/20.));
	teamBstopRush = 1./(1.+Math.pow(10.,(teamA.rushOff-teamB.rushDef)/20.));
	teamBstopBlock = 1./(1.+Math.pow(10.,(teamA.blockOff-teamB.blockDef)/20.));
	teamBstop = 3./(1./teamBstopPass+1./teamBstopRush+1./teamBstopBlock);

	teamAstopPass = 1./(1.+Math.pow(10.,(teamB.passOff-teamA.passDef)/20.));
	teamAstopRush = 1./(1.+Math.pow(10.,(teamB.rushOff-teamA.rushDef)/20.));
	teamAstopBlock = 1./(1.+Math.pow(10.,(teamB.blockOff-teamA.blockDef)/20.));
	teamAstop = 3./(1./teamAstopPass+1./teamAstopRush+1./teamAstopBlock);

	teamAscore =0;
	teamBscore =0;
	for (i=0;i<12;i++){
		if (Math.random()>.35+teamBstop*.65){teamAscore += 7;}
		else if (Math.random()>.6+teamBstop*.4){teamAscore += 3;}
		if (Math.random()>.35+teamAstop*.65){teamBscore += 7;}
		else if (Math.random()>.6+teamAstop*.4){teamBscore += 3;}
	}
	while (teamAscore == teamBscore){
		if (Math.random()>.35+teamBstop*.65){teamAscore += 7;}
		else if (Math.random()>.6+teamBstop*.4){teamAscore += 3;}
		if (Math.random()>.35+teamAstop*.65){teamBscore += 7;}
		else if (Math.random()>.6+teamAstop*.4){teamBscore += 3;}
	}
	return [teamAscore,teamBscore];
}









function createRoster(){
	var i = 0;
	var posID = 0;
	posNArray = [3,3,5,3,8,6,6,6,1];
	for (posID=0;posID<9;posID++){
		posN = posNArray[posID];
		for (i=0;i<posN;i++){
			xxx = Math.random()*(8);
			if (xxx<3){
				x = Math.random()*(10);
				xx = Math.random()*(2);
				addPlayer(posID,'S',90.0+x,1.0+xx,'Jackson Brown');
			}
			else if (xxx<5){
				x = Math.random()*(10);
				xx = Math.random()*(2.5);
				addPlayer(posID,'J',80.0+x,1.0+xx,'Jackson Brown');
			}
			else if (xxx<7){
				x = Math.random()*(10);
				xx = Math.random()*(3);
				addPlayer(posID,'H',70.0+x,1.0+xx,'Jackson Brown');
			}
			else {
				x = Math.random()*(10);
				xx = Math.random()*(4);
				addPlayer(posID,'F',60.0+x,1.0+xx,'Jackson Brown');
			}
		}
		trainPlayer(posID,1);
	}

	updateTeam(myTeamValues);
}

function createSchedule(level,team,division,region){
	scheduleArray = [];
	var date = new Date();
	if (level=='HS'){
		var i = 0;
		divList = {'AAAA':{'1':[],'2':[],'3':[],'4':[]},'AAA':{'1':[],'2':[],'3':[],'4':[]},'AA':{'1':[],'2':[],'3':[],'4':[]},'A':{'1':[],'2':[],'3':[],'4':[]}};
		for (ii=0;ii<4;ii++){
			for (i=0;i<6;i++){
				x = Math.floor(Math.random() * (36));
				divList['AAAA'][(ii+1).toString()].push(cityList['SC'][x]);
				cityList['SC'].splice(x,1);
			}
		}
		for (ii=0;ii<4;ii++){
			for (i=0;i<6;i++){
				x = Math.floor(Math.random() * (36));
				divList['AAA'][(ii+1).toString()].push(cityList['SC'][x]);
				cityList['SC'].splice(x,1);
			}
		}
		for (ii=0;ii<4;ii++){
			for (i=0;i<6;i++){
				x = Math.floor(Math.random() * (Math.max(36,cityList['SC'].length)));
				divList['AA'][(ii+1).toString()].push(cityList['SC'][x]);
				cityList['SC'].splice(x,1);
			}
		}
		for (ii=0;ii<4;ii++){
			for (i=0;i<6;i++){
				x = Math.floor(Math.random() * (cityList['SC'].length));
				divList['A'][(ii+1).toString()].push(cityList['SC'][x]);
				cityList['SC'].splice(x,1);
			}
		}

		var ih = 0;
		for (i=0;i<10;i++){
			oppPassOff = 80.0+Math.random()*20;
			oppPassDef = 80.0+Math.random()*20;
			oppRushOff = 80.0+Math.random()*20;
			oppRushDef = 80.0+Math.random()*20;
			oppBlockOff = 80.0+Math.random()*20;
			oppBlockDef = 80.0+Math.random()*20;
			if (i<5){
				x = Math.floor(Math.random() * (3));
				otherRegions = [1,2,3,4];
				otherRegions.splice(region-1,1);
				oppRegion = otherRegions[x];
				x = Math.floor(Math.random() * (6));
				opponent = divList[division][oppRegion.toString()][x];
			}
			else{
				regionTeams.push({'name':divList[division][region.toString()][i-5],'wins':0,'losses':0,'cwins':0,'closses':0,'values':{'passOff':oppPassOff,'passDef':oppPassDef,'rushOff':oppRushOff,'rushDef':oppRushDef,'blockOff':oppBlockOff,'blockDef':oppBlockDef}});
				document.getElementsByClassName('region'+(i-4).toString()+' name')[0].innerHTML = regionTeams[i-5].name;
				document.getElementsByClassName('region'+(i-4).toString()+' ovrec')[0].innerHTML = regionTeams[i-5].wins.toString()+'-'+regionTeams[i-5].losses.toString();
				document.getElementsByClassName('region'+(i-4).toString()+' regrec')[0].innerHTML = '0-0';
				opponent = divList[division][region.toString()][i-5];
			}
			if ((date.getMinutes()+7*i+7)%60<7){ih++;}
			
			wins = 0;
			losses = 0;
			for (ii=0;ii<1000;ii++){
				gameScore = simGame(myTeamValues,{'passOff':oppPassOff,'passDef':oppPassDef,'rushOff':oppRushOff,'rushDef':oppRushDef,'blockOff':oppBlockOff,'blockDef':oppBlockDef});
				if (gameScore[0]>gameScore[1]){wins+=1;}
				else if (gameScore[1]>gameScore[0]){losses+=1;}
			}
			game = {'opponent':opponent,'time':[date.getHours()+ih,(date.getMinutes()+7*i+7)%60],'oppValues':{'passOff':oppPassOff,'passDef':oppPassDef,'rushOff':oppRushOff,'rushDef':oppRushDef,'blockOff':oppBlockOff,'blockDef':oppBlockDef},'record':'0-0','winprob':wins/(wins+losses)};
			scheduleArray.push(game);
			game.time[0]=game.time[0]%12;
			if (game.time[0]==0){game.time[0]=12;}
			if (game.time[1]<10){document.getElementsByClassName('week'+(i+1).toString()+' time')[0].innerHTML = game.time[0].toString()+':0'+game.time[1].toString();}
			else{document.getElementsByClassName('week'+(i+1).toString()+' time')[0].innerHTML = game.time[0].toString()+':'+game.time[1].toString();}
			document.getElementsByClassName('week'+(i+1).toString()+' opponent')[0].innerHTML = game.opponent;
			document.getElementsByClassName('week'+(i+1).toString()+' record')[0].innerHTML = game.record;
			document.getElementsByClassName('week'+(i+1).toString()+' winprob')[0].innerHTML = (game.winprob*100).toFixed(1)+'%';
		}
		for (i=10;i<14;i++){
			
			if ((date.getMinutes()+7*i+7)%60<7){ih++;}
			game = {'time':[date.getHours()+ih,(date.getMinutes()+7*i+7)%60]};
			game.time[0]=game.time[0]%12;
			if (game.time[0]==0){game.time[0]=12;}
			if (game.time[1]<10){document.getElementsByClassName('week'+(i+1).toString()+' time')[0].innerHTML = game.time[0].toString()+':0'+game.time[1].toString();}
			else{document.getElementsByClassName('week'+(i+1).toString()+' time')[0].innerHTML = game.time[0].toString()+':'+game.time[1].toString();}

		}
	}

}

function createHSgame(){
	var allHScoaches = document.getElementsByClassName('coachHS');
	var allD2coaches = document.getElementsByClassName('coachD2');
	var allD1coaches = document.getElementsByClassName('coachD1');
	var i=0;
	for (i=0;i<allHScoaches.length;i++){
		allHScoaches[i].style.display = 'inline-block';
	}
	for (i=0;i<allD2coaches.length;i++){
		allD2coaches[i].style.display = 'none';
	}
	for (i=0;i<allD1coaches.length;i++){
		allD1coaches[i].style.display = 'none';
	}
	var facilities = document.getElementById('facilities');
	facilities.style.display = 'none';

	for (i=0;i<posValues.length;i++){
		document.getElementsByClassName('train'+posValues[i].name+' ability')[0].innerHTML = posValues[i].value.toFixed(2);
		document.getElementsByClassName('train'+posValues[i].name+' multiplier')[0].innerHTML = posValues[i].multiplier.toFixed(1);
		document.getElementsByClassName('train'+posValues[i].name+' coaching')[0].innerHTML = posValues[i].coaching;
	}
	createRoster();


	document.getElementById('money').innerHTML = money.toString();

	createSchedule('HS','SC','AAAA',1);

}
createHSgame();




