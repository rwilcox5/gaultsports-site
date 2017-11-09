var allpitches = [111,45,31,-7.866979850633941,7.775167744456334,91.9,300,100,94,0.8207335194987588,1.7309593263110092,88.9,311,30,71,2.7195566184970996,0.15663049823764957,85.4,311,81,91,2.1440405155451545,3.890444272871676,88.4,100,0,89,-9.425889494972019,8.093738129892863,96.0,100,97,79,-5.703202114047826,11.062635522109261,95.7,300,32,82,1.5673013352296556,1.6268816884303399,86.5,100,100,41,-7.26361026133179,10.147958563799502,95.6,300,96,100,1.7058879209565756,4.822864467078611,90.0,111,41,30,-6.363611142465853,9.210757792339711,95.3,311,59,67,-0.04001918512591174,3.4655964783445024,89.6,111,93,53,-5.6966214169442155,11.325325862254092,95.1,400,0,76,-7.2251439929990955,2.450116745270328,88.4,300,97,79,0.6188888084596437,6.453695094391268,90.3,300,100,94,1.6639199619617484,3.398892217005767,89.1,100,86,100,-7.172986375949771,10.419639043965258,95.9];
var allabs = [0,21,650490,7,3,2,543228,7,4,14,596019,7,8,2,656185,7,11,14,608070,7,16,0,0,0];
var num_abs = 5;
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