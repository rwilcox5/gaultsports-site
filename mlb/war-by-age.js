


function getGames(year0,year1,cyear0,cyear1){
	allratings1= [[4.365708202789505, 1.1892479521392618], [7.043923209987054, 2.949750379105244], [18.136620416853148, 10.246227989391985], [26.990213749138103, 25.85186159715828], [33.95792758900164, 34.34624253041496], [43.52159870323106, 47.82611706215948], [53.05986669408587, 60.435261288334665], [60.45580461369103, 62.38618187357612], [48.96875415824936, 53.14051475221408], [48.65665864250548, 45.81114673277062], [46.30142620392657, 34.406830126229906], [31.891806887875454, 31.24588869885545], [25.752718739037345, 22.297966334069613], [16.761222737005095, 15.896454067678071], [11.421728138192986, 16.234013530075682], [11.051568340450238, 8.695185536529129], [5.023770065443283, 9.39627057381646], [3.4838569199317737, 4.194392704561037], [1.3439461937653479, 4.043789252106717], [0.7124971270277134, 1.6324029386715049], [0.6979810565279976, 4.585615466109032]];
  allratings2= [[1.8467119168326778, 5.601251744501088], [6.05559224569743, 9.93911743142915], [14.277502785488789, 17.767232621858692], [24.071370779590506, 27.344630262780402], [34.61419764497283, 35.100124315192396], [44.5975917343271, 43.82242191495282], [50.11739331957489, 49.26720559681685], [52.45514127477512, 48.29056216244687], [49.112749346485145, 45.13237419843035], [46.87151570673193, 40.98465393394524], [40.972272760352126, 35.55511514746657], [34.89916783644873, 30.239081536629993], [28.166613285429, 25.012022678860724], [22.338004807813952, 20.446730870774537], [16.583046871321137, 15.895852418325484], [12.401700364302629, 11.919845111862886], [8.208678738480053, 9.762831004791051], [5.2970986940601295, 6.244170559889565], [2.864782276546983, 5.231909506300988], [1.8669487894263892, 3.5916973527932097], [1.7821095927835309, 7.166209550788364]]; 
  createBG(allratings1,allratings2);
}

function runRating(){
  year0 = document.getElementById('year0').value;
  year1 = document.getElementById('year1').value;
  cyear0 = document.getElementById('cyear0').value;
  cyear1 = document.getElementById('cyear1').value;
  _getData(year0,year1,cyear0,cyear1);
  allratings1 = []; allratings2 = [];
  for (i=0;i<21;i++){allratings1.push([_sendAge(i+20,0),_sendAge(i+20,1)]); allratings2.push([_sendAge(i+20,2),_sendAge(i+20,3)]);};
  document.getElementById('canvas_spot').innerHTML = '<canvas id="pop_canvas" width="600" height="600" style="position:relative; border: 0px;"></canvas>';
  pop_canvas = document.getElementById('pop_canvas');
  createBG(allratings1,allratings2);

}
