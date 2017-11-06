var allpitches = [110,68,43,111,46,63,100,70,100,400,0,23,110,76,27,110,60,47,400,52,100,111,56,6,111,37,40,111,65,81,111,15,53,111,45,46,111,48,24,111,30,49,100,83,69,111,64,49,110,62,56,111,30,41,111,64,39,400,62,96,111,15,29,111,53,46,111,66,30,100,28,82,100,33,0,110,73,71,111,79,23,111,47,42,411,68,68];
var allabs = [0,592454,408045,6,2,592454,593871,7,9,592454,592696,7,11,592454,500871,7,14,592454,596146,8,16,592454,643335,8,23,592454,501303,8,29,0,0,0];
var num_abs = 7;
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
        return allpitches[(firstp+ii)*3];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+2];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}