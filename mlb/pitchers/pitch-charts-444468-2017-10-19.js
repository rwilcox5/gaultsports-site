var allpitches = [311,80,91,0.5136687772348189,3.72086561412846,86.8,311,76,82,2.51796583813284,4.802116456121976,87.6,311,95,70,0.2690636023721604,4.746905983191888,88.1,311,67,48,2.78039992453962,2.499118769131224,87.6,100,28,84,-9.758965637524224,9.636520143910044,97.1,100,24,16,-6.158522519485763,9.845786026093153,96.8,111,66,48,-5.965906605438084,12.68510709328332,96.7,310,52,49,2.4889585982256603,1.931248252827564,86.2,111,8,70,-9.514686841092193,8.815720046574263,96.9,111,68,22,-6.206325307185168,10.645653304631857,96.6,300,100,100,0.5503433590743072,2.581738558931496,86.6,311,76,52,2.183628331585224,4.092588459349068,87.6,111,80,52,-7.044635537287032,10.297779798425939,96.2,100,31,11,-6.907140003234828,9.147725974162153,95.8,111,39,33,-7.2606749736705,12.40942672150524,95.0,111,38,29,-6.999468439495235,10.816221485129004,95.0,311,72,75,2.579842252046424,0.9423288239653151,85.2];
var allabs = [0,3,523253,3,3,23,571771,3,4,2,605131,3,7,20,518586,3,12,3,477132,3,17,0,0,0];
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