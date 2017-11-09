var allpitches = [100,33,89,310,71,60,311,70,60,200,0,60,110,64,90,111,65,47,111,57,65,200,61,97,210,70,79,300,82,100,111,77,41,100,12,23,100,23,12,111,64,23,300,92,97,311,77,63,111,16,19,100,82,13,311,67,68,200,73,84,210,23,68,111,51,31,111,72,33,100,81,27,310,65,73,111,59,38,400,0,73,411,21,96,110,65,78,300,90,21,400,81,86,111,61,53,100,30,0,100,28,17];
var allabs = [0,201710140,2,2,1,3,201710140,3,5,1,7,201710140,14,7,1,13,201710140,2,9,1,19,201710200,3,2,2,23,201710200,3,4,2,28,201710200,14,7,2,34,0,0,0];
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