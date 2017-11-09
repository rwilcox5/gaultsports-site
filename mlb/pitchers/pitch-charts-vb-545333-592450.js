var allpitches = [111,26,23,100,25,0,211,62,80,100,44,0,210,79,71,200,81,100,210,30,24,111,100,53,200,100,100,111,49,37,211,100,100,200,100,76,200,100,100,110,47,57,111,100,45,210,12,56,210,58,64,111,27,35,111,24,9,200,100,100,100,100,100,200,10,13,111,40,11,210,63,57,210,62,75,200,100,100,200,91,100,111,61,54,211,45,62,200,71,100,111,24,20];
var allabs = [0,201710050,3,1,1,5,201710050,3,4,1,11,201710050,3,6,1,16,201710090,3,1,2,23,201710090,21,2,2,31,0,0,0];
var num_abs = 5;
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