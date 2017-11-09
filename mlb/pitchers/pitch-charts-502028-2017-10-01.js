var allpitches = [111,57,35,-3.734264289198124,9.379708478160811,96.1,311,79,60,0.7570350027727295,2.7212437598355947,90.1,311,74,88,1.757436485564098,3.449325332910828,90.3,111,62,50,-7.041125847753973,8.491384718495244,96.9,311,88,80,1.7503579477330207,2.2369237485232687,90.4,111,97,39,-3.040053969377851,10.44745887417311,97.2,311,29,50,1.5521931672673206,2.652773658760432,91.9,411,72,100,-5.439369142856473,-0.26530629639292835,83.9,100,0,9,-8.539688698044847,6.305136071792226,95.6,111,54,48,-4.36248918695656,9.520082897286148,95.6,411,59,69,-3.9009381198787536,-1.0014764360590522,83.9,411,9,63,-7.221354477943561,0.022132470636379006,85.2,100,100,40,-2.423454164672651,10.992004958103113,97.1,100,69,92,-2.7587916381840185,10.749185674062879,96.3,111,35,37,-8.848629993130984,9.598970191566163,96.8,311,65,57,1.4606946154429308,4.678503609590471,90.7];
var allabs = [0,20,600301,9,2,3,443558,9,8,2,572122,9,12,21,596129,9,15,2,493596,9,16,0,0,0];
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