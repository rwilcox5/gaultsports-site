var allpitches = [100,48,10,110,88,79,100,14,41,300,100,63,100,100,48,100,0,46,111,64,43,311,67,46,100,42,4,111,80,48,211,37,48,111,17,69,300,100,94,100,100,89,311,26,54,111,87,68,100,23,13,111,86,35,300,79,96,100,86,93,310,51,84,111,77,52,111,90,54,110,30,71,100,83,99,100,0,52,111,71,79,311,68,41,111,38,65,300,97,100,311,62,56,110,86,78];
var allabs = [0,201710130,14,1,1,5,201710130,3,3,1,10,201710130,2,5,1,18,201710180,2,1,2,23,201710180,20,3,2,28,201710180,3,5,2,32,0,0,0];
var num_abs = 6;
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