var allpitches = [100,0,57,-8.445938227134432,7.148965886108952,97.9,100,0,25,-7.630951978753835,7.73900192212494,98.6,111,41,44,-6.801965135933616,8.934070726481687,97.0,111,52,56,-8.112209921077213,8.23573250506686,98.3,100,56,9,-7.445894015622923,8.741534650030356,99.2,111,44,72,-7.5595968412342325,9.128037510524052,98.2,311,61,44,-1.1757510782822245,0.7084431298376316,86.6,310,11,75,-1.8748324760351283,-0.24441772754199237,85.3,311,54,83,-2.1489690432920643,1.913415109115892,86.4,111,32,51,-6.262353439873753,9.920859079209924,98.5,300,31,100,-1.45798576064742,-1.0938911972956595,86.6,300,58,100,-3.5291734003991997,-0.20367318495302877,86.1,111,66,63,-7.463709467593043,9.703546977923784,97.9,100,3,28,-6.739004960147088,8.245831199595012,98.1,111,8,54,-5.840676620994325,9.906277091712084,96.5,300,63,100,-1.4621458013115238,0.1994542789427892,85.7,100,59,99,-7.751213836809636,10.61014895143704,96.3,111,3,27,-7.26446291089848,7.078578488891916,96.0,111,0,28,-8.52067174707564,6.94989035323308,98.6,111,86,33,-4.967433473214612,12.24082298057976,97.3];
var allabs = [0,2,519048,9,4,20,543877,9,6,2,646240,9,7,20,598265,9,13,3,593428,9,20,0,0,0];
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