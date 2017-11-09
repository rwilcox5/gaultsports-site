var allpitches = [311,41,30,-0.974465882810182,2.268899933861209,87.9,300,100,76,-2.4676972056212607,4.621813923068136,89.5,111,6,66,-11.527041663746175,4.932184211667266,97.3,111,28,24,-7.346722537522881,9.792691773695838,97.0,311,74,97,-1.1094797104355767,-1.3503040010059248,87.1,110,18,52,-5.666028713141072,8.663146634041452,97.3,100,31,97,-11.919299765045693,5.0562071208401935,93.4,111,84,47,-6.463289525157032,9.205252074520361,97.9,111,7,48,-6.162376126601959,9.397266323056883,98.2,300,100,64,3.1459708037254766,2.8417310432784486,85.9,311,52,66,-0.03464396307695691,3.303830211808508,87.2,100,0,24,-9.172580851985039,6.343342739974573,96.5,311,89,96,-2.0118642677881056,5.091954692385539,88.9,100,32,76,-13.714824375307389,4.931188743912842,97.2,100,0,21,-10.359633223093521,7.767591632542002,97.8,311,66,68,1.4439770072148237,2.1285076908752365,88.7,110,11,24,-5.030708334396199,11.50473068208132,97.5,300,96,86,-1.6847596121820185,2.882192287973183,90.3,111,67,34,-6.893222716217123,8.656615619646006,97.2,110,50,40,-8.010810357240414,11.460218434758012,96.6,100,3,27,-9.634617333009086,5.8051382846441975,96.0,300,100,94,2.8634857991366487,-0.5458332286371201,88.2,300,100,67,2.061162187261058,2.6145251379201313,86.4];
var allabs = [0,2,621035,8,5,3,641355,8,9,2,457759,9,11,20,624577,9,16,20,571771,9,19,6,523253,9,23,0,0,0];
var num_abs = 6;
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