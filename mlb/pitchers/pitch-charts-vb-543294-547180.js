var allpitches = [100,84,15,100,3,45,111,63,54,411,25,60,100,82,0,111,1,19,111,57,23,411,10,73,111,43,49,111,22,76,400,0,0,411,0,29,111,35,37,111,30,0,411,0,74,411,47,73,500,50,100,500,50,100,500,50,100,500,50,100,100,16,0,100,6,17,111,20,37];
var allabs = [0,201710060,20,1,1,3,201710060,3,3,1,8,201710060,2,6,1,10,201710120,19,1,2,16,201710120,15,2,2,20,201710120,20,4,2,23,0,0,0];
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