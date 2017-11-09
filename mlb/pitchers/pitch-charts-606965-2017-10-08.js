var allpitches = [111,70,46,-8.61272715677,10.063767017796927,93.8,111,89,57,-6.648717628815428,10.915848051890762,95.7,100,0,37,-6.605169414214785,8.549016115243136,96.1,100,100,27,-6.670804101533928,10.218818018117714,95.9,400,52,100,-8.308708723275556,5.372488071779938,83.6,111,82,62,-6.155129109642271,9.42491171089817,95.8,111,88,40,-7.802467510053564,7.856353779261631,95.2,400,100,100,-7.271872768874275,2.3326502276425933,84.9,411,7,100,-8.461836431758995,2.1419022589390058,83.0,300,67,100,-1.8917913448302754,3.394037765852773,83.9,100,66,80,-7.765087203306694,9.438546692409584,96.6,411,0,72,-6.688912930698418,1.4016619799036465,82.3];
var allabs = [0,20,519048,7,1,21,434670,7,6,20,646240,7,12,0,0,0];
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