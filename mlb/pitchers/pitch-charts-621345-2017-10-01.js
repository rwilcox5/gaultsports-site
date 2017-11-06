var allpitches = [100,0,94,111,45,44,111,48,61,111,0,100,111,36,70,100,98,75,111,34,47,111,0,62,111,0,86,100,79,16,111,20,68,100,0,100,111,39,94,100,0,74,100,40,100,100,100,87,100,94,62,111,66,42,110,57,81,110,22,81,111,40,55,111,46,35,100,0,51,111,19,21,111,0,48];
var allabs = [0,621345,571506,7,4,621345,605119,8,9,621345,500743,8,15,621345,449107,8,20,621345,543829,8,25,0,0,0];
var num_abs = 5;
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