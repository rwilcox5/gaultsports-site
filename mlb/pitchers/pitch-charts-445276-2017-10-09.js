var allpitches = [110,25,58,3.996469693125708,8.76063091529352,92.7,100,100,8,1.7329429570689001,7.3891170895039675,93.0,110,73,16,0.635582885339772,6.715539078507012,92.9,111,48,0,3.0176864494580764,8.202682281090492,94.9,111,52,39,3.463140454857912,9.554463649785216,93.6,100,56,78,3.714441142000068,8.888732961660972,94.1,110,74,67,3.023020006728504,8.694490656853477,93.3,311,75,18,2.54300529382776,-3.459167654616924,82.0,110,82,43,2.135035531737132,7.63454959291866,95.0,100,100,35,3.6082726500469438,7.049659271868025,94.5,100,100,26,2.108862249136272,7.36873204406262,95.0,111,68,28,1.841843785465512,7.77609544823784,95.6,311,82,49,2.363086608740148,-2.835238405479708,82.5,111,100,54,0.7747542648122893,8.951413695186444,96.1,100,100,53,2.992061965042188,7.4431482522065995,96.2,111,100,61,2.766088264432404,7.696848282899303,95.0];
var allabs = [0,3,453923,9,4,20,444482,9,5,2,606466,9,8,3,502671,9,16,0,0,0];
var num_abs = 4;
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