posValues = [
	{'name':'QB','value': 0.0,'players':[]},
	{'name':'RB','value': 0.0,'players':[]},
	{'name':'WR','value': 0.0,'players':[]},
	{'name':'TE','value': 0.0,'players':[]},
	{'name':'OL','value': 0.0,'players':[]},
	{'name':'DL','value': 0.0,'players':[]},
	{'name':'LB','value': 0.0,'players':[]},
	{'name':'DB','value': 0.0,'players':[]},
	{'name':'K','value': 0.0,'players':[]},
];
myTeamValues = {'offense':0.0,'defense':0.0,'passOff':0.0,'passDef':0.0,'rushOff':0.0,'rushDef':0.0,'blockOff':0.0,'blockDef':0.0};
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

			'po':.4,'ro':.25,'bo':.35,
			'pd':.4,'rd':.25,'bd':.35,

			};
function updateTeam(teamValues){
	teamValues.passOff=posValues[0].value*weights.qbP+posValues[2].value*weights.wrP+posValues[3].value*weights.teP;
	teamValues.rushOff=posValues[1].value*weights.rbR;
	teamValues.blockOff=posValues[4].value*weights.olB+posValues[3].value*weights.teB+posValues[1].value*weights.rbB;
	teamValues.passDef=posValues[7].value*weights.dbPD+posValues[6].value*weights.lbPD;
	teamValues.rushDef=posValues[6].value*weights.lbRD+posValues[5].value*weights.dlRD;
	teamValues.blockDef=posValues[5].value*weights.dlBD+posValues[6].value*weights.lbBD;
	teamValues.offense = teamValues.passOff*weights.po+teamValues.rushOff*weights.ro+teamValues.blockOff*weights.bo;
	teamValues.defense = teamValues.passDef*weights.pd+teamValues.rushDef*weights.rd+teamValues.blockDef*weights.bd;
}

function trainPlayer(posID){
	var i = 0;
	var addValue = 1.0;
	for (i=0;i<posValues[posID].players.length;i++){
		posValues[posID].players[i].current +=posValues[posID].players[i].potential*addValue;
	}
	posValues[posID].value += addValue; 
}

function addPlayer(posID,year,current,potential,name){
	posValues[posID].players.push({'year':year,'current':current,'potential':potential,'name':name});
}




















addPlayer(0,'F',1200.0,2.0,'Jackson Brown');





