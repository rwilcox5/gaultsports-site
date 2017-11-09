var allpitches = [110,59,53,10.07209576751714,9.314758208045616,93.1,400,3,71,11.595607459440108,3.4387806700748014,84.8,111,42,49,9.327819169760474,5.876373670692196,93.1,410,34,42,12.023290149832333,3.66089178995637,84.7,411,43,32,10.631620022682363,4.970008648103314,85.8,110,55,23,7.448363893920338,7.94393027877093,92.9,100,100,38,8.611075614447886,5.99156277739907,92.8,400,8,77,9.873244402198813,7.1656698681982025,86.0,110,48,27,10.46888706970688,6.234734462328689,93.0,211,32,77,-3.3891234115763087,-1.7663200931625576,78.1,111,68,52,12.101411689297105,7.656047557211393,93.0,110,48,76,7.149639027638118,9.077798730410148,93.9,111,34,44,6.344668342234683,7.193279454360373,93.3,411,90,68,10.498694974586034,4.310823484845807,86.6,100,100,47,6.10236791699073,8.127077366367313,93.6,211,27,85,-3.1595848250188494,-2.4731010683727375,79.2];
var allabs = [0,20,502517,8,3,23,475582,8,5,2,150029,8,11,3,446308,8,16,0,0,0];
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