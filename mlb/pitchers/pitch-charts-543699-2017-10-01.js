var allpitches = [210,71,68,100,39,6,411,11,58,100,80,41,200,90,100,100,89,67,311,75,67,110,42,16,300,100,100,300,100,77,311,31,70,110,23,60,111,71,21,110,18,56,200,66,93,211,78,85,411,32,82,210,25,55,110,65,51,100,100,34,111,6,26,310,60,64,100,71,10,411,42,74,100,65,16,211,85,53,111,29,40,100,40,4,300,98,43,400,41,86,111,31,42,111,24,42];
var allabs = [0,543699,621559,6,6,543699,607732,6,11,543699,570256,6,13,543699,607471,6,17,543699,516782,6,21,543699,446481,6,26,543699,605137,6,32,0,0,0];
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