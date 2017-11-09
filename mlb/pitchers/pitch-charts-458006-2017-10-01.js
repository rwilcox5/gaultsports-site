var allpitches = [110,81,33,-10.735595250608256,9.932716516210595,93.6,100,89,75,-11.827681766413308,10.126613610306709,94.6,311,80,48,4.699393727538084,6.4476163559647794,86.5,100,95,83,-12.78293695948956,6.494311556710968,94.1,111,48,48,-8.805323216280852,6.83172831925032,94.0,411,32,52,-7.524202394372496,2.708483826438588,84.5,300,3,51,3.449918136279528,4.853244165946836,86.0,311,88,64,0.12337751690933281,8.256323686000849,88.1,110,70,54,-10.59440872302588,6.423691840278204,93.7,111,16,67,-9.555107107088364,5.509864732635456,93.5,311,21,28,5.7139113847002125,3.466705812136596,85.6,100,99,67,-11.912935271157636,6.474966802367076,94.3,111,11,70,-10.582307162721563,4.215958637553264,94.3,111,48,64,-6.067874519560489,6.604768108984787,94.2,311,56,34,4.0191529611828,5.294922326311248,86.7,100,100,86,-11.241580008225144,7.337746105213428,94.6,110,76,67,-9.262357765934388,8.296353918910764,95.0,100,37,84,-5.755891512864036,9.953119112382156,94.6,111,54,23,-10.131007431203557,8.473525520242355,95.0];
var allabs = [0,20,607732,8,5,2,624428,8,6,3,607471,9,10,2,516782,9,14,3,446481,9,19,0,0,0];
var num_abs = 5;
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