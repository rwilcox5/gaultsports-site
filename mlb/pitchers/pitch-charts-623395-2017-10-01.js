var allpitches = [111,25,40,-7.731560050890735,10.447065821047623,98.2,400,0,11,-8.13143567094288,6.968238338962081,85.8,100,0,10,-7.802056509527523,10.964935758450693,98.8,100,0,25,-9.144697014686972,10.099050375551098,97.7,111,35,43,-8.426484435666206,7.017797858178092,97.4,111,46,21,-6.002168603981101,8.474126928265466,96.9,111,5,37,-8.72235010789467,9.101143106771188,98.2,111,14,32,-5.7663302491908155,10.493485664589379,97.3,100,92,91,-7.856749073226717,9.988887498507681,98.9,111,64,45,-8.839371822322441,8.0576866831817,97.9,200,88,62,3.4509824855836966,0.766879807345967,86.9,110,53,74,-10.140795486819535,9.260770983454375,97.6,100,68,93,-9.079790199469087,8.922355339185366,96.2,111,45,47,-9.628289437833137,9.513280597908626,97.3,211,54,41,4.238177047593217,1.8172567644390643,86.8,100,98,71,-6.653403556110727,11.8305693165074,97.2,111,71,58,-7.594655872846339,11.80219995338401,97.4];
var allabs = [0,20,455976,9,5,2,572669,9,8,2,547004,9,10,2,621020,9,17,0,0,0];
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