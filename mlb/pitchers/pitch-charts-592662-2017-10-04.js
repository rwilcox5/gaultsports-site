var allpitches = [100,23,100,110,60,38,110,15,78,111,41,33,311,31,75,100,20,9,111,56,7,311,30,50,311,5,100,311,21,76,300,0,100,111,79,26,311,13,100,210,89,25,311,29,66,100,5,3,311,12,68,111,54,0,111,78,29,211,25,95,311,42,90,311,22,92,311,53,31,100,100,100,311,47,91,311,88,57,311,75,38,110,47,68,311,56,62,310,69,52,300,53,100,100,100,12,111,68,7,111,84,0];
var allabs = [0,592662,518934,5,7,592662,471865,5,13,592662,571448,5,19,592662,596115,6,21,592662,467827,6,23,592662,448602,6,27,592662,518960,7,29,592662,435622,7,34,0,0,0];
var num_abs = 8;
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
        return allpitches[(firstp+ii)*3];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+2];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}