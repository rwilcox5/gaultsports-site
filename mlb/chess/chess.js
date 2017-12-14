var old_col = -1;
var old_row = -1;
var bluePitchers = [];
var blueBatters = [];
var redPitchers = [];
var redBatters = [];
var end_pitches = [];
var comp_pitches = [];
var turn_spot = ['Batter',0,0,5,0,5];

function updateCell([col,row],piece){
	if (piece[0]==6){piece[0]='C'}
	document.getElementById('cell'+col.toString()+row.toString()).innerHTML=piece[0];
	document.getElementById('cell'+col.toString()+row.toString()).style.color=piece[1];
}
function clearBorders(){
	var bi = 0; var bii = 0;
	for (bi=0;bi<8;bi++){
		for (bii=0;bii<8;bii++){
			document.getElementById('cell'+bi.toString()+bii.toString()).style.border='none';
		}
	}
	old_col=-1;
	old_row = -1;
}

function checkUnoccupied(coli,rowi){
	var redpi = 0; var redbi; var bluebi; var bluepi;
	for (redpi=0;redpi<6;redpi++){
		if (redPitchers[redpi][0]==coli && redPitchers[redpi][1]==rowi){
			return [false,'rpit'];
		}
	}
	for (redbi=0;redbi<redBatters.length;redbi++){
		if (redBatters[redbi][0]==coli && redBatters[redbi][1]==rowi){
			return [false,'rbat'];
		}
	}
	for (bluebi=0;bluebi<blueBatters.length;bluebi++){
		if (blueBatters[bluebi][0]==coli && blueBatters[bluebi][1]==rowi){
			return [false,'bbat'];							
		}
	}
	for (bluepi=0;bluepi<6;bluepi++){
		if (bluePitchers[bluepi][0]==coli && bluePitchers[bluepi][1]==rowi){
			return [false,'bpit'];
		}
	}
	return [true];

}

function turnRed(red_turn){
	if (red_turn[0]=='Batter'){
		var x = Math.trunc(Math.random()*redBatters.length);
		var old_col = redBatters[x][0];
		var old_row = redBatters[x][1];
		var ci; var ri; var new_col; var new_row; var move = [old_col,old_row];
		for (ci=-1;ci<2;ci++){
			for (ri=-1;ri<2;ri++){
				new_col=old_col+ci;
				new_row=old_row+ri;
				if (checkUnoccupied(new_col,new_row)[0]){
					if (new_col>=0 && new_col<=7 && new_row>=0 && new_row<=7){
						move = [new_col,new_row];
					}
				}
			}
		}
		updateCell([old_col,old_row],['','black']);
		updateCell(move,['B','red']);
		redBatters[x]=move;
	}
	else{
		var old_col; var old_row;
		if (red_turn[5]==5){
			var x = Math.trunc(Math.random()*2);
			if (x<1){
				old_col = redPitchers[red_turn[4]][0];
				old_row = redPitchers[red_turn[4]][1];
				fastball(red_turn[4]);
				var comp_x = Math.trunc(Math.random()*comp_pitches.length);
				var the_pitch = comp_pitches[comp_x];
				

				var rbi = 0; var rb_toremove = [];
				for (rbi=3;rbi<the_pitch.length;rbi++){
					rb_toremove.push(the_pitch[rbi][2]);
					updateCell([the_pitch[rbi][0],the_pitch[rbi][1]],['','black']);
				}
				rb_toremove.sort();
				rb_toremove.reverse();
				for (rbi=0;rbi<rb_toremove.length;rbi++){
					blueBatters.splice(rb_toremove[rbi],1);
				}

				updateCell([old_col,old_row],['','black']);
				updateCell([the_pitch[0],the_pitch[1]],the_pitch[2]);

				redPitchers[red_turn[4]]=[the_pitch[0],the_pitch[1]];
				turn_spot[4]++;

			}
			else{
				old_col = redPitchers[5][0];
				old_row = redPitchers[5][1];
				fastball(5);
				var comp_x = Math.trunc(Math.random()*comp_pitches.length);
				var the_pitch = comp_pitches[comp_x];
				
				
				var rbi = 0; var rb_toremove = [];
				for (rbi=3;rbi<the_pitch.length;rbi++){
					rb_toremove.push(the_pitch[rbi][2]);
					updateCell([the_pitch[rbi][0],the_pitch[rbi][1]],['','black']);
				}
				rb_toremove.sort();
				rb_toremove.reverse();
				for (rbi=0;rbi<rb_toremove.length;rbi++){
					blueBatters.splice(rb_toremove[rbi],1);
				}

				updateCell([old_col,old_row],['','black']);
				updateCell([the_pitch[0],the_pitch[1]],the_pitch[2]);

				redPitchers[5]=[the_pitch[0],the_pitch[1]];
				turn_spot[5]=0;
			}
		}
		else{
			old_col = redPitchers[red_turn[4]][0];
			old_row = redPitchers[red_turn[4]][1];
			fastball(red_turn[4]);
			var comp_x = Math.trunc(Math.random()*comp_pitches.length);
			var the_pitch = comp_pitches[comp_x];
			
			
			var rbi = 0; var rb_toremove = [];
			for (rbi=3;rbi<the_pitch.length;rbi++){
				rb_toremove.push(the_pitch[rbi][2]);
				updateCell([the_pitch[rbi][0],the_pitch[rbi][1]],['','black']);
			}
			rb_toremove.sort();
			rb_toremove.reverse();
			for (rbi=0;rbi<rb_toremove.length;rbi++){
				blueBatters.splice(rb_toremove[rbi],1);
			}

			updateCell([old_col,old_row],['','black']);
			updateCell([the_pitch[0],the_pitch[1]],the_pitch[2]);

			redPitchers[red_turn[4]]=[the_pitch[0],the_pitch[1]];
			turn_spot[4]++;
			turn_spot[5]=5;
		}
	}
	comp_pitches = [];
}
function setClicker(col,row){
	document.getElementById('cell'+col.toString()+row.toString()).addEventListener("click", function(){

		if (old_col>-1 && old_row >-1 && (old_row !=row || old_col != col)){
			var epi = 0; var is_pitch = false;
			for (epi=0;epi<end_pitches.length;epi++){
				if (end_pitches[epi][0]==col && end_pitches[epi][1]==row){
					
					updateCell([old_col,old_row],['','black']);
					
					var rbi = 0; var rb_toremove = [];
					for (rbi=3;rbi<end_pitches[epi].length;rbi++){
						rb_toremove.push(end_pitches[epi][rbi][2]);
						updateCell([end_pitches[epi][rbi][0],end_pitches[epi][rbi][1]],['','black']);
					}
					rb_toremove.sort();
					rb_toremove.reverse();

					for (rbi=0;rbi<rb_toremove.length;rbi++){
						redBatters.splice(rb_toremove[rbi],1);
					}

					bluePitchers[end_pitches[epi][2][0]-1]=[col,row];
					updateCell([col,row],end_pitches[epi][2]);

					if (end_pitches[epi][2][0]=='C'){turnRed(turn_spot); turn_spot[3]=0;}
					else{
						turnRed(turn_spot);
						turn_spot[3]=5;
						if (turn_spot[2]<4){turn_spot[2]++;}
						else{turn_spot[2]=0;}
					}

					turn_spot[0]='Batter';
					
					clearBorders();
					is_pitch = true;
					break;
				}
			}
			if (!is_pitch){
				var redpi = 0; var redbi; var bluebi; var bluepi; var lastspot = true; var isBatter = false;
				if (old_col>col+1 || old_col<col-1 || old_row>row+1 || old_row<row-1){lastspot = false;}

				for (redpi=0;redpi<6;redpi++){
					if (redPitchers[redpi][0]==col && redPitchers[redpi][1]==row){
						lastspot = false; break;
					}
				}
				for (redbi=0;redbi<redBatters.length;redbi++){
					if (redBatters[redbi][0]==col && redBatters[redbi][1]==row){
						lastspot = false; break;
					}
				}
				for (bluebi=0;bluebi<blueBatters.length;bluebi++){
					if (blueBatters[bluebi][0]==col && blueBatters[bluebi][1]==row){
						lastspot = false; break;								
					}
					if (blueBatters[bluebi][0]==old_col && blueBatters[bluebi][1]==old_row){
						isBatter = true; batter_id = bluebi; break;								
					}
				}
				for (bluepi=0;bluepi<6;bluepi++){
					if (bluePitchers[bluepi][0]==col && bluePitchers[bluepi][1]==row){
						lastspot = false; break;
					}
				}
				if (lastspot && isBatter){
					updateCell([old_col,old_row],['','black']);
					updateCell([col,row],['B','blue']);
					blueBatters[batter_id]=[col,row];
					clearBorders();
					turnRed(turn_spot);
					if (turn_spot[1]<2){turn_spot[1]++;}
					else{turn_spot[1]=0;turn_spot[0]='Pitcher';}

				}
			}
			
		}
		else if (old_col>-1 && old_row >-1){
			clearBorders();
		}
		else{
			var sci = 0;
			var isPitcher = false; var isBatter = false;
			if (turn_spot[0]=='Pitcher'){
				if (bluePitchers[turn_spot[2]][0]==col && bluePitchers[turn_spot[2]][1]==row){isPitcher = true;}
				if (bluePitchers[turn_spot[3]][0]==col && bluePitchers[turn_spot[3]][1]==row){isPitcher = true;}
			}

			for (sci=0;sci<blueBatters.length;sci++){
				if (blueBatters[sci][0]==col && blueBatters[sci][1]==row){isBatter = true;}
			}

			if (isPitcher){
				document.getElementById('cell'+col.toString()+row.toString()).style.border='solid 3px';
				old_col=col;
				old_row = row;
			}
			if (isBatter && turn_spot[0]=='Batter'){
				document.getElementById('cell'+col.toString()+row.toString()).style.border='solid 3px';
				old_col=col;
				old_row = row;
			}


		}
		end_pitches = [];

	});
}


function resetBoard(){
	redPitchers = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]];
	redBatters = [[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1]];
	bluePitchers = [[0,7],[1,7],[2,7],[3,7],[4,7],[5,7]];
	blueBatters = [[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6]];
	for (i=0;i<6;i++){
		updateCell(redPitchers[i],[(i+1).toString(),'red']);
		updateCell(bluePitchers[i],[(i+1).toString(),'blue']);
	}
	for (i=0;i<8;i++){
		updateCell(redBatters[i],['B','red']);
		updateCell(blueBatters[i],['B','blue']);
	}

	for (i=0;i<8;i++){
		for (ii=0;ii<8;ii++){
			setClicker(i,ii);
		}
	}



}
function pitchComputer(chgfb,pitcher_id,pitchers_avoid,batters_kill){
	var old_col = redPitchers[pitcher_id][0]; var old_row = redPitchers[pitcher_id][1];

	var pitch_i = 0; var temp_col; var temp_row;
	if (old_col+chgfb[chgfb.length-1][0]>=0 && old_col+chgfb[chgfb.length-1][0]<=7 && old_row+chgfb[chgfb.length-1][1]>=0 && old_row+chgfb[chgfb.length-1][1]<=7){
		var canpitch = true;
		var lastspot = true;
		var pitchers_avoided = 0;

		temp_col= old_col+chgfb[chgfb.length-1][0];
		temp_row = old_row+chgfb[chgfb.length-1][1];
		var bluepi = 0; var redbi; var redpi;

		for (bluepi=0;bluepi<6;bluepi++){
			if (bluePitchers[bluepi][0]==temp_col && bluePitchers[bluepi][1]==temp_row){
				lastspot = false; break;
			}
		}
		for (redbi=0;redbi<redBatters.length;redbi++){
			if (redBatters[redbi][0]==temp_col && redBatters[redbi][1]==temp_row){
				lastspot = false; break;								
			}
		}
		for (redpi=0;redpi<6;redpi++){
			if (redPitchers[redpi][0]==temp_col && redPitchers[redpi][1]==temp_row){
				lastspot = false; break;
			}
		}


		for (pitch_i=0;pitch_i<chgfb.length;pitch_i++){
			temp_col= old_col+chgfb[pitch_i][0];
			temp_row = old_row+chgfb[pitch_i][1];
			var bluepi = 0;
			for (bluepi=0;bluepi<6;bluepi++){
				if (bluePitchers[bluepi][0]==temp_col && bluePitchers[bluepi][1]==temp_row){
					pitchers_avoided +=1; break;
				}
			}

		}

		if (pitchers_avoided>pitchers_avoid || !lastspot){canpitch = false;}
		
		if (canpitch){
			var rb =  [];
			for (pitch_i=0;pitch_i<chgfb.length;pitch_i++){
				temp_col= old_col+chgfb[pitch_i][0];
				temp_row = old_row+chgfb[pitch_i][1];
				
				var bluebi = 0;
				for (bluebi=0;bluebi<blueBatters.length;bluebi++){
					if (blueBatters[bluebi][0]==temp_col && blueBatters[bluebi][1]==temp_row){
						rb.push([temp_col,temp_row,bluebi]); break;						
					}
				}
			}
			temp_col= old_col+chgfb[chgfb.length-1][0];
			temp_row = old_row+chgfb[chgfb.length-1][1];
			var base_arr = [temp_col,temp_row,[pitcher_id+1,'red']];
			var rbi = 0;
			for (rbi=0;rbi<rb.length;rbi++){
				base_arr.push(rb[rbi]);
			}
			comp_pitches.push(base_arr);
		}
	}
}

function pitchBlocks(chgfb,pitcher_id,pitchers_avoid,batters_kill){

	var pitch_i = 0; var temp_col; var temp_row;
	if (old_col+chgfb[chgfb.length-1][0]>=0 && old_col+chgfb[chgfb.length-1][0]<=7 && old_row+chgfb[chgfb.length-1][1]>=0 && old_row+chgfb[chgfb.length-1][1]<=7){
		var canpitch = true;
		var lastspot = true;
		var pitchers_avoided = 0;

		temp_col= old_col+chgfb[chgfb.length-1][0];
		temp_row = old_row+chgfb[chgfb.length-1][1];
		var redpi = 0; var bluebi; var bluepi;

		for (redpi=0;redpi<6;redpi++){
			if (redPitchers[redpi][0]==temp_col && redPitchers[redpi][1]==temp_row){
				lastspot = false; break;
			}
		}
		for (bluebi=0;bluebi<blueBatters.length;bluebi++){
			if (blueBatters[bluebi][0]==temp_col && blueBatters[bluebi][1]==temp_row){
				lastspot = false; break;								
			}
		}
		for (bluepi=0;bluepi<6;bluepi++){
			if (bluePitchers[bluepi][0]==temp_col && bluePitchers[bluepi][1]==temp_row){
				lastspot = false; break;
			}
		}


		for (pitch_i=0;pitch_i<chgfb.length;pitch_i++){
			temp_col= old_col+chgfb[pitch_i][0];
			temp_row = old_row+chgfb[pitch_i][1];
			var redpi = 0;
			for (redpi=0;redpi<6;redpi++){
				if (redPitchers[redpi][0]==temp_col && redPitchers[redpi][1]==temp_row){
					pitchers_avoided +=1; break;
				}
			}

		}

		if (pitchers_avoided>pitchers_avoid || !lastspot){canpitch = false;}
		
		if (canpitch){
			var rb =  [];
			for (pitch_i=0;pitch_i<chgfb.length;pitch_i++){
				temp_col= old_col+chgfb[pitch_i][0];
				temp_row = old_row+chgfb[pitch_i][1];
				
				document.getElementById('cell'+temp_col.toString()+temp_row.toString()).style.border='solid 3px';
				var redbi = 0;
				for (redbi=0;redbi<redBatters.length;redbi++){
					if (redBatters[redbi][0]==temp_col && redBatters[redbi][1]==temp_row){
						rb.push([temp_col,temp_row,redbi]); break;						
					}
				}
			}
			temp_col= old_col+chgfb[chgfb.length-1][0];
			temp_row = old_row+chgfb[chgfb.length-1][1];
			var base_arr = [temp_col,temp_row,[pitcher_id+1,'blue']];
			var rbi = 0;
			for (rbi=0;rbi<rb.length;rbi++){
				base_arr.push(rb[rbi]);
			}
			end_pitches.push(base_arr);
		}
	}
}


function rotatePitch(base_pitch,rot_type){
	var bpi = 0; var pitch_90 = []; var pitch_180 = []; var pitch_270 = [];
	if (rot_type==1){
		for (bpi=0;bpi<base_pitch.length;bpi++){
			pitch_90.push([base_pitch[bpi][1]*-1,base_pitch[bpi][0]]);
		}
		return pitch_90;
	}
	else if (rot_type==2){
		for (bpi=0;bpi<base_pitch.length;bpi++){
			pitch_180.push([base_pitch[bpi][0]*-1,base_pitch[bpi][1]*-1]);
		}
		return pitch_180;
	}
	else if (rot_type==3){
		for (bpi=0;bpi<base_pitch.length;bpi++){
			pitch_270.push([base_pitch[bpi][1],base_pitch[bpi][0]*-1]);
		}
		return pitch_270;
	}
	return base_pitch;
}
function createPitches(fb_array,pitchers_avoid,batters_kill,team_side){

	if (old_col >-1 && old_row >-1){
		end_pitches = [];
		
		var sci = 0;
		var isPitcher = false;
		var pitcher_id = -1;
		var isBatter = false;
		var batter_id = -1;
		if (team_side=='blue'){
			for (sci=0;sci<6;sci++){
				if (bluePitchers[sci][0]==old_col && bluePitchers[sci][1]==old_row){isPitcher = true;pitcher_id = sci; break;}
			}
			for (sci=0;sci<blueBatters.length;sci++){
				if (blueBatters[sci][0]==old_col && blueBatters[sci][1]==old_row){isBatter = true;batter_id = sci; break;}
			}
		}
		else{
			isPitcher = true; pitcher_id = team_side;
		}
		if (isPitcher){
			for (fb_type=0;fb_type<fb_array.length;fb_type++){
				var chgfb = fb_array[fb_type];
				if (team_side=='blue'){

					pitchBlocks(chgfb,pitcher_id,pitchers_avoid,batters_kill);
				}
				else{
					pitchComputer(chgfb,pitcher_id,pitchers_avoid,batters_kill);
				}
			}
		}
	}
}



function fastball(team_side){
	var fb_array = [];
	var base_pitch = [[0,1],[0,2],[0,3],[0,4],[-1,4]];
	fb_array.push(base_pitch);
	fb_array.push(rotatePitch(base_pitch,1));
	fb_array.push(rotatePitch(base_pitch,2));
	fb_array.push(rotatePitch(base_pitch,3));
	base_pitch = [[0,1],[0,2],[0,3],[0,4],[0,5]];
	fb_array.push(base_pitch);
	fb_array.push(rotatePitch(base_pitch,1));
	fb_array.push(rotatePitch(base_pitch,2));
	fb_array.push(rotatePitch(base_pitch,3));

	createPitches(fb_array,0,-1,team_side);
}

function curve(team_side){
	var fb_array = [];
	var base_pitch = [[0,1],[0,2],[1,2],[2,2]];
	fb_array.push(base_pitch);
	fb_array.push(rotatePitch(base_pitch,1));
	fb_array.push(rotatePitch(base_pitch,2));
	fb_array.push(rotatePitch(base_pitch,3));

	createPitches(fb_array,1,-1,team_side);

}
function slider(team_side){
	var fb_array = [];
	var base_pitch = [[0,1],[0,2],[0,3],[1,4],[2,5]];
	fb_array.push(base_pitch);
	fb_array.push(rotatePitch(base_pitch,1));
	fb_array.push(rotatePitch(base_pitch,2));
	fb_array.push(rotatePitch(base_pitch,3));
	base_pitch = [[0,1],[0,2],[1,3],[2,4]];
	fb_array.push(base_pitch);
	fb_array.push(rotatePitch(base_pitch,1));
	fb_array.push(rotatePitch(base_pitch,2));
	fb_array.push(rotatePitch(base_pitch,3));

	createPitches(fb_array,0,-1,team_side);

}
function change(team_side){
	var fb_array = [];
	var base_pitch = [[0,1],[0,2],[0,3],[-1,4]];
	fb_array.push(base_pitch);
	fb_array.push(rotatePitch(base_pitch,1));
	fb_array.push(rotatePitch(base_pitch,2));
	fb_array.push(rotatePitch(base_pitch,3));

	createPitches(fb_array,1,1,team_side);

}








resetBoard();