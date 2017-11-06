var allpitches = [100,61,98,110,30,38,100,0,37,100,13,100,110,54,32,100,86,100,111,48,12,300,98,13,300,100,79,311,78,34,311,53,61,300,100,100,311,100,63,100,0,38,111,36,52,311,77,31,111,2,28,111,9,41,100,9,0,100,4,15,411,62,18,100,66,83,111,39,65,300,35,93,100,3,24,111,51,62,100,78,100,111,72,36,111,28,37,110,26,41,411,43,61,100,39,0,311,100,45,400,43,100,400,3,86,300,9,93,100,60,94,100,2,62,111,69,5,111,68,20,311,80,73,111,78,12,110,33,68,111,100,52,111,75,34,100,63,93,310,58,55,300,94,87,111,70,26,100,55,0,311,86,27,100,15,28,111,62,56,100,43,20,110,24,65,111,46,36,100,100,4,111,64,47,311,86,78,300,100,92,100,0,0,311,100,80,300,100,81,311,80,44];
var allabs = [0,429722,458731,1,6,429722,592450,1,13,429722,596142,1,17,429722,544369,1,23,429722,516770,1,29,429722,595885,1,36,429722,543305,1,42,429722,453056,2,45,429722,453943,2,51,429722,458731,2,58,429722,592450,2,64,0,0,0];
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