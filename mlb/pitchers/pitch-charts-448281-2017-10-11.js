var allpitches = [100,57,75,3.314682201651864,13.598907722186222,94.4,110,30,35,4.067010593840093,13.025030026035214,94.9,111,16,79,1.1753574836577303,12.435674045698672,95.2,111,37,0,5.704920099588018,12.710896440150941,95.4,110,31,48,8.340172023244998,11.524306190528662,86.1,111,53,54,4.436959870228952,13.261174231970003,95.2,111,84,50,6.285679957957358,11.421313434208818,95.0,100,100,50,5.684171062229618,12.325942094452756,95.3,100,44,2,2.2018551835925453,12.251467956070814,94.8,111,26,32,3.1379175206067376,10.724275816389905,94.2,111,26,23,2.8412890255442287,13.089006980304903,93.6,111,72,47,7.139371684976487,13.733036780034304,95.7];
var allabs = [0,2,575929,9,4,2,450314,9,7,3,608365,9,12,0,0,0];
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