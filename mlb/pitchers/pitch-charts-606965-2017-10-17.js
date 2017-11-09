var allpitches = [100,100,92,-6.069121182868233,11.422333322974332,94.4,111,29,42,-7.557856890487125,11.97653294825877,94.9,400,90,96,-10.277695987885114,4.380226991768064,82.9,300,100,100,3.6252111583207975,3.5695422201711855,81.9,111,38,34,-6.8023609788836605,10.154798824335746,95.6,111,41,77,-8.05312254266253,10.604616752152728,95.5,300,0,68,1.4111080249434753,-1.1515994330237935,80.3,111,65,34,-5.535506007748849,11.162957419695292,95.9,400,74,93,-9.191487557862448,5.018010374246009,82.2,411,70,99,-9.864464972009603,3.7224968722072176,82.2,400,100,92,-8.18671904357781,6.642197921450904,85.1,400,95,100,-7.509639721379939,6.516758521861928,82.5];
var allabs = [0,22,544369,7,2,2,596142,7,6,14,595885,7,12,0,0,0];
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