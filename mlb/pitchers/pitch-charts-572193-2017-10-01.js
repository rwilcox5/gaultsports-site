var allpitches = [111,76,44,-8.988838631996252,9.721100121278962,95.8,100,100,57,-10.381249838805052,10.945345505324449,95.4,100,100,91,-0.3158451772946931,4.6338237484987905,90.1,111,57,61,-9.633606488435964,9.80063233417553,95.8,100,87,12,-7.495220803787706,7.779555384575062,95.5,111,100,54,1.1112477384134423,4.54135051048166,88.9,110,12,57,-10.719807300606092,9.841745153571148,97.2,110,29,69,-12.166859673498166,8.049890948050379,95.7,100,0,70,-8.739720775803159,8.80723383082701,92.6,100,90,100,-11.80518472467657,8.216568460560596,96.5,100,63,99,-3.2455621643776587,1.2663498172684269,88.9,111,100,77,1.8256141645170145,2.572235863668482,89.5,111,100,85,1.3986950989537186,3.9907874961606913,89.5,100,100,99,0.8402472380014918,2.4100120842169175,89.9,100,100,100,0.7485139242357296,2.8566536129357663,89.6,111,82,54,-10.431711448299279,8.987491442082424,94.8,111,100,70,-0.9785444674730137,4.5834795509051105,90.5,111,100,81,-0.8545018211053219,4.980801041074071,90.5];
var allabs = [0,3,592122,8,6,3,543305,8,12,2,591720,8,18,0,0,0];
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