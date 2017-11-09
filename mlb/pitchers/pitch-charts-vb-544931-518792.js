var allpitches = [200,5,0,411,0,57,111,52,27,411,33,53,111,41,2,111,76,33,100,0,0,300,19,13,111,82,16,110,44,43,100,100,28,200,39,84,111,26,26,411,37,75,111,71,52,200,86,86,400,72,100,100,12,66,110,48,46,111,35,38,411,36,92,100,1,57,100,97,15,411,60,95,100,1,11,411,62,100];
var allabs = [0,201710060,2,2,1,3,201710060,2,5,1,4,201710060,2,7,1,9,201710110,14,2,2,17,201710110,20,5,2,20,201710110,3,7,2,26,0,0,0];
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