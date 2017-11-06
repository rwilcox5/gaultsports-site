var allpitches = [211,77,48,210,48,24,111,54,44,210,71,49,200,13,78,211,46,38,311,94,100,211,87,62,110,28,14,311,8,61,100,23,0,200,100,100,210,59,21,211,63,38,111,56,37,210,51,67,111,52,52,300,43,100,300,0,18,310,60,66,100,69,16,200,76,91,110,15,43,200,93,100,100,29,14,200,0,3,200,100,63,210,26,40,211,26,56,311,85,63,311,50,54,111,24,0,200,0,96,211,0,27,311,48,54];
var allabs = [0,476454,596019,11,1,476454,543401,11,3,476454,608070,11,7,476454,488726,12,10,476454,467793,12,15,476454,457803,12,20,476454,457706,13,25,476454,543228,13,35,0,0,0];
var num_abs = 8;
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