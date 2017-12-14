function wobaToSalary(pBB,p1B,p2B,p3B,pHR){
	var wOBA = .69*pBB+.89*p1B+1.27*p2B+1.62*p3B+2.1*pHR;
	var wRAA = (wOBA-.314)/1.277;
	return (wRAA+20.5/600.)*680.0;
}

function fipToSalary(pBB,pK,pHR,IP){
	var p1B=(42000.-8200.-770.0-4660.)/(166000.-36700.-4660.)*(1-pBB-pK-pHR);
	var p2B=(8200.)/(166000.-36700.-4660.)*(1-pBB-pK-pHR);
	var p3B=(770.0)/(166000.-36700.-4660.)*(1-pBB-pK-pHR);
	var wOBA = .69*pBB+.89*p1B+1.27*p2B+1.62*p3B+2.1*pHR;
	var wRAA = (wOBA-.314)/1.277;
	return (wRAA-20.5/600.0)*IP;	
}

function atbatResult(pos_id){

	var pBB = parseFloat(document.getElementById('bb'+pos_id.toString()).value);
	var p1B = parseFloat(document.getElementById('1b'+pos_id.toString()).value);
	var p2B = parseFloat(document.getElementById('2b'+pos_id.toString()).value);
	var p3B = parseFloat(document.getElementById('3b'+pos_id.toString()).value);
	var pHR = parseFloat(document.getElementById('hr'+pos_id.toString()).value);

	matchupProbs = {'walk':pBB,'single':p1B,'double':p2B,'triple':p3B,'homer':pHR};

	var x = Math.random();
	var sum_x = 0.;
	for (var key in matchupProbs){
		if (!matchupProbs.hasOwnProperty(key)){ continue; }
		sum_x +=matchupProbs[key];
		if (x<sum_x){return key;}
	}
	return 'out';
}

function updateSalary(pos_id){
	var pBB = parseFloat(document.getElementById('bb'+pos_id.toString()).value);
	var p1B = parseFloat(document.getElementById('1b'+pos_id.toString()).value);
	var p2B = parseFloat(document.getElementById('2b'+pos_id.toString()).value);
	var p3B = parseFloat(document.getElementById('3b'+pos_id.toString()).value);
	var pHR = parseFloat(document.getElementById('hr'+pos_id.toString()).value);
	document.getElementById('salary'+pos_id.toString()).innerHTML = wobaToSalary(pBB,p1B,p2B,p3B,pHR);
}

function simInning(batter_spot){
	var outs = 0; var runs = 0; var runners = [0,0,0]; var x;
	while (outs<3){
		abres = atbatResult(batter_spot);
		if (abres=='out'){
			x = Math.random();
			if (x<.15){
				runs+=runners[2];
				runners[2]=runners[1];
				runners[1]=runners[0];
				runners[0]=0;
			}

			outs++;
		}
		if (abres=='walk'){
			if (runners[2]==1 && runners[1]==1 && runners[0]==1){
				runs++;
			}
			else if (runners[1]==1 && runners[0]==1){
				runners[2]=1;
				runners[1]=1;
			}
			else if (runners[0]==1){
				runners[1]=1;
				runners[0]=0;
			}
			runners[0]=1;
		}
		if (abres=='single'){
			if (runners[2]==1){
				runs++;
				runners[2]=0;
			}
			if (runners[1]==1 && runners[0]==1){
				x = Math.random();
				if (x<25./89.4){
					runs++;
					runners[2]=1;
					runners[1]=0;
					runners[0]=0;
				}
				else if (x<88.13/89.4){
					runners[2]=1;
					runners[1]=1;
					runners[0]=0;
				}
				else{
					outs++;
					runners[2]=1;
					runners[1]=0;
					runners[0]=0;
				}
			}
			else{
				if (runners[1]==1){
					x = Math.random();
					if (x<31.34/52.69){
						runs++;
						runners[2]=0;
						runners[1]=0;
					}
					else if (x<50.5/52.69){
						runners[2]=1;
						runners[1]=0;
					}
					else{
						outs++;
						runners[1]=0;
					}
				}
				if (runners[0]==1){
					x = Math.random();
					if (x<25./89.4){
						runners[2]=1;
						runners[1]=0;
						runners[0]=0;
					}
					else if (x<88.13/89.4){
						runners[1]=1;
						runners[0]=0;
					}
					else{
						outs++;
						runners[0]=0;
					}
				}
			}
			runners[0]=1;
		}
		if (abres=='double'){
			if (runners[2]==1){
				runs++;
				runners[2]=0;
			}
			if (runners[1]==1){
				runs++;
				runners[1]=0;
			}
			if (runners[0]==1){
				x = Math.random();
				if (x<10.07/24.76){
					runs++;
					runners[0]=0;
				}
				else if (x<24.18/24.76){
					runners[2]=1;
					runners[0]=0;
				}
				else{
					outs++;
					runners[0]=0;
				}
			}
			runners[1]=1;
		}
		if (abres=='triple'){
			if (runners[2]==1){
				runs++;
				runners[2]=0;
			}
			if (runners[1]==1){
				runs++;
				runners[1]=0;
			}
			if (runners[0]==1){
				runs++;
				runners[0]=0;
			}
			runners[2]=1;
		}
		if (abres=='homer'){
			runs+=runners[0]+runners[1]+runners[2]+1;
			runners = [0,0,0];
		}
		if (batter_spot==9){batter_spot = 1;}
		else{batter_spot++;}
	}
	return [runs,batter_spot];

}
function simGame(){
	var inning = 1;
	var outs = 0;
	var runners = [0,0,0];
	var batter_spot = 1;
	var runs = 0;
	var innres; var i = 0;
	for (i=0;i<9;i++){
		innres = simInning(batter_spot);
		runs += parseInt(innres[0]);
		batter_spot = parseInt(innres[1]);
	}
	return runs;


}

function simSeason(){
	var tot_runs = 0;
	for (ii=0;ii<1000;ii++){
		var i = 0;
		var runs = 0;
		for (i=0;i<162;i++){
			runs += simGame();
		}
		tot_runs += runs/162.;
	}
	console.log(tot_runs/1000*162);
}

for (pos_id=1;pos_id<10;pos_id++){
document.getElementById('bb'+pos_id.toString()).value=16.0/185.0;
document.getElementById('1b'+pos_id.toString()).value=29.0/185.0;
document.getElementById('2b'+pos_id.toString()).value=8.0/185.0;
document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
document.getElementById('hr'+pos_id.toString()).value=4.5/185.0;

document.getElementById('bb'+pos_id.toString()).value=16.0/185.0;
document.getElementById('1b'+pos_id.toString()).value=28.88/185.0;
document.getElementById('2b'+pos_id.toString()).value=7.7/185.0;
document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
document.getElementById('hr'+pos_id.toString()).value=4.2/185.0;

document.getElementById('bb'+pos_id.toString()).value=13.0/185.0;
document.getElementById('1b'+pos_id.toString()).value=26.0/185.0;
document.getElementById('2b'+pos_id.toString()).value=6.2/185.0;
document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
document.getElementById('hr'+pos_id.toString()).value=4.0/185.0;

document.getElementById('bb'+pos_id.toString()).value=19.0/185.0;
document.getElementById('1b'+pos_id.toString()).value=31.7/185.0;
document.getElementById('2b'+pos_id.toString()).value=8.25/185.0;
document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
document.getElementById('hr'+pos_id.toString()).value=5.0/185.0;





if (pos_id>9){
	document.getElementById('bb'+pos_id.toString()).value=19.0/185.0;
	document.getElementById('1b'+pos_id.toString()).value=32.0/185.0;
	document.getElementById('2b'+pos_id.toString()).value=10.0/185.0;
	document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
	document.getElementById('hr'+pos_id.toString()).value=5.0/185.0;

	document.getElementById('bb'+pos_id.toString()).value=15.0/185.0;
	document.getElementById('1b'+pos_id.toString()).value=28.0/185.0;
	document.getElementById('2b'+pos_id.toString()).value=7.7/185.0;
	document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
	document.getElementById('hr'+pos_id.toString()).value=4.25/185.0;

	document.getElementById('bb'+pos_id.toString()).value=18.5/185.0;
	document.getElementById('1b'+pos_id.toString()).value=31.5/185.0;
	document.getElementById('2b'+pos_id.toString()).value=9.5/185.0;
	document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
	document.getElementById('hr'+pos_id.toString()).value=4.75/185.0;

}
if (pos_id>9){
	document.getElementById('bb'+pos_id.toString()).value=10.0/185.0;
	document.getElementById('1b'+pos_id.toString()).value=20.0/185.0;
	document.getElementById('2b'+pos_id.toString()).value=3.0/185.0;
	document.getElementById('3b'+pos_id.toString()).value=.5/185.0;
	document.getElementById('hr'+pos_id.toString()).value=2.0/185.0;

	document.getElementById('bb'+pos_id.toString()).value=20.85/185.0;
	document.getElementById('1b'+pos_id.toString()).value=33.85/185.0;
	document.getElementById('2b'+pos_id.toString()).value=10.75/185.0;
	document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
	document.getElementById('hr'+pos_id.toString()).value=5.25/185.0;

	document.getElementById('bb'+pos_id.toString()).value=29.0/185.0;
	document.getElementById('1b'+pos_id.toString()).value=41.0/185.0;
	document.getElementById('2b'+pos_id.toString()).value=15.0/185.0;
	document.getElementById('3b'+pos_id.toString()).value=1.0/185.0;
	document.getElementById('hr'+pos_id.toString()).value=7.0/185.0;



}
}
