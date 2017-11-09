var allpitches = [100,23,9,-6.868859488467669,2.283566252581622,89.2,311,53,58,4.527080640597204,0.19557477180897598,80.4,110,58,61,-5.848411072042154,2.665375814598792,90.7,100,100,92,0.3856446676692402,5.984757358124133,89.5,311,50,100,5.298623725776056,-1.0528119269511838,81.1,311,91,45,6.5800520911380165,0.6771250821394906,81.7,110,74,67,-5.300456987323715,5.546040943476381,90.1,300,11,17,4.679772568188357,0.013527760023322614,80.3,100,100,79,-1.2834049707676154,5.9247463648170715,89.5,111,49,64,-6.449484187074322,3.9108819934771515,89.8];
var allabs = [0,2,643217,8,2,3,605141,8,7,2,519048,8,10,0,0,0];
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