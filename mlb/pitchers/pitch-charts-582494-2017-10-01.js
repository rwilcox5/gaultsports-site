var allpitches = [110,67,55,10.469485800536221,1.836213461178816,88.3,200,35,94,-9.22044569772006,0.563608751321604,75.1,211,54,48,-9.331009138649316,0.5190530045040924,75.8,210,78,74,-9.485281132815023,1.245115841596224,75.0,100,100,86,11.791456101557543,1.209187996401684,88.6,100,100,56,9.73215392345664,1.457572898156496,88.9,200,100,39,-9.8828409835053,1.41744782838534,75.3,111,90,33,11.613173797307748,5.764832847472093,89.1,211,0,51,-10.102377891094392,1.473525945813432,77.0,211,46,84,-11.314419043774116,1.8400943238951841,75.6,211,0,59,-10.542132706737888,3.15302587130898,76.8,211,73,23,-11.363132753528365,-0.09704726006524655,76.0,200,0,100,-7.843657407673009,-1.1074056973333488,75.8,200,23,100,-9.494195617270032,1.078989079278499,75.2,111,78,0,11.45470044362412,5.369307180297996,89.0];
var allabs = [0,2,518542,5,3,3,605233,5,9,2,592567,5,12,2,643393,6,15,0,0,0];
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