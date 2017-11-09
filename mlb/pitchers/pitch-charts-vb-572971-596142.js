var allpitches = [100,63,100,311,23,100,111,44,73,311,2,100,100,98,78,110,66,82,100,0,32,311,27,87,100,93,83,110,72,76,310,49,55,111,7,64,400,100,100,111,37,22,311,5,100,111,6,56,100,20,4,111,75,65,111,18,56,311,49,68,100,27,87,311,36,100,311,27,100,110,76,71,311,29,72];
var allabs = [0,201710130,3,1,1,4,201710130,3,4,1,10,201710130,3,6,1,15,201710180,3,1,2,19,201710180,3,3,2,23,201710180,20,5,2,25,0,0,0];
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