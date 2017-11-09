var allpitches = [311,86,65,4.681885813029273,4.996032089708778,85.9,100,0,56,-1.0374714251408261,11.023691395491149,91.7,311,70,77,3.7158889525277425,3.327610769577495,84.8,311,18,32,1.487781424392787,2.183934332485471,84.7,311,56,100,4.052108584125378,4.172493502800102,85.4,311,27,100,4.133043111429571,3.168087848801516,84.7,100,14,100,-2.605484673579215,11.043708349312956,92.7,400,13,100,-9.142084948118194,7.012731499747757,84.7,310,26,60,4.64143720568771,3.6975788338134143,85.4,300,16,80,2.858658055138548,5.361774386181614,84.9,311,60,52,2.5989641261373673,2.980246321177166,84.8,311,44,63,4.9407105508106,1.5808488129750509,86.0,100,2,62,-1.3868261101737627,11.897704967678905,91.7,211,42,92,2.9639323352161275,-3.736150518841531,78.7,300,13,26,3.9662268453161413,4.740161348805428,85.6,311,31,43,4.932477261299816,3.732431326026275,85.5,110,34,47,-0.831925035304895,9.723828903568524,91.6,311,100,75,3.9175663586466385,4.001281596294426,87.1,100,100,100,-2.0393537201232337,11.872519217628646,91.9,300,100,100,2.260257109741166,5.835985307199962,88.1,100,0,67,-2.955705179809416,11.951810932279333,91.9,111,12,40,-2.7506310449496434,11.43026532662785,92.5];
var allabs = [0,20,570482,4,3,3,596019,4,6,2,543401,4,12,20,608070,5,16,2,429665,5,22,0,0,0];
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