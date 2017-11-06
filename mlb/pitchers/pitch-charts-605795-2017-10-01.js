var allpitches = [100,86,100,100,57,84,100,38,95,111,8,58,111,37,19,111,43,39,111,28,68,100,69,100,111,34,21,100,9,60,111,27,41,110,56,55,211,88,83,211,47,93,110,35,46,400,48,91,411,12,87,100,92,51,211,32,38,411,46,92,100,0,30,111,24,65,111,18,30,111,28,0,111,45,0,400,31,98,110,47,73,111,76,48];
var allabs = [0,605795,572191,3,5,605795,461829,3,9,605795,607208,3,11,605795,547180,4,14,605795,543685,4,19,605795,502517,4,25,605795,452252,4,28,0,0,0];
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