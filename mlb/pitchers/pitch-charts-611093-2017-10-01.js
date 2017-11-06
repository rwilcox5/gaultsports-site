var allpitches = [411,41,47,411,72,48,411,25,42,400,74,100,400,56,79,400,0,21,410,40,69,411,7,51,111,72,42,110,19,38,411,39,34,100,32,5,100,53,1,411,0,35,400,86,62,410,85,58,410,70,70,111,79,32,100,100,60,410,8,42,110,58,58,111,93,48,111,72,22,400,97,90,411,57,97,410,56,64,111,42,6,311,42,64,111,58,23];
var allabs = [0,611093,596144,5,3,611093,593528,5,9,611093,609275,6,14,611093,624585,6,18,611093,460077,6,26,611093,449181,6,29,0,0,0];
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