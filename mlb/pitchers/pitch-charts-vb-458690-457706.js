var allpitches = [111,32,58,300,64,100,111,7,28,100,0,54,311,74,100,411,12,65,310,25,32,410,56,28,311,80,66,411,12,69];
var allabs = [0,201710010,2,1,1,3,201710010,3,4,1,7,201710010,2,6,1,10,0,0,0];
var num_abs = 3;
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