var allpitches = [100,88,66,111,18,56,100,0,0,200,11,23,110,11,54,111,32,59,100,7,38,100,47,90,111,47,52,211,61,50,200,93,100,211,42,37,111,47,42,111,65,55,111,45,78,200,24,9,111,48,39,211,60,66,211,75,47,200,100,89,111,42,14,211,68,62,211,61,64,100,53,2,111,98,27,110,21,63,100,26,19,111,67,56,211,35,46,211,73,78,211,88,71,111,56,29,110,89,17,200,71,100,111,77,28,200,0,49,111,11,25,111,49,46,111,70,41,210,35,67,211,76,80,110,20,31,111,51,52,211,90,71,111,24,65];
var allabs = [0,435221,596115,6,2,435221,467827,6,8,435221,452672,6,12,435221,547172,6,14,435221,642162,6,22,435221,506560,7,25,435221,643565,7,31,435221,641857,7,37,435221,606132,7,39,435221,518934,7,41,435221,467827,7,45,0,0,0];
var num_abs = 11;
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