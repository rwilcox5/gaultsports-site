var allpitches = [111,67,28,-2.0964655893255784,8.26413088256093,94.5,111,66,46,-0.7908502959988393,10.879991468548905,95.5,111,48,38,-1.7303698525274926,10.075186261232849,95.0,211,57,67,6.1271769801007085,-3.692142188827136,78.5,100,35,0,-3.015835433839001,8.801556179159705,95.5,111,64,26,-1.0649957978327937,11.129203964402208,96.1,111,39,13,-1.3548716518985633,8.9044195670257,95.5,110,33,48,-1.3260625547416478,11.67180546519458,96.0,100,27,2,-0.48614636764272234,12.491411009501217,96.2,111,41,63,-1.2520704374472886,10.707344596530112,96.1,111,51,59,-0.7522233106139772,9.94426206754537,96.2];
var allabs = [0,2,643565,9,3,3,641857,9,8,2,606132,9,11,0,0,0];
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