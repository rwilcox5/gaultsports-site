var allpitches = [100,69,0,-8.30129263196243,10.93137593902626,92.4,311,45,41,-1.7978947890406198,4.404442193723196,82.4,210,50,46,-1.380801349381116,-0.09153645977231231,78.1,100,57,0,-5.51734624881564,11.42388513527124,92.9,110,46,74,-7.122851702231556,14.313807402969719,92.0,311,27,66,-0.7896337717098493,2.3788816999452,83.9,111,94,28,-7.285047310928077,13.471395963732359,93.2,400,18,12,-7.86695493590406,1.3060774487609281,83.5,100,0,28,-4.18578604640544,11.30906302479444,91.3,111,28,39,-6.267296007644903,13.17695786070684,91.1,400,53,100,-11.037528492140664,5.783167044626436,84.0,111,47,83,-9.453259348846524,11.924608608855204,91.1];
var allabs = [0,2,543089,6,2,2,546991,6,7,2,502273,6,12,0,0,0];
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