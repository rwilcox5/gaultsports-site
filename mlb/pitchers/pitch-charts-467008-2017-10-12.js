var allpitches = [110,42,35,-0.5964936468301272,2.5629220162891198,91.1,311,55,62,1.367297417208204,3.508816451142756,85.9,311,78,73,1.291729944978156,5.2728584388873365,85.7,110,55,42,-0.21822881814522718,6.8964649647498355,89.6,311,90,100,3.04002264041802,-0.7635720327720732,84.0,300,77,100,2.0795832439643522,1.724051800529784,85.0,111,52,50,-1.526380604768712,4.989097478311428,89.4,110,42,48,-1.5005352214084682,5.362579043049732,89.8,111,71,18,-3.54948029910018,13.402098093931919,95.9,311,39,27,5.208121643455548,1.601723981015688,84.4,100,65,100,-2.140451182269888,15.48445551288432,95.4,111,72,50,-0.01313885634295452,5.406257676369564,90.1,100,0,84,-6.889355436662868,11.703261282925165,96.5,100,100,100,-2.000963738380452,7.510827115478939,91.9,111,7,43,-13.274849288143919,9.124330361991191,95.6,100,79,88,-5.8120774009057925,10.443070964340949,95.5];
var allabs = [0,3,572191,5,3,2,594694,6,7,2,607208,6,10,14,150029,6,16,0,0,0];
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