var allpitches = [100,22,100,-5.627852194587025,10.860569579725091,98.2,100,75,100,-5.108116958666472,9.920913875445216,98.5,111,68,64,-7.945111598906449,9.937833959512307,97.2,110,28,71,-5.661346106596715,8.366341228762703,97.2,311,40,49,1.0422065111621772,-4.350545728009536,88.5,111,25,48,-6.780910045060848,8.127174827227332,96.9,100,15,50,-3.066685712687868,7.5347855009743565,98.4,110,59,61,-4.681089479360448,9.890836646202144,97.8,100,90,97,-5.883070816385052,7.865384471400397,99.2,111,88,66,-5.8190544619049875,9.351778616878068,97.7];
var allabs = [0,2,606466,6,3,2,502671,7,5,2,502110,7,6,2,571875,7,10,0,0,0];
var num_abs = 4;
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