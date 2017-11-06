var allpitches = [110,40,66,211,40,52,100,89,37,111,42,75,100,65,18,111,52,34,111,43,34,111,100,54,111,30,28,100,83,13,111,33,69,100,100,84,100,0,38,100,9,57,110,29,64,111,40,100,111,97,55,111,46,64,111,89,71,111,19,31,100,100,100,110,61,68,111,65,37,200,84,74,110,38,56,111,55,41,110,83,57,111,85,81,111,68,37,111,67,5,100,0,22,110,33,35,111,75,43,111,88,24,111,38,77];
var allabs = [0,407793,621035,4,4,407793,457759,4,8,407793,641355,4,11,407793,624577,4,18,407793,523253,4,20,407793,571771,4,23,407793,605131,5,26,407793,518586,5,30,407793,477132,5,35,0,0,0];
var num_abs = 9;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*4;returnabs[2*iii+1]=i*4+4;for (iiii=allabs[i*4+3];iiii<30;iiii++){        nabsc[iiii]+=1;}
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
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}