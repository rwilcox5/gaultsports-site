var allpitches = [110,52,44,111,47,31,100,0,28,211,14,83,110,45,24,211,25,64,100,31,18,100,32,87,111,44,47,200,4,89,111,90,41,111,41,50,211,40,47,411,68,75,111,56,11,200,5,100,111,31,36,100,100,58,111,23,75,100,8,81,100,2,81,110,57,72,111,56,44,111,32,64,100,20,100,111,76,60,111,71,89,111,18,79,100,68,0,211,44,89];
var allabs = [0,201710070,3,1,1,4,201710070,2,4,1,11,201710070,2,6,1,19,201710110,2,5,2,26,201710110,3,8,2,30,0,0,0];
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