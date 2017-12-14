statepop = {'CO':0,'AL':0,'CA':0,'FL':0,'PA':0,'VT':0,'NE':0,'OH':0,'AR':0,'GA':0,'MI':0,'MA':0,'OK':0,'NC':0,'IL':0,'TX':0,'WA':0,'MO':0,'AZ':0,'NJ':0,'WI':0,'IN':0,'LA':0,'UT':0,'NM':0,'KY':0,'MD':0,'KS':0,'WV':0,'NY':0,'HI':0,'SC':0,'OR':0,'SD':0,'TN':0,'MS':0,'VA':0,'ME':0,'CT':0,'RI':0,'DC':0,'NV':0,'MN':0,'IA':0,'DE':0,'MT':0,'AK':0,'NH':0,'ND':0,'WY':0,'ID':0};
statetops = {'CO':[],'AL':[],'CA':[],'FL':[],'PA':[],'VT':[],'NE':[],'OH':[],'AR':[],'GA':[],'MI':[],'MA':[],'OK':[],'NC':[],'IL':[],'TX':[],'WA':[],'MO':[],'AZ':[],'NJ':[],'WI':[],'IN':[],'LA':[],'UT':[],'NM':[],'KY':[],'MD':[],'KS':[],'WV':[],'NY':[],'HI':[],'SC':[],'OR':[],'SD':[],'TN':[],'MS':[],'VA':[],'ME':[],'CT':[],'RI':[],'DC':[],'NV':[],'MN':[],'IA':[],'DE':[],'MT':[],'AK':[],'NH':[],'ND':[],'WY':[],'ID':[]};

var statepopmax;
var i =0;
var years_born = document.getElementById('slider_born');
var years_play = document.getElementById('slider_play');

noUiSlider.create(years_born, {
	start: [1920, 2000],
	connect: true,
	behaviour: 'drag-fixed',
	step: 1,
	range: {
		'min': 1850,
		'max': 2020
	}
});

noUiSlider.create(years_play, {
	start: [1950, 1960],
	connect: true,
	behaviour: 'drag-fixed',
	step: 1,
	range: {
		'min': 1900,
		'max': 2020
	}
});

years_born.noUiSlider.on('update', function( values, handle ) {
	if (parseInt(document.getElementById('start_year_born').value) != parseInt(values[0]) || parseInt(document.getElementById('end_year_born').value) != parseInt(values[1])){

		document.getElementById('start_year_born').value = parseInt(values[0]);
		document.getElementById('end_year_born').value = parseInt(values[1]);
		updateYears(true);
	}
});

years_play.noUiSlider.on('update', function( values, handle ) {
	if (parseInt(document.getElementById('start_year').value) != parseInt(values[0]) || parseInt(document.getElementById('end_year').value) != parseInt(values[1])){

		document.getElementById('start_year').value = parseInt(values[0]);
		document.getElementById('end_year').value = parseInt(values[1]);
		updateYears(false);
	}
});

function updateYears(born){

	for ( var abbrev in statepop ){
		statepop[abbrev]=0;
		statetops[abbrev]=[];
	}
	if (!born){
		var start_year = parseInt(document.getElementById('start_year').value);
		var end_year = parseInt(document.getElementById('end_year').value);
		var i;
		for (i=start_year-1800;i<=end_year-1800;i++){
			for ( var abbrev in statepop ){
				statepop[abbrev]+=mlbplayyears[i][abbrev];
				
			}	
		}

		for (i=0;i<topplayers.length;i++){
			if (topplayers[i][5]<=end_year && topplayers[i][6]>=start_year){
				if (statetops[topplayers[i][2]].length<5){statetops[topplayers[i][2]].push({'name':topplayers[i][0],'value':topplayers[i][4]});}
				else{
					if (topplayers[i][4]>statetops[topplayers[i][2]][4].value){
						statetops[topplayers[i][2]][4]={'name':topplayers[i][0],'value':topplayers[i][4]};
					}
					statetops[topplayers[i][2]].sort(function (a, b) {  return b.value - a.value;});
					if (topplayers[i][2]=='AL'){
						console.log(topplayers[i],statetops[topplayers[i][2]]);
					}
				}
				
			}
		}
	}
	else{
		var start_year_born = parseInt(document.getElementById('start_year_born').value);
		var end_year_born = parseInt(document.getElementById('end_year_born').value);

		var i;
		for (i=start_year_born-1800;i<=end_year_born-1800;i++){
			for ( var abbrev in statepop ){
				statepop[abbrev]+=mlbbirthyears[i][abbrev];
			}	
		}

	}
	console.log('PA #:',statetops['PA'].length);

	var maxpop = 0;
	for ( var abbrev in statepop ){
		if (statepop[abbrev]>maxpop){
			maxpop = statepop[abbrev];
		}
	}
	statepopmax=maxpop;
	map_startRenderLoop();
}