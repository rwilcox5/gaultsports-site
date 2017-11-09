var allpitches = [100,100,53,0.07431106768954172,11.415616138690742,95.8,110,77,65,-2.9824419775133157,11.604819403810465,96.0,210,84,57,0.12650351663626203,-8.329638780478035,82.1,111,100,46,-3.692364520688618,11.016293947728514,95.9,111,51,38,-0.38492791670039184,10.379833650711129,96.3,200,13,0,4.962043792283568,-3.8724082934704187,80.9,211,50,56,4.220687886088294,-3.0970115320742577,79.6,100,100,97,-1.8685623049922917,9.907056054655751,94.6,200,48,100,4.640208531897157,-3.223168783128612,79.0,200,0,28,7.361293848153963,-5.051589114143476,79.1,100,100,44,-0.034632883732834685,8.66863546328329,93.8,100,100,35,0.9182124879518185,8.27192571688306,93.0,110,76,37,1.718638829477093,10.005855566035718,93.6,100,54,100,1.2572030530182725,10.061573704785825,94.0];
var allabs = [0,14,543685,8,9,14,446308,8,14,0,0,0];
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