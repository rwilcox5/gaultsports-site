var allpitches = [100,99,6,7.131416604654971,8.845358650001987,95.1,410,75,46,10.11311567051838,4.4268488353827955,85.6,110,34,67,6.164825212762044,9.183891326655647,96.2,400,0,79,3.700539684830628,4.041678729253716,88.5,300,27,100,1.1756319885763271,3.450620030712828,87.5,411,39,100,10.160313890044092,5.032181770254672,87.5,100,56,100,10.89802687513458,10.145441382186672,96.6,111,75,68,9.087143935313184,6.878342118625705,94.5,111,69,35,10.176474796486728,8.216141100594673,96.5,111,54,32,8.547066984485616,8.095466432737524,97.1,411,67,93,10.856823948541884,6.414056130914268,86.5,111,67,24,9.818862830434872,7.48348406118048,97.0];
var allabs = [0,3,450314,7,6,3,570240,7,11,2,656941,7,12,0,0,0];
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