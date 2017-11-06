var allpitches = [111,25,75,111,60,46,311,76,92,311,61,91,111,54,63,111,76,46,400,18,100,100,100,0,311,64,55,100,16,80,111,39,100,310,74,70,111,4,79,100,48,5,100,56,83,110,31,73,300,21,100,110,60,20,100,69,10,100,17,8,110,13,28,110,45,35,111,46,42,110,44,43,311,33,69,310,27,60,111,51,26,111,70,1,100,93,42,110,57,49,111,15,69,110,36,19];
var allabs = [0,547973,570482,8,4,547973,596019,8,9,547973,543401,8,13,547973,608070,9,19,547973,429665,9,24,547973,467793,9,28,547973,457706,9,32,0,0,0];
var num_abs = 7;
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