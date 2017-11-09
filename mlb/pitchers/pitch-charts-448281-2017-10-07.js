var allpitches = [110,47,35,5.020063372599134,12.933462171145626,94.7,111,17,22,4.454685887472971,15.31594384160272,96.2,111,29,3,6.013041956553639,13.039311380279978,96.5,100,22,0,3.2562511677895083,10.665781154390789,96.2,111,54,6,1.7138330252732716,10.88506146918808,95.9,111,16,50,4.758884285454834,15.576928985397075,97.1,111,52,0,5.802283794131802,13.09630086765845,96.4,111,35,62,4.217477989800477,14.075223620939845,95.9,100,21,100,9.253092951733322,11.716345981393388,85.7,100,66,0,9.768532177419566,8.709270940932068,85.7,110,41,25,4.767762169566789,13.257757056249957,94.6,111,46,57,3.075817946642279,10.765210398292723,94.3];
var allabs = [0,3,575929,9,7,20,608365,9,8,2,450314,9,12,0,0,0];
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