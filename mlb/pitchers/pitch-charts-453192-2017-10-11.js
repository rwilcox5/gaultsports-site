var allpitches = [100,100,65,110,53,66,100,0,78,310,11,52,311,53,17,310,38,44,300,0,89,300,7,83,310,64,38,311,29,73,311,88,53,111,80,12,300,0,96,111,90,63,111,98,58,111,25,43,311,43,56,100,84,26,311,45,75,310,42,88,311,14,86,311,3,87,100,0,49,311,40,82,111,44,58,310,28,41,311,16,81,100,97,52,311,36,79,311,64,69,311,35,27,311,42,76,111,50,38,100,100,70,311,32,69,100,95,91,310,61,68,311,0,74,111,26,40];
var allabs = [0,453192,453943,4,5,453192,458731,5,17,453192,592450,5,21,453192,544369,5,25,453192,596142,5,27,453192,595885,6,32,453192,516770,6,35,453192,543305,6,39,0,0,0];
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