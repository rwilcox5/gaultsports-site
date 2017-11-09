var allpitches = [100,3,31,110,32,85,111,28,38,111,19,37,111,40,69,111,33,14,311,88,84,311,90,91,100,65,97,110,58,46,200,84,100,100,14,38,111,46,66,111,32,32,311,83,60,100,0,62,110,43,73,210,66,67,411,13,82,110,44,58,100,0,43,211,34,48,400,17,100,111,26,8,111,41,77,100,100,62,111,36,90,111,37,53,100,16,28,111,53,16];
var allabs = [0,201710140,3,1,1,8,201710140,21,3,1,15,201710140,3,6,1,19,201710140,3,8,1,24,201710200,20,1,2,27,201710200,2,3,2,28,201710200,2,6,2,30,0,0,0];
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