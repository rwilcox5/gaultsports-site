var allpitches = [110,25,75,7.18067486791548,12.837337562244599,89.1,400,0,58,0.24797531177737558,5.039396036307408,82.4,400,11,89,2.197976240733216,7.573093463199985,80.9,111,56,35,7.576720961497561,15.437073367200119,90.0,411,31,74,1.065378795819552,6.083579408318904,81.1,411,46,27,1.408128031647876,7.1290625672045635,83.2,411,29,92,7.718699860133603,7.576558395597276,81.7,400,62,100,10.987641606711229,7.497965026211377,84.0,411,60,75,9.491642423175563,6.4539332770446,82.1,100,1,88,7.729222752590124,13.18557797041404,91.1,411,95,69,7.865721543669192,6.2723211334935005,84.4,100,25,100,8.889089609609064,12.144952461522358,90.1,411,62,84,8.15803600260246,6.075482164623576,79.5,111,31,65,6.5848075747324435,13.981089343944,90.9,400,100,62,7.14291375123786,8.166231629324063,82.6,411,92,51,7.376026840416481,9.089548889578452,81.4,110,66,26,5.119350641413776,12.46554751610724,90.7,400,100,70,4.876094911373424,10.107671245966909,82.4,411,51,89,9.115957110257003,8.883177595739916,82.8,111,61,48,6.4619928965678515,14.245650650098199,92.0,100,66,3,4.785569012819604,12.77880726002472,89.7,111,75,32,7.900716032712036,14.62516615430808,90.6];
var allabs = [0,3,502100,8,6,2,461865,8,11,2,592206,9,16,3,600869,9,20,2,519068,9,22,0,0,0];
var num_abs = 5;
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