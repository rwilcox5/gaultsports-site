var allpitches = [100,57,100,0.9977856228839034,9.677919353356327,91.9,111,76,20,2.5616255000869277,9.95026931948712,91.5,110,44,55,3.106632562544148,7.541631707276556,91.6,300,32,21,-2.5792187800795485,2.715338802677959,85.8,311,65,35,-3.366302944899946,3.2942768988136937,86.5,211,19,58,-6.090319566087073,-6.745911571101882,79.8,111,34,37,2.879234540735779,9.310207799712922,92.5,110,50,54,3.9864291338308417,7.264526223177175,92.5,310,50,21,-1.610994668229035,2.750992499830236,86.7,111,64,32,2.4793442934008874,9.510853217206105,95.0,311,67,54,-2.555584121061159,3.4448012184280747,85.7,100,5,33,0.9084457734236591,10.156392616991951,93.6,111,55,41,2.3607624267855476,10.94623393483576,91.4,111,47,74,3.4089142103064924,9.037414417134299,93.7,211,56,64,-5.311212317787198,-5.6796617282339685,79.9,310,16,39,-4.138579775302188,1.864370343012939,84.6,100,6,43,3.954407566503874,9.633177932894917,93.5,100,7,99,2.064143079306384,10.851816160925228,92.6,111,29,38,2.480625310608006,6.899163171620725,91.7];
var allabs = [0,21,545121,9,2,20,571757,9,7,3,425772,9,10,2,592273,9,15,2,518614,9,19,0,0,0];
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