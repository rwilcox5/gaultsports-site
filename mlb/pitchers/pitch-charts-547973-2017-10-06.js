var allpitches = [110,76,43,111,4,15,111,24,12,111,83,37,300,0,100,311,19,46,110,53,58,311,58,63,500,50,100,500,50,100,500,50,100,500,50,100,111,41,54,111,85,25,100,100,13,311,35,25,111,65,11,311,67,47,311,46,65,111,88,18,411,70,81,411,80,38,310,17,30,311,35,77,100,31,0,100,1,56,311,29,45,111,35,4,110,86,48,110,81,35,111,43,60];
var allabs = [0,547973,467793,10,2,547973,457803,10,6,547973,457706,10,8,547973,543228,10,12,547973,570481,10,13,547973,596019,9,22,547973,543401,9,27,547973,608070,9,30,547973,488726,9,31,0,0,0];
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