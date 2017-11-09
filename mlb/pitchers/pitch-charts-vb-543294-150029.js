var allpitches = [110,79,58,100,100,82,110,42,65,110,88,69,100,100,93,110,66,31,100,64,16,400,100,74,110,78,52,111,53,21,100,96,64,100,79,91,100,100,63,110,83,70,110,56,65,111,81,65,100,36,19,110,70,57,100,88,48,111,65,36,100,100,52,100,99,45,111,23,37,110,84,74,111,92,48,111,81,27,111,32,24,411,54,59,111,60,45];
var allabs = [0,201710060,3,2,1,4,201710060,14,4,1,11,201710060,2,7,1,16,201710120,2,1,2,20,201710120,21,2,2,26,201710120,20,4,2,29,0,0,0];
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