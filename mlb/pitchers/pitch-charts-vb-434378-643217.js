var allpitches = [110,26,63,110,17,55,111,43,17,100,0,30,400,0,72,111,13,60,100,0,14,111,1,24,111,59,42,111,8,34,311,100,89,311,100,95,110,12,60,111,69,29,300,100,98,311,91,70,400,86,100,110,28,84,110,15,60,411,6,75,110,57,64,100,51,100,111,43,14,100,0,36,311,78,59,100,37,93,111,29,56,111,45,48,400,100,100,111,0,35,100,7,0,311,81,43,311,90,54];
var allabs = [0,201710050,3,1,1,11,201710050,2,3,1,16,201710050,2,5,1,20,201710090,23,5,2,25,201710090,2,7,2,33,0,0,0];
var num_abs = 5;
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