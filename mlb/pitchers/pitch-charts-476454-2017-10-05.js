var allpitches = [211,50,31,5.866482534529263,-2.7524652294101584,82.0,210,77,31,8.95433979494746,-0.6657452946081078,83.8,100,8,0,-4.520515667437141,9.442686958432343,98.0,110,80,57,-4.707172038734147,10.668050169417075,98.5,210,40,62,6.259902864185028,-0.10157570068938562,81.8,111,48,44,-2.721707377474674,12.469189204656862,97.7,311,37,45,6.644562831661214,-4.4030819183884535,86.7,111,61,24,-2.465012141747627,11.298706918837503,98.0,210,20,32,7.087370068861192,1.0167732320317155,83.3,210,36,45,9.222425880909547,1.3898560827147788,84.7,310,30,66,4.787703532139418,-5.773473031751592,87.2];
var allabs = [0,3,467793,8,4,3,457706,8,8,3,547379,8,11,0,0,0];
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