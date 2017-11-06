var allpitches = [110,16,39,110,51,65,100,0,94,311,10,59,310,17,66,311,17,87,111,100,35,100,100,39,100,0,33,110,83,59,311,50,53,311,7,70,100,6,65,311,18,67,111,19,34,311,11,73,311,38,96,311,28,76,100,100,64,310,33,62,311,1,70,100,92,31,100,83,35,100,0,63,311,12,77,300,0,74,110,40,68,300,56,85,100,100,49,300,0,75];
var allabs = [0,453192,595885,7,4,453192,453943,8,7,453192,452104,8,19,453192,543305,8,25,453192,458731,8,30,0,0,0];
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