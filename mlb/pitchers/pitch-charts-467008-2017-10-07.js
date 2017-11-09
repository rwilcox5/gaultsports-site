var allpitches = [100,9,1,-3.763130111443253,9.015932975008118,96.4,311,76,50,-0.33908264067547306,-0.1908108377684404,84.7,111,59,85,0.5264252780219782,5.2169103245496835,89.9,100,78,70,-2.6547892125686325,5.060329321574355,91.3,311,47,64,2.5723744281427443,3.253020161399796,85.6,110,66,28,-8.213996984376399,6.433309614018759,95.6,100,100,100,-1.9985534985401643,5.014960977195593,91.6,100,72,83,0.850000893309525,5.427057193053553,90.2,100,0,0,-7.9298396803770075,10.177823678472354,96.9,111,30,58,-10.296005863464794,9.591545515936428,95.5];
var allabs = [0,2,475582,7,2,2,150029,7,5,16,446308,7,7,2,572191,7,10,0,0,0];
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