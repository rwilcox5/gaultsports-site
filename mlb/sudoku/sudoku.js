var selTeam; var selPos; var i =0; var ii = 0;
var positions = ['C','1B','2B','SS','3B','LF','CF','RF','P'];
var teams = ['ATL','BAL','CHC','DET','HOU','KCR','LAD','MIL','NYY'];
var hideTeams = false; var hidePos = false;
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
	document.getElementById('cell'+block.toString()+spot.toString()).addEventListener("click", function(){
		if (selTeam !=''){
			pieces[block][spot][1]=selTeam;
		}
		else if (selPos != ''){
			pieces[block][spot][0]=selPos;
		}
		updateCell([block,spot],pieces[block][spot]);

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

function hideInfo(infoType){
	var i =0; var ii = 0;
	if (infoType=='Pos' && !hidePos){
		hidePos = true;
		hideTeams = false;
		for (i=0;i<9;i++){
			for (ii=0;ii<9;ii++){
				updateCell([i,ii],[' ',pieces[i][ii][1]]);
			}
		}
	}
	else if (infoType=='Pos' && hidePos){
		hidePos = false;
		hideTeams = false;
		for (i=0;i<9;i++){
			for (ii=0;ii<9;ii++){
				updateCell([i,ii],[pieces[i][ii][0],pieces[i][ii][1]]);
			}
		}
	}
	else if (infoType=='Teams' && !hideTeams){
		hidePos = false;
		hideTeams = true;
		for (i=0;i<9;i++){
			for (ii=0;ii<9;ii++){
				updateCell([i,ii],[pieces[i][ii][0],' ']);
			}
		}
	}
	else if (infoType=='Teams' && hideTeams){
		hidePos = false;
		hideTeams = false;
		for (i=0;i<9;i++){
			for (ii=0;ii<9;ii++){
				updateCell([i,ii],[pieces[i][ii][0],pieces[i][ii][1]]);
			}
		}
	}
}

for (i=0;i<9;i++){
	for (ii=0;ii<9;ii++){
		setClicker(i,ii);
	}
}

var pieces = [];
for (i=0;i<9;i++){
	pieces.push([]);
	for (ii=0;ii<9;ii++){
		pieces[i].push([' ',' ']);
	}
}

var initialPieces = [];
initialPieces.push([]);
initialPieces[0].push([0,6]);
initialPieces[0].push([8,2]);
initialPieces.push([]);
initialPieces[1].push([1,2]);
initialPieces[1].push([2,7]);
initialPieces[1].push([7,3]);
initialPieces.push([]);
initialPieces[2].push([3,1]);
initialPieces[2].push([5,6]);
initialPieces[2].push([7,5]);
initialPieces.push([]);
initialPieces[3].push([1,6]);
initialPieces[3].push([2,0]);
initialPieces[3].push([3,3]);
initialPieces[3].push([5,7]);
initialPieces[3].push([6,7]);
initialPieces[3].push([7,2]);
initialPieces[3].push([8,5]);
initialPieces.push([]);
initialPieces[4].push([1,3]);
initialPieces[4].push([2,1]);
initialPieces[4].push([3,6]);
initialPieces[4].push([5,5]);
initialPieces[4].push([6,5]);
initialPieces[4].push([8,0]);
initialPieces.push([]);
initialPieces[5].push([1,5]);
initialPieces[5].push([3,2]);
initialPieces[5].push([6,1]);
initialPieces.push([]);
initialPieces[6].push([7,6]);
initialPieces.push([]);
initialPieces[7].push([0,8]);
initialPieces[7].push([2,3]);
initialPieces[7].push([5,2]);
initialPieces.push([]);
initialPieces[8].push([0,3]);
initialPieces[8].push([4,4]);
initialPieces[8].push([6,8]);

initialPieces.push([]);
initialPieces[9].push([1,2]);
initialPieces[9].push([2,6]);
initialPieces[9].push([5,8]);
initialPieces.push([]);
initialPieces[10].push([0,8]);
initialPieces[10].push([6,7]);
initialPieces.push([]);
initialPieces[11].push([0,5]);
initialPieces[11].push([5,1]);
initialPieces[11].push([7,5]);
initialPieces[11].push([8,0]);
initialPieces.push([]);
initialPieces[12].push([0,1]);
initialPieces[12].push([2,5]);
initialPieces[12].push([3,0]);
initialPieces[12].push([7,0]);
initialPieces.push([]);
initialPieces[13].push([0,4]);
initialPieces[13].push([7,6]);
initialPieces[13].push([8,4]);
initialPieces.push([]);
initialPieces[14].push([2,4]);
initialPieces[14].push([4,2]);
initialPieces[14].push([6,2]);
initialPieces[14].push([8,3]);
initialPieces.push([]);
initialPieces[15].push([1,8]);
initialPieces[15].push([4,6]);
initialPieces[15].push([6,4]);
initialPieces[15].push([8,7]);
initialPieces.push([]);
initialPieces[16].push([3,7]);
initialPieces[16].push([6,3]);
initialPieces.push([]);
initialPieces[17].push([1,3]);
initialPieces[17].push([2,1]);
initialPieces[17].push([3,8]);
initialPieces[17].push([5,0]);



for (i=0;i<18;i++){
	for (ii=0;ii<initialPieces[i].length;ii++){
		var this_block = initialPieces[i][ii][0];
		var this_spot = initialPieces[i][ii][1];
		if (i<9){
			pieces[this_block][this_spot][0]=positions[i];
			updateCell(initialPieces[i][ii],pieces[this_block][this_spot]);
		}
		else{
			pieces[this_block][this_spot][1]=teams[i-9];
			updateCell(initialPieces[i][ii],pieces[this_block][this_spot]);
		}
	}
}

