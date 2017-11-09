var allpitches = [111,50,46,9.31086814740114,12.80630177836212,94.5,111,44,22,9.58522121117334,13.615438997980558,94.3,100,52,1,9.752685158415204,10.755754098300983,93.7,111,51,31,9.281394519598189,10.421771838038916,93.7,200,0,100,-4.2673571173121285,-4.095891819336121,78.5,111,58,11,8.415500928283741,10.250679891260964,92.6,111,62,13,9.705554561118733,10.092311429634732,93.3,110,21,54,10.847575897463027,12.43193708897568,94.6,200,0,100,-2.345560842076488,-2.698523469270552,79.9,211,15,31,-0.3011602226517204,-2.00593489028718,79.6,100,0,83,9.702418811391768,11.193138771822479,93.1,111,20,48,11.196567682619495,11.3165764575867,94.1];
var allabs = [0,2,595879,7,2,20,656941,7,6,20,445055,7,12,0,0,0];
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