var allpitches = [300,82,43,0.10486520315969608,-0.9940982045078901,87.4,100,87,0,-6.5207334102607035,8.402060378236278,95.7,111,61,75,-11.147524447328445,2.184202554098862,95.5,111,44,80,-11.964100051489606,4.170618588129595,97.0,100,78,50,-11.055196684814714,5.684572184060447,96.9,111,0,27,-10.256063818790345,7.835372046194795,96.8,311,56,77,-0.38039592406878964,-0.5453345216638453,88.7,311,66,81,-0.20936856040797322,-2.206921560053835,86.8,110,73,61,-8.868336031727797,5.454134848597796,95.6,311,27,70,-0.49899266560254746,-0.8050715353179242,88.1,111,61,82,-9.747033903884716,5.297943461993253,96.0];
var allabs = [0,2,641432,9,4,3,607387,9,8,21,594838,9,10,2,592592,9,11,0,0,0];
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