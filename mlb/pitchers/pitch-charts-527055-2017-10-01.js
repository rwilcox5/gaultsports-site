var allpitches = [111,76,41,-8.247676688047708,9.376529705552674,98.0,111,57,40,-7.990127143859723,6.486223005269714,97.0,111,0,6,-5.684267784407426,8.586109682691141,98.1,311,25,20,4.381541374999014,-4.1206671761892295,86.4,100,0,68,-7.312031397080762,11.932315555373249,97.7,111,30,52,-7.387369036369594,12.205541295355278,97.9,111,9,67,-8.833340513829695,9.58269707766533,97.9,100,0,23,-6.653794963701026,10.478178120338306,97.8,100,0,47,-7.460955365489585,10.916936348414763,97.8,111,16,69,-8.426578846737762,9.41240851590006,97.8,311,56,48,1.2803364755960687,-0.13724102777490488,85.7];
var allabs = [0,3,519317,9,4,2,542303,9,6,2,592885,9,11,0,0,0];
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