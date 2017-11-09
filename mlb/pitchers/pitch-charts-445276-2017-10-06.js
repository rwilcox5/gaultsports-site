var allpitches = [110,44,33,4.13412904427706,13.53993928069212,92.8,111,76,59,5.5011560087648155,12.2568528902328,92.6,110,52,42,5.369704894723344,11.595151555738823,93.3,110,38,64,6.569261006765279,10.92110071655813,93.6,300,44,96,8.809139741601816,1.8570164477842679,81.9,111,62,22,4.516001027736143,12.677218631124362,94.1,111,56,18,3.868485167532432,11.282582595196235,92.4,100,42,0,5.836913497592196,11.310416505593988,93.0,100,77,0,5.085407205660936,11.106128604832115,93.1,100,100,0,5.34053400277248,7.5570619253930165,91.9,100,0,0,6.202860289041563,11.082235068312036,92.2,100,6,7,4.78050504148218,12.312744654282959,93.5,111,43,51,7.15271979288816,10.596579610693379,91.3,111,100,62,5.727660317580624,10.556682357974509,93.0,111,84,33,6.179925346597584,9.854038840132272,93.8,111,72,56,3.785518075278528,12.49868615557848,93.7];
var allabs = [0,2,453923,9,2,20,606466,9,6,14,518614,9,11,2,571875,9,15,2,444482,9,16,0,0,0];
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