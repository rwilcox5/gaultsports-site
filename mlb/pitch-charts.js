
function genRating(){
  window.location ="http://www.triplelog.com/mlb/pitch-charts.html?pid="+document.getElementById('pid').value+"&year="+document.getElementById('year').value+"&month="+document.getElementById('month').value+"&day="+document.getElementById('day').value;
}

function runRating(){

  document.getElementById('canvas_spot1').innerHTML = '<canvas id="pitch_canvas1" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('canvas_spot2').innerHTML = '<canvas id="pitch_canvas2" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('canvas_spot3').innerHTML = '<canvas id="pitch_canvas3" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('canvas_spot4').innerHTML = '<canvas id="pitch_canvas4" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('canvas_spot5').innerHTML = '<canvas id="pitch_canvas5" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('canvas_spot6').innerHTML = '<canvas id="pitch_canvas6" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('canvas_spot7').innerHTML = '<canvas id="pitch_canvas7" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('canvas_spot8').innerHTML = '<canvas id="pitch_canvas8" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('canvas_spot9').innerHTML = '<canvas id="pitch_canvas9" width="400" height="200" style="position:relative; border: 0px;"></canvas>';
  document.getElementById('data_spot').innerHTML = '<div style="display:none;"><canvas id="data_canvas" width="200" height="200" style="position:relative; border: 0px;"></canvas></div>';
  document.getElementById('gif_spot').innerHTML = '<div style="display:none;"><canvas id="gif_canvas" width="200" height="200" style="position:relative; border: 0px;"></canvas></div>';

  data_canvas = document.getElementById('data_canvas');
  gif_canvas = document.getElementById('gif_canvas');
  draw_data();


  getData();
  nabs = [0,sendInn(1),sendInn(2),sendInn(3),sendInn(4),sendInn(5),sendInn(6),sendInn(7),sendInn(8),sendInn(9)];


  for (pcn=1;pcn<10;pcn++){
    pitch_canvas = document.getElementById('pitch_canvas'+pcn.toString());
    pitch_canvas.addEventListener('click', map_click_gif, false);
    for (ri=nabs[pcn-1];ri<nabs[pcn];ri++){
      lenab = sendAb(ri);
      allpitchesu = [];
      batter_name = sendBatter(ri).toString();
      for (pabii=0;pabii<lenab;pabii++){
        pitch = sendAge(ri,pabii);
        allpitchesu.push([((pitch-pitch%100)/100)%10,((pitch-pitch%10)/10)%10,pitch%10,sendX(ri,pabii),sendY(ri,pabii),lenab]);
      }
      createBG(120,50+25*(ri-nabs[pcn-1]),allpitchesu,pitch_canvas,batter_name,pcn-1);
    }
  }
  

}
pitcher_ids = [450306,0,1,592662,1,4,456696,4,7,543331,7,8,607455,8,9,488748,9,10,611093,10,11,641838,11,12,573046,12,13,605177,13,17,543208,17,18,407822,18,22,607215,22,23,407845,23,25,570632,25,26,608331,26,27,435400,27,28,430661,28,29,595465,29,30,547749,30,31,592593,31,32,457915,32,33,462382,33,34,621345,34,35,623395,35,36,527055,36,37,605483,37,38,592332,38,39,502202,39,40,542960,40,41,605541,41,42,475054,42,43,458708,43,46,458690,46,47,501925,47,52,621397,52,56,502083,56,57,571476,57,58,605240,58,59,453192,59,64,543766,64,68,592102,68,73,543557,73,79,592547,79,80,407793,80,84,642239,84,85,608652,85,86,570240,86,87,593974,87,88,594992,88,89,596027,89,90,628452,90,91,112526,91,92,434671,92,93,543278,93,94,542953,94,95,608648,95,96,641729,96,97,622382,97,98,572403,98,99,584171,99,100,543521,100,102,582494,102,103,519443,103,104,472551,104,105,598264,105,106,501789,106,110,594056,110,111,642564,111,112,523260,112,115,461325,115,116,607536,116,117,548389,117,120,487675,120,121,656546,121,122,628317,122,128,623184,128,130,435221,130,131,622608,131,132,493603,132,133,621111,133,134,608032,134,136,451661,136,140,656427,140,141,658792,141,142,446399,142,143,605154,143,144,645261,144,145,448614,145,146,592815,146,147,592865,147,148,601713,148,149,592789,149,150,623167,150,151,641850,151,152,644364,152,153,606160,153,154,571948,154,155,621094,155,156,605441,156,157,430935,157,158,596043,158,159,622795,159,160,643320,160,161,501822,161,162,276351,162,163,595014,163,164,461829,164,167,643230,167,168,605795,168,169,430599,169,170,592127,170,171,605333,171,172,543699,172,173,650828,173,174,613534,174,175,596720,175,176,424144,176,179,458006,179,182,543339,182,183,502130,183,184,502004,184,185,456501,185,186,606131,186,187,621389,187,188,595345,188,189,518715,189,190,519326,190,191,657681,191,192,664208,192,193,592170,193,194,572020,194,195,623406,195,196,572021,196,197,623439,197,198,501625,198,199,596271,199,200,502028,200,201,656756,201,202,474463,202,203,476589,203,207,608601,207,208,593334,208,209,592130,209,210,572193,210,211,621294,211,212,532077,212,213,622663,213,217,643338,217,222,429722,222,223,502085,223,231,621244,231,232,592454,232,239,657610,239,240,573124,240,241,641427,241,242,279571,242,243,547973,243,249,425844,249,251,592351,251,252,542881,252,253,543734,253,254,450212,254,255,605151,255,258,459429,258,259,518813,259,260,434378,260,264,519242,264,266,606965,266,272,545348,272,274,434538,274,277,519144,277,279,605397,279,282,545333,282,284,543243,284,286,448802,286,287,476454,287,292,477132,292,296,592836,296,297,643327,297,298,453265,298,304,453344,304,312,642073,312,314,445276,314,322,572971,322,326,519141,326,327,605476,327,329,456034,329,331,593958,331,332,592665,332,335,502381,335,338,518886,338,340,571704,340,345,544931,345,347,543294,347,350,425492,350,354,605218,354,361,445213,361,364,451584,364,369,446372,369,371,282332,371,375,605182,375,377,448179,377,379,571561,379,383,452657,383,386,519301,386,389,467008,389,394,448281,394,397,547888,397,400,471911,400,401,450729,401,402,502748,402,406,621121,406,409,517593,409,410,450203,410,413,506433,413,415,500779,415,419,453286,419,421,453562,421,423,488846,423,428,458677,428,429,444468,429,432,622072,432,433];
pitcher_games = [2017,10,01,2017,10,01,2017,10,04,2017,10,07,2017,10,01,2017,10,06,2017,10,09,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,04,2017,10,06,2017,10,09,2017,10,01,2017,10,01,2017,10,04,2017,10,07,2017,10,09,2017,10,01,2017,10,01,2017,10,04,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,06,2017,10,09,2017,10,01,2017,10,01,2017,10,06,2017,10,08,2017,10,09,2017,10,11,2017,10,01,2017,10,06,2017,10,08,2017,10,09,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,05,2017,10,06,2017,10,08,2017,10,11,2017,10,01,2017,10,06,2017,10,09,2017,10,11,2017,10,01,2017,10,05,2017,10,06,2017,10,09,2017,10,11,2017,10,01,2017,10,07,2017,10,12,2017,10,14,2017,10,17,2017,10,19,2017,10,01,2017,10,01,2017,10,14,2017,10,15,2017,10,19,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,16,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,05,2017,10,16,2017,10,18,2017,10,01,2017,10,01,2017,10,01,2017,10,05,2017,10,08,2017,10,01,2017,10,01,2017,10,01,2017,10,17,2017,10,18,2017,10,01,2017,10,01,2017,10,01,2017,10,07,2017,10,09,2017,10,14,2017,10,18,2017,10,19,2017,10,01,2017,10,04,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,04,2017,10,01,2017,10,07,2017,10,15,2017,10,18,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,07,2017,10,12,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,07,2017,10,09,2017,10,01,2017,10,07,2017,10,12,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,05,2017,10,16,2017,10,21,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,01,2017,10,03,2017,10,09,2017,10,14,2017,10,20,2017,10,03,2017,10,06,2017,10,13,2017,10,17,2017,10,20,2017,10,03,2017,10,03,2017,10,06,2017,10,08,2017,10,11,2017,10,14,2017,10,17,2017,10,20,2017,10,21,2017,10,03,2017,10,03,2017,10,06,2017,10,09,2017,10,14,2017,10,16,2017,10,18,2017,10,21,2017,10,03,2017,10,03,2017,10,03,2017,10,03,2017,10,03,2017,10,06,2017,10,08,2017,10,11,2017,10,14,2017,10,17,2017,10,04,2017,10,09,2017,10,04,2017,10,04,2017,10,04,2017,10,04,2017,10,04,2017,10,07,2017,10,09,2017,10,04,2017,10,04,2017,10,05,2017,10,09,2017,10,14,2017,10,20,2017,10,05,2017,10,09,2017,10,05,2017,10,06,2017,10,08,2017,10,13,2017,10,17,2017,10,24,2017,10,05,2017,10,06,2017,10,05,2017,10,08,2017,10,18,2017,10,05,2017,10,09,2017,10,05,2017,10,08,2017,10,17,2017,10,05,2017,10,09,2017,10,05,2017,10,17,2017,10,05,2017,10,05,2017,10,06,2017,10,09,2017,10,16,2017,10,20,2017,10,06,2017,10,14,2017,10,19,2017,10,24,2017,10,06,2017,10,06,2017,10,06,2017,10,07,2017,10,14,2017,10,15,2017,10,17,2017,10,18,2017,10,06,2017,10,07,2017,10,09,2017,10,14,2017,10,15,2017,10,17,2017,10,19,2017,10,24,2017,10,06,2017,10,07,2017,10,06,2017,10,07,2017,10,09,2017,10,14,2017,10,15,2017,10,17,2017,10,19,2017,10,24,2017,10,06,2017,10,13,2017,10,18,2017,10,24,2017,10,06,2017,10,06,2017,10,08,2017,10,06,2017,10,08,2017,10,06,2017,10,06,2017,10,08,2017,10,09,2017,10,06,2017,10,08,2017,10,17,2017,10,06,2017,10,09,2017,10,06,2017,10,09,2017,10,13,2017,10,17,2017,10,20,2017,10,06,2017,10,11,2017,10,06,2017,10,12,2017,10,17,2017,10,06,2017,10,07,2017,10,11,2017,10,12,2017,10,06,2017,10,07,2017,10,09,2017,10,11,2017,10,12,2017,10,15,2017,10,17,2017,10,06,2017,10,09,2017,10,12,2017,10,06,2017,10,09,2017,10,11,2017,10,12,2017,10,18,2017,10,06,2017,10,11,2017,10,06,2017,10,11,2017,10,16,2017,10,21,2017,10,06,2017,10,09,2017,10,07,2017,10,15,2017,10,07,2017,10,09,2017,10,14,2017,10,18,2017,10,07,2017,10,11,2017,10,15,2017,10,07,2017,10,09,2017,10,12,2017,10,07,2017,10,09,2017,10,12,2017,10,15,2017,10,17,2017,10,07,2017,10,11,2017,10,12,2017,10,08,2017,10,13,2017,10,18,2017,10,08,2017,10,08,2017,10,08,2017,10,18,2017,10,20,2017,10,24,2017,10,08,2017,10,17,2017,10,21,2017,10,09,2017,10,09,2017,10,16,2017,10,21,2017,10,09,2017,10,17,2017,10,09,2017,10,12,2017,10,14,2017,10,19,2017,10,09,2017,10,12,2017,10,11,2017,10,18,2017,10,11,2017,10,12,2017,10,15,2017,10,18,2017,10,19,2017,10,11,2017,10,14,2017,10,17,2017,10,19,2017,10,18];
npitchers = 223;

function updateYear(pid){

  var startgame; var endgame; var years = []; var months = []; var days = []; var pitcher_index;
  for (i=0;i<npitchers;i++){if (pitcher_ids[3*i]==pid){startgame = pitcher_ids[3*i+1];endgame = pitcher_ids[3*i+2]; pitcher_index = i; break;}}
  for (i=startgame;i<endgame;i++){
    var notin = true;
    for (ii=0;ii<years.length;ii++){if (years[ii]==pitcher_games[i*3]){notin = false; break;}}
    if (notin) {years.push(pitcher_games[i*3]);}
    var year = years[0];
    notin = true;
    for (ii=0;ii<months.length;ii++){if (pitcher_games[i*3]==year){if (months[ii]==pitcher_games[i*3+1]){notin = false; break;}}}
    if (notin) {months.push(pitcher_games[i*3+1]);}
    var month = months[0];
    notin = true;
    for (ii=0;ii<days.length;ii++){if (pitcher_games[i*3]==year && pitcher_games[i*3+1]==month){if (days[ii]==pitcher_games[i*3+2]){notin = false; break;}}}
    if (notin) {days.push(pitcher_games[i*3+2]);}
  }
  document.getElementById('year').innerHTML = '';
  for (i=0;i<years.length;i++){
  document.getElementById('year')[i] = new Option(years[i], years[i]); 
  }
  document.getElementById('month').innerHTML = '';
  for (i=0;i<months.length;i++){
  document.getElementById('month')[i] = new Option('Oct', months[i]); 
  }
  document.getElementById('day').innerHTML = '';
  for (i=0;i<days.length;i++){
  document.getElementById('day')[i] = new Option(days[i], days[i]);
  }
  return pitcher_index;
}
function getMonthName(i){
  if (i==1){return 'Jan';}
  else if (i==2){return 'Feb';}
  else if (i==3){return 'Mar';}
  else if (i==4){return 'Apr';}
  else if (i==5){return 'May';}
  else if (i==6){return 'Jun';}
  else if (i==7){return 'Jul';}
  else if (i==8){return 'Aug';}
  else if (i==9){return 'Sep';}
  else if (i==10){return 'Oct';}
  else if (i==11){return 'Nov';}
  else if (i==12){return 'Dec';}
  else {return '';}
}
function updateMonth(year){
  var pid = document.getElementById('pid').value;
  var startgame; var endgame; var months = []; var days = []; var pitcher_index;
  for (i=0;i<npitchers;i++){if (pitcher_ids[3*i]==pid){startgame = pitcher_ids[3*i+1];endgame = pitcher_ids[3*i+2]; pitcher_index = i; break;}}
  for (i=startgame;i<endgame;i++){
    var notin = true;
    for (ii=0;ii<months.length;ii++){if (pitcher_games[i*3]==year){if (months[ii]==pitcher_games[i*3+1]){notin = false; break;}}}
    if (notin) {months.push(pitcher_games[i*3+1]);}
    var month = months[0];
    notin = true;
    for (ii=0;ii<days.length;ii++){if (pitcher_games[i*3]==year && pitcher_games[i*3+1]==month){if (days[ii]==pitcher_games[i*3+2]){notin = false; break;}}}
    if (notin) {days.push(pitcher_games[i*3+2]);}
  }
  document.getElementById('month').innerHTML = '';
  for (i=0;i<months.length;i++){
  document.getElementById('month')[i] = new Option(getMonthName(months[i]), months[i]); 
  }
  document.getElementById('day').innerHTML = '';
  for (i=0;i<days.length;i++){
  document.getElementById('day')[i] = new Option(days[i], days[i]);
  }
  return pitcher_index;
}

function updateDay(month){
  var pid = document.getElementById('pid').value;
  var year = document.getElementById('year').value;
  var startgame; var endgame; var years = []; var months = []; var days = []; var pitcher_index;
  for (i=0;i<npitchers;i++){if (pitcher_ids[3*i]==pid){startgame = pitcher_ids[3*i+1];endgame = pitcher_ids[3*i+2]; pitcher_index = i; break;}}
  for (i=startgame;i<endgame;i++){
    var notin = true;
    for (ii=0;ii<days.length;ii++){if (pitcher_games[i*3]==year && pitcher_games[i*3+1]==month){if (days[ii]==pitcher_games[i*3+2]){notin = false; break;}}}
    if (notin) {days.push(pitcher_games[i*3+2]);}
  }

  document.getElementById('day').innerHTML = '';
  for (i=0;i<days.length;i++){
  document.getElementById('day')[i]= new Option(days[i], days[i]);
  }

  return pitcher_index;
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


function setSelect(){
  var input_ids = document.getElementById("pid");

// Show label but insert value into the input:
new Awesomplete(input_ids, {
  autoFirst: true,
  list: [
    { label: "Kershaw", value: pitcher_ids[0] },
    { label: "Smoltz", value: pitcher_ids[3] },
    { label: "Smotzie", value: pitcher_ids[6] }
  ]
});

  pid = getQueryVariable('pid');
    year = getQueryVariable('year');
    month = getQueryVariable('month');
    day = getQueryVariable('day');
    if (pid != 0){sel_Index = updateYear(pid); console.log(sel_Index); document.getElementById('pid').selectedIndex=sel_Index;}
}

