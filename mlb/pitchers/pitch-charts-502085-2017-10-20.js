var allpitches = [300,100,100,1.6445095408117476,0.5782222038937144,86.6,111,53,94,1.675563625003325,6.815423646843925,91.6,111,83,33,-0.25917169326402095,6.765301350070324,93.0,200,100,100,4.818378504301499,-6.173129215169233,84.2,311,65,90,2.725237504719496,-0.557068704779133,85.5,111,30,43,-0.6769560697028425,5.4873689263766705,90.8,100,0,47,-0.167076651825498,9.32440046722921,91.3,211,35,98,6.837759203582569,-9.015325887690423,81.6,111,53,61,0.49222762297330963,7.706691327873857,92.4,110,28,59,0.17931375917208456,8.014503101697088,91.1,100,87,100,-1.3439515052717208,9.136121659471124,91.8,211,41,90,2.472951273440761,-2.2773466575591237,85.6];
var allabs = [0,23,514888,8,5,21,621043,8,6,20,493329,8,9,21,608324,8,12,0,0,0];
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