var allpitches = [311,69,78,1.2856119128225372,4.000364720298547,87.6,300,100,77,0.6140093394488926,2.359808265907768,88.0,111,51,46,-5.551359136498179,7.637143844472323,96.0,110,46,41,-6.4114554240791835,6.780959466580044,96.1,100,94,34,-4.2474462464952225,8.107002704822214,95.2,111,59,52,-6.072174520418919,7.871283717346142,95.4,111,61,42,-6.039667451992724,8.883610408589357,96.4,311,100,41,0.16312679575798722,1.1593410870473362,86.5,110,80,83,-7.962023389029586,7.466551214986543,95.8,300,94,65,0.5841508250122245,2.0883284460057165,85.2,111,53,75,-3.114603218478887,8.03137447420507,94.8,111,84,46,-8.779291560044477,6.427294103388766,96.4];
var allabs = [0,3,542979,9,4,2,542908,9,8,3,450641,9,12,0,0,0];
var num_abs = 3;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*4;returnabs[2*iii+1]=i*4+4;for (iiii=allabs[i*4+3];iiii<30;iiii++){        nabsc[iiii]+=1;}
iii++;}}}
return iii;}
function sendAb(i){
return allabs[returnabs[2*i+1]]-allabs[returnabs[2*i]];
}
function sendAge(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+2];
}
function sendXM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+3];
}
function sendYM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+4];
}
function sendVel(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+5];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendEvent(i){var abn = returnabs[2*i]; return allabs[abn+1];}