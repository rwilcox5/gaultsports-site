var allpitches = [110,71,76,311,91,85,300,91,100,311,86,66,110,82,82,111,60,63,111,2,24,111,72,42,110,70,62,200,100,100,311,68,99,110,35,79,311,52,75,300,100,100,300,90,100,300,100,100,111,22,32,311,69,83,110,67,64,311,76,86,110,85,67,311,73,89,311,100,91,111,64,49,111,79,56,100,64,0,311,78,75,111,72,37];
var allabs = [0,201710140,3,1,1,4,201710140,2,4,1,7,201710140,3,6,1,11,201710140,2,9,1,17,201710200,2,1,2,20,201710200,3,3,2,23,201710200,3,6,2,28,0,0,0];
var num_abs = 7;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*5;returnabs[2*iii+1]=i*5+5;for (iiii=allabs[i*5+4];iiii<30;iiii++){        nabsc[iiii]+=1;}
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
function sendEvent(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendDate(i){var abn = returnabs[2*i]; return allabs[abn+1];}