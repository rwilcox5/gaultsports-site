var allpitches = [200,82,20,200,100,91,210,66,15,211,91,100,200,0,0,111,38,16,110,82,42,200,100,84,200,100,100,111,47,35,211,100,100,110,74,25,111,48,37,111,2,48,100,91,10,111,86,29,111,59,37,111,83,46,200,100,100,210,55,31,200,98,68,200,100,100,110,28,26,111,39,34,111,79,44,211,74,70,100,32,0,210,53,76,100,6,14,110,40,69,200,98,100,111,45,50,100,0,12,111,38,13,111,35,50,211,19,42,111,97,23,111,19,16,111,74,52];
var allabs = [0,592102,595885,8,6,592102,516770,9,11,592102,543305,9,14,592102,452104,9,18,592102,453943,9,27,592102,458731,9,39,0,0,0];
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