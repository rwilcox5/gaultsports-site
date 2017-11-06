var allpitches = [100,91,92,111,36,31,110,45,67,300,100,25,111,96,75,110,19,71,111,85,61,100,32,87,110,9,37,111,100,40,111,77,29,100,100,100,111,60,32,110,52,73,100,94,68,111,33,47,311,58,73,100,100,100,111,59,16,300,100,100,110,74,47,111,6,53];
var allabs = [0,543766,543305,5,2,543766,453056,5,6,543766,453943,6,7,543766,458731,6,13,543766,592450,6,16,543766,596142,7,17,543766,544369,7,19,543766,516770,7,22,0,0,0];
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