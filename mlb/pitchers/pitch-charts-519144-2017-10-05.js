var allpitches = [110,76,43,-5.7304265725759205,6.030345652541918,91.9,100,0,22,-9.65680425437507,4.038160799834197,90.2,110,48,55,-6.7063299343992595,9.470963069064322,93.2,111,48,54,-6.266854206885311,6.693313393851709,93.1,111,35,51,-6.329109461858862,8.736273779066519,94.2,100,0,46,-10.034237333604782,4.192766480296223,90.1,400,41,100,-11.025994694289293,4.473576952282551,81.4,110,62,53,-5.202301575785218,10.915168060095588,93.1,111,40,52,-5.163830529162723,8.494512459905426,92.2,111,100,38,-5.256613268818912,9.569548165291826,93.1,410,58,65,-9.355911335895915,4.507485576037526,81.9,311,62,36,0.9809164531755415,2.1843024078344557,87.7];
var allabs = [0,2,493329,8,5,2,503556,8,10,2,435263,8,12,0,0,0];
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