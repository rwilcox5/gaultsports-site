var allpitches = [100,53,20,-6.784373307244305,6.324151845157587,90.9,300,100,93,2.2825376585937542,-0.6673442711687163,82.1,110,54,47,-6.335357056098756,5.846008887715856,90.6,300,92,100,-0.3356354330543868,-0.9180758483288667,84.4,100,0,39,-6.479508495826357,6.230919036912358,89.9,111,65,86,-6.389373930867029,4.516847475423726,90.6,110,58,81,-10.92261031193075,3.680361717065856,90.6,300,100,100,-0.10946582814045903,2.195047785843017,83.1,111,13,76,-6.946779839342833,4.446381612317605,90.1,310,57,73,0.7710044244258571,-0.5278922058886184,81.9,111,100,82,0.7988869194717225,9.258020997427938,89.7,300,100,100,0.16390018838240766,1.2320935774633939,83.2,111,100,72,-0.3615779991311825,6.8682952179181935,88.8,111,24,75,-8.250407948067362,4.561977344727731,90.7];
var allabs = [0,14,516770,8,5,2,543305,8,9,2,453943,8,14,0,0,0];
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