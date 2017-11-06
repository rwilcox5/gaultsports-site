var allpitches = [100,57,19,110,34,39,111,14,16,111,41,48,411,66,68,400,43,100,110,42,76,100,100,61,400,100,100,100,0,30,110,45,35,100,100,13,110,51,71,110,75,51,411,89,82,111,44,59,411,36,38,100,95,37,100,47,8,110,63,82,400,77,98,111,61,20,100,100,79,410,57,66,100,18,25,111,99,59,400,17,12,111,56,41,400,0,0,410,84,53,100,100,86,400,100,100,410,25,52,111,45,41,111,50,33,411,65,76,100,100,75,100,100,58,411,61,66,111,68,49,411,100,70,211,48,37];
var allabs = [0,517593,592450,3,7,517593,544369,4,12,517593,596142,4,15,517593,595885,4,17,517593,516770,4,23,517593,452104,4,30,517593,453943,5,36,517593,543305,5,42,0,0,0];
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