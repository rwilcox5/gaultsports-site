var allpitches = [211,62,63,211,44,56,100,77,0,211,72,98,211,86,79,211,53,80,210,52,39,211,57,91,211,69,70,211,51,100];
var allabs = [0,201710170,2,2,1,4,201710170,2,4,1,5,201710210,2,6,2,6,201710210,3,9,2,10,0,0,0];
var num_abs = 4;
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