var allpitches = [110,29,86,311,61,67,100,100,43,100,100,31,310,71,74,100,100,70,310,43,75,311,67,65,100,34,86,100,2,66,100,15,45,100,80,93,311,72,100,311,85,84,111,58,12,111,95,67,210,86,36,310,36,38,411,0,43,300,0,16,311,29,66,111,57,76,100,96,22,100,100,87,110,17,47,111,38,45,111,19,6,111,30,59];
var allabs = [0,628317,467827,4,2,628317,435622,4,8,628317,518960,4,12,628317,642162,4,16,628317,506560,5,19,628317,643565,5,21,628317,641857,5,22,628317,606132,5,28,0,0,0];
var num_abs = 8;
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