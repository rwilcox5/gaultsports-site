var allpitches = [111,37,45,-6.367939286608955,5.892809249900544,91.5,100,5,79,-7.75622831856054,7.906909106332668,92.5,100,95,47,-4.9421700736052765,11.93823438802104,91.5,111,56,42,-9.003475697541923,7.076065738105932,92.1,200,17,44,6.442723706232888,-4.796874229681632,78.6,210,74,59,4.94336170697688,-4.183979064192924,81.0,100,30,100,-8.981664734156736,9.601824473472035,92.5,100,4,44,-4.797086642307108,5.937991552217724,92.4,111,57,40,-5.973146801981388,7.5678707366928,92.4,111,22,33,-5.90313616649694,7.318915062012996,92.6,111,69,26,-3.061514056891764,14.07351725573016,93.3,111,49,32,-0.2322785664366588,13.21696422211836,91.8];
var allabs = [0,2,543308,7,1,20,592407,8,4,20,592444,8,10,2,553988,8,12,0,0,0];
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