var allpitches = [200,0,34,8.569553419944814,-0.5758337230822814,75.9,111,71,49,-1.2378077446407532,13.776012357254228,93.3,100,33,7,-3.5944170205899404,9.48771234876144,94.6,111,90,38,-0.8822398343425952,14.043312891688124,94.8,111,60,65,-2.4179675161327596,13.232980190242323,95.1,111,14,38,-3.327134747983189,14.306745446920182,95.3,211,44,80,6.652995233726002,-4.338377752784432,80.5,210,64,33,8.111792473267178,-1.987842304828963,76.9,211,80,75,9.193234486307377,-1.6004133961571423,79.4,211,46,87,8.68839033968894,-1.6745703057109527,80.0];
var allabs = [0,20,434158,5,2,20,523253,5,7,21,605131,5,10,0,0,0];
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