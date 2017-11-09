var allpitches = [110,35,49,-4.157708431060076,8.372551929038396,95.1,100,62,92,-7.436117479064926,3.480321886299675,96.4,110,44,83,-5.828589718994837,8.068137530311452,96.2,211,72,49,2.286419112961518,-2.8658063553226762,86.5,111,4,12,-6.897528440239403,1.699151496300394,94.7,300,100,100,0.7646581087648836,-0.15432058893597406,85.8,111,51,74,0.6938486184715532,2.462324537988619,91.2,111,36,53,-5.3843755037762175,6.774742457276325,96.1,100,14,5,-4.317014172363842,6.046504811126882,94.4,110,31,56,-5.095168831275591,8.241241897276922,96.5,310,31,21,6.127528775457535,-0.9779420005967019,84.5,311,100,76,6.970185927932743,-0.3259940328423725,85.8,211,72,70,6.1461791301736355,-3.570403974755759,84.5,110,53,42,-4.099467987317833,8.117280140641917,95.2,111,100,74,-0.4162390974423659,8.565357726256678,91.9,111,57,46,-3.8631646917421705,8.185300863292964,96.2];
var allabs = [0,2,456030,9,8,2,646240,9,13,3,506702,9,16,0,0,0];
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