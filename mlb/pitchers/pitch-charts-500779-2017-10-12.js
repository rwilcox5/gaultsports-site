var allpitches = [111,55,42,10.390984385546737,9.856917771245964,92.4,100,34,100,8.793168587130216,13.350349407818639,93.4,111,41,39,9.544622051137765,11.722254283167144,92.8,400,16,91,9.656465567996376,4.5211732581607915,87.5,111,68,51,11.491745685963659,9.77725461479892,94.1,200,35,70,-4.449991091742804,-3.635452051230912,78.6,110,57,64,7.068134832820572,11.217226980615228,93.7,400,100,37,12.41604810748116,5.765593430902128,87.5,100,100,54,7.816299246685489,11.069985718661089,92.9,100,51,92,8.031641381752705,14.18016931747248,94.4,110,56,64,6.224294933628217,11.240898042959651,93.8,211,26,33,-9.790793689752936,-1.7414418703369319,77.3];
var allabs = [0,2,446653,7,1,20,607208,7,5,14,150029,7,10,2,547180,7,12,0,0,0];
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