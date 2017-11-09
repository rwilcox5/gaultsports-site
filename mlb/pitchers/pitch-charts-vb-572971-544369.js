var allpitches = [111,74,75,100,51,100,111,19,74,110,68,50,100,100,77,100,0,78,100,100,65,111,64,74,111,33,86,111,80,84,111,59,92,100,0,66,311,15,100,110,83,56,100,100,78,100,77,89,111,63,51,111,100,59,100,88,100,311,22,77,100,8,93,100,94,100,311,28,50,311,0,90,100,83,100,100,16,100,311,36,43,111,59,41,111,37,28,100,9,100,111,31,66];
var allabs = [0,201710130,2,1,1,3,201710130,2,4,1,9,201710130,3,6,1,13,201710180,3,2,2,18,201710180,3,3,2,24,201710180,20,5,2,31,0,0,0];
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