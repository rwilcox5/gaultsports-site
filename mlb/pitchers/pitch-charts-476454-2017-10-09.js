var allpitches = [110,56,49,-3.0315302135873257,10.847551744307292,98.2,100,100,54,-2.7002184244679692,14.762099521176744,98.2,200,100,69,6.009088476248544,0.902083374844115,84.6,111,59,80,-4.214701100805717,11.04478230876666,97.4,100,0,0,-2.0578210811625945,11.8798026354603,97.7,111,83,44,-5.196595924681995,10.944050217032101,97.8,111,42,76,-4.3153905191178366,9.355352446918413,96.3,100,100,25,-0.28286617246730344,10.474939044145465,98.5,200,100,0,8.72359576487525,1.127517077213043,85.1,200,100,9,7.475072947488469,0.3408888308787231,84.7,100,4,19,-2.9556662707067414,11.359504897350112,97.7,100,100,30,-3.627653165128291,11.092418990688257,97.3];
var allabs = [0,14,543228,8,8,14,596019,8,12,0,0,0];
var num_abs = 2;
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