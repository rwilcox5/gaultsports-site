var selPlayer; var i =0; var ii = 0;

function updateCell([block,spot],piece){
	document.getElementById('cell'+block.toString()+spot.toString()).innerHTML=piece;
}

function setClicker(block,spot){
	document.getElementById('cell'+block.toString()+spot.toString()).addEventListener("click", function(){
		if (spot=='9'){
			if (selTeam!=''){
				updateCell([block,spot],selTeam);
			}
		}
		else{
			if (selPlayer !=''){
				pieces[block][spot]=selPlayer;
			}
			updateCell([block,spot],pieces[block][spot]);
		}

	});
}


function addPlayer(playerName){
	selPlayer = playerName;
	selTeam = '';
}
function addTeam(teamName){
	selTeam = teamName;
	selPlayer = '';
}




for (i=0;i<3;i++){
	for (ii=0;ii<3;ii++){
		setClicker(i,ii);
	}
}
setClicker(0,9);
setClicker(1,9);
setClicker(2,9);
setClicker(3,9);
setClicker(4,9);
setClicker(5,9);
setClicker(6,9);
setClicker(7,9);

var pieces = [];
for (i=0;i<3;i++){
	pieces.push([]);
	for (ii=0;ii<3;ii++){
		pieces[i].push(' ');
	}
}

