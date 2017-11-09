var allpitches = [100,0,53,0.5042148414881038,10.855167920005872,92.0,111,49,66,-4.632591423798498,9.364790373201998,95.0,111,65,50,-5.4660087479194255,9.348208585621514,94.5,111,60,35,1.2246934760233579,6.198920903607428,91.9,111,33,50,-0.4412997881389037,4.535126475460107,89.8,111,21,13,-2.961275713811726,8.809151519104782,95.3,211,51,84,2.0730442264693636,-5.017486687310649,83.9,100,97,100,0.5250717158070677,4.970654351787678,88.4,100,97,100,-1.5228309149157933,5.154471571275145,88.9,110,48,34,-3.789519163861618,9.948203116244283,94.0,100,21,89,-1.0473902780977498,2.189677724599174,88.3,100,100,64,-4.485321024076785,11.104244928851132,93.9];
var allabs = [0,23,572191,8,3,20,452252,8,7,14,607208,8,12,0,0,0];
var num_abs = 3;
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
        return allpitches[(firstp+ii)*6];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+2];
}
function sendXM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+3];
}
function sendYM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+4];
}
function sendVel(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+5];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendEvent(i){var abn = returnabs[2*i]; return allabs[abn+1];}