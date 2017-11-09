var allpitches = [100,43,6,110,88,58,111,47,46,110,83,40,400,100,48,100,100,69,411,67,58,111,42,93,400,96,62,110,56,45,111,73,28,110,77,54,110,85,56,110,79,46,400,79,100,411,73,40,111,16,19,110,67,73,111,27,12,111,79,49,400,25,100,411,55,100,111,41,57,111,69,22,100,100,79,411,100,53];
var allabs = [0,201710060,2,1,1,3,201710060,2,3,1,8,201710060,3,5,1,12,201710120,20,1,2,17,201710120,3,2,2,22,201710120,3,4,2,26,0,0,0];
var num_abs = 6;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*5;returnabs[2*iii+1]=i*5+5;for (iiii=allabs[i*5+4];iiii<30;iiii++){        nabsc[iiii]+=1;}
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
function sendEvent(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendDate(i){var abn = returnabs[2*i]; return allabs[abn+1];}