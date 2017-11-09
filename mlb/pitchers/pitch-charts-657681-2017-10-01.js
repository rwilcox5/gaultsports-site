var allpitches = [100,0,18,0.015773783277090846,14.943229620633968,87.3,410,33,49,5.4049338960998075,14.294096502714305,79.2,410,19,72,4.79439429968644,14.332545594629122,79.1,100,0,26,0.39976205225850814,14.523352004032464,87.7,111,48,42,1.4638866285981398,14.987129092572687,88.0,111,48,30,2.105093198856265,15.035919057027087,87.3,100,19,0,2.0914412661044395,12.178787812849707,86.6,110,9,30,0.6486127476065227,14.600968657995935,86.8,400,21,0,5.7449284159097616,12.884015038946075,78.5,400,73,0,6.249221994657372,12.287663114745676,76.4,100,44,17,1.995885522487323,14.201297714381152,86.6,400,26,0,6.1330098976904175,12.368802531244299,77.3,400,0,69,5.4052508336818565,14.198253671063046,78.1,111,33,42,2.2378940725455663,13.907274876939772,87.3,110,12,64,1.7253080650293517,12.966568298652302,87.3,411,17,44,5.121742144546676,11.989993210388445,78.9,400,0,55,3.447679372020039,14.216431633658262,79.7];
var allabs = [0,2,605412,8,6,14,452655,8,11,2,624507,8,16,6,543063,8,17,0,0,0];
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