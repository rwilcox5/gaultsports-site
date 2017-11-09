var allpitches = [110,13,39,0.6419101017442859,11.498798351654202,96.0,111,0,14,0.19429555714455266,8.59178943749681,96.3,111,30,39,-0.9557916587636852,9.398636317344153,99.4,100,79,39,0.20492101482064565,8.042765796769057,98.4,300,76,91,6.756191130011859,-3.465681408750819,83.5,111,43,39,0.50349109549369,12.248688676439201,97.9,111,41,42,-3.7480818789270858,9.746114234382334,96.6,111,65,19,0.23986285795085788,3.931542217394189,94.4,100,100,19,-0.4800741138209811,5.46023597510904,96.2,300,33,100,5.34865567215555,-0.4425005505612861,84.4,111,43,44,-0.6026890078382537,6.561473167930167,96.9,111,71,50,-1.9593776516178312,9.604302510430756,96.9,111,18,41,1.6287142894959254,8.703300027239155,96.6,100,86,53,-0.7848235447180283,4.961100364992086,94.9,111,64,61,0.3708537479797241,7.408376632885388,94.6,111,100,57,1.7477264297137114,4.138583307197406,95.4,111,100,96,1.1246266543008208,5.770459383239931,95.0,111,84,71,0.7013275969268562,5.246458026970148,95.8,100,100,57,0.4226413131604562,4.826279610378698,95.6,111,34,48,1.1419409189419985,8.007845850364165,93.7,100,100,80,-0.19963226336638018,4.907133930365348,94.9,111,61,31,0.9066750007233166,7.025323972360795,95.4,111,84,69,-1.5532136190411643,5.482710478360929,95.2,111,83,47,-1.966601240995413,4.427369838946113,94.8];
var allabs = [0,3,592450,5,6,2,544369,6,13,23,596142,6,15,20,595885,6,18,2,516770,6,20,2,452104,6,24,0,0,0];
var num_abs = 6;
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