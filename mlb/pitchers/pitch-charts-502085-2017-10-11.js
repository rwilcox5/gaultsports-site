var allpitches = [110,3,29,111,62,65,210,43,55,200,46,100,100,10,88,211,20,62,210,21,57,211,48,71,211,70,47,210,6,73,200,39,100,110,28,49,211,81,100,100,100,28,210,40,59,100,77,86,210,20,71,211,97,88,111,60,46,211,56,72,200,72,100,200,78,70,200,100,100,200,0,46,210,17,38,200,71,100,210,51,69,200,0,5,211,59,91];
var allabs = [0,502085,596019,5,2,502085,543401,6,6,502085,608070,6,8,502085,429665,6,9,502085,467793,7,13,502085,457706,7,19,502085,457803,7,24,502085,547379,7,29,0,0,0];
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