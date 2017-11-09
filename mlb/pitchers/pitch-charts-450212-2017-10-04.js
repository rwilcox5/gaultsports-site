var allpitches = [310,77,83,-0.8659065876623209,1.615636895924892,82.2,311,57,74,1.4594224563029758,-0.4479019474738836,83.4,110,60,49,-11.052928286752968,1.9730387317134959,90.5,100,0,85,-11.382670187641692,4.809411336784212,90.2,311,10,26,1.348524459222324,0.695639099818596,83.5,111,47,52,-10.142566543724975,2.14966337260974,91.1,111,23,56,-12.01099169197404,8.31298339090548,89.5,300,93,91,0.6132152144487361,0.7747109911265965,82.6,311,44,53,0.008548164994454028,1.2625155155634,83.0,300,12,91,0.6910136630617381,-0.9944852340676404,83.4,300,0,69,0.9989276520067812,-0.2113536110681712,83.4,300,74,94,-1.0387739735340793,2.7872544802758243,82.9,100,66,100,-11.30410517901486,1.8516035631373682,87.6,310,51,48,0.8456062825888224,-0.152156377180254,81.5,110,74,77,-10.645962587933052,0.2884696474388328,89.4,311,90,63,-0.8566694497017721,0.7389193221655692,84.2,311,87,47,-1.303223677082448,-0.3979858637593272,83.8,300,100,74,-1.253480791750692,-1.576532364623028,79.8,300,7,53,-0.2537631215531928,-0.9411786036327325,79.7,310,22,66,1.7511073480597799,-0.09565952584768872,79.2,110,72,58,-11.218039610506946,2.465164550501436,87.2,311,71,42,0.8943302218095577,-1.1386770939548856,81.3];
var allabs = [0,2,502671,6,2,3,502110,6,6,20,571875,7,7,2,572041,7,9,14,518614,7,13,3,425772,7,17,22,605151,7,22,0,0,0];
var num_abs = 7;
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