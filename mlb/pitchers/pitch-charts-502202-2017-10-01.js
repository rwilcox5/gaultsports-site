var allpitches = [100,100,70,-5.3236054528370484,10.293755758153925,92.0,110,67,52,-4.52661617329381,6.252068509915906,91.5,110,67,63,-4.808022324300035,7.222727331686832,92.8,111,48,28,-5.692679695474616,9.836674091367424,94.2,411,66,95,-12.299447013172106,-0.9089541278541676,80.8,300,82,100,1.1896456889461424,5.416484785909708,87.9,100,46,89,-5.256594386850836,9.7048901676141,93.4,111,52,59,-4.569095885563748,9.206348039149848,93.4,411,45,50,-10.844775905305218,1.8532305163327276,81.5,111,80,23,-4.295407533969998,9.511406193062992,93.5,400,100,80,-12.251922226977634,4.0817860760602604,81.2,100,55,93,-5.078470068884977,8.939501929159645,93.5,111,44,55,-4.081130837096479,9.928727566390176,93.1];
var allabs = [0,3,429666,8,5,3,543376,8,10,2,572073,8,13,0,0,0];
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