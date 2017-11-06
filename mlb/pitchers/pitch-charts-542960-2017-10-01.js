var allpitches = [111,76,35,100,79,82,110,84,64,111,88,39,311,48,26,111,2,43,111,39,71,100,39,100,100,1,91,111,8,77,300,100,88,100,69,91,111,0,39,100,95,69,111,82,49,111,42,77,100,100,78,100,96,59,310,78,81,111,40,98,100,60,100,100,52,18,111,54,42,111,58,15,100,82,100,111,75,31,300,100,94,100,100,75,100,99,91];
var allabs = [0,542960,621002,8,5,542960,572816,8,6,542960,446263,8,10,542960,446334,8,15,542960,489149,8,16,542960,519306,8,22,542960,461858,8,29,0,0,0];
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