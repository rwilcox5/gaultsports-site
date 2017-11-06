var allpitches = [110,42,58,411,29,38,410,33,19,100,31,79,411,26,39,410,64,21,111,26,68,411,42,53,110,30,28,400,88,99,111,10,35,111,69,16,110,79,59,111,52,42,100,100,82,400,76,100,411,53,76,410,33,21,111,45,23,410,49,20,100,100,54,411,68,100];
var allabs = [0,592454,543401,8,3,592454,608070,8,5,592454,457803,8,8,592454,467793,9,13,592454,488726,9,18,592454,502082,9,22,0,0,0];
var num_abs = 6;
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