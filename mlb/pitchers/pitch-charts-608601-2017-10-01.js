var allpitches = [100,42,5,-8.7803898843015,8.158208128875858,90.5,111,25,47,-9.82143970606215,10.76767108675012,91.8,111,20,42,-10.0300748467989,9.232850108374366,92.9,110,72,72,-12.111600271507328,6.232360125890716,92.9,100,1,93,-10.10307075080978,11.160257651975083,88.7,410,39,79,-14.157754788087113,2.697076838822718,84.1,100,81,41,-11.554411498328133,5.984903335911305,92.7,211,86,62,1.506750001991699,0.6186879454469424,83.0,400,0,100,-14.188126292678557,7.281796394572943,86.3,211,67,42,0.9465363568508759,-1.185927167358447,83.0,111,32,54,-7.56409536497892,11.600366466484811,93.2,200,100,74,0.6974520092948983,2.0022799664870847,82.6,111,8,12,-8.440010980396316,12.056835979833437,93.9,110,94,42,-8.140678246861274,6.675843123378746,94.2,400,93,100,-13.537564530520802,4.984804416314747,83.8,411,53,62,-12.548028503000772,2.1156332975420415,84.0];
var allabs = [0,3,592122,6,4,2,543305,6,11,3,591720,6,16,0,0,0];
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