var allpitches = [111,69,26,111,62,25,111,60,45,111,68,8,111,33,12,100,100,12,310,62,28,111,82,51,110,38,69,100,100,66,311,80,41,111,52,19,110,52,18,100,80,0,111,64,5,111,32,34,111,38,14,311,44,76,111,32,0,111,77,4,111,68,34,311,46,55,100,5,1,100,0,34,111,7,51,111,7,37,111,50,39,100,91,40,111,66,46,100,90,40,111,47,39,100,31,0,111,50,13,111,42,35];
var allabs = [0,547973,543228,8,4,547973,570482,8,8,547973,596019,9,12,547973,543401,9,17,547973,608070,9,22,547973,457803,9,27,547973,467793,9,34,0,0,0];
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