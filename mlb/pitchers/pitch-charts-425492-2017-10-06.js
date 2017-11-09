var allpitches = [200,39,9,2.4071502501950293,-4.616241914154227,82.0,211,73,57,0.7147208497861604,-5.418243311750391,82.9,111,1,26,-9.530482993350121,8.548225916517008,96.9,200,37,0,1.9763296006284294,-3.1912759417299164,84.5,211,0,19,3.2014788437561794,-4.401408019721837,82.6,111,22,0,-6.2649284663739975,11.343473801779927,97.1,111,48,40,-10.117412459574645,9.906647144109883,96.8,111,9,24,-9.62727994639696,9.610788452027748,97.1,111,35,38,-10.578101855344585,8.14712134872078,97.5,411,0,59,-8.629163388746981,5.9230797934176325,85.2,111,14,52,-10.974021835851739,7.221290032707091,95.5,100,29,6,-4.546426109041246,9.336206772511401,97.9,110,32,38,-9.641659360716023,6.888628640644274,96.6,400,59,100,-9.308223506185598,9.132808266977365,86.3,411,14,63,-7.510138459237833,11.21796494196339,86.5,111,55,40,-8.947454245484554,11.511718732395586,98.7,111,32,43,-9.735828386449448,8.836935243006899,96.9,111,63,51,-9.437712756458819,10.228314632973515,97.0,111,33,39,-11.07599056671805,6.331333106641994,96.6,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,,100,99,23,-6.714307544559991,12.039601811288598,96.7,111,39,19,-10.372339648105651,10.37532586367285,95.8,200,36,0,4.03411401673765,-3.3181154107484723,81.8,111,80,35,-9.130219211573209,11.324970662738256,96.2,210,54,36,3.450026447006374,-2.6046772441077595,84.7];
var allabs = [0,21,445055,8,7,3,450314,8,10,2,592178,8,11,21,519203,8,19,15,575929,8,23,3,547982,8,28,0,0,0];
var num_abs = 6;
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