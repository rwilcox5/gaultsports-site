var allpitches = [110,57,49,1.2390778864125835,3.9197421132009698,89.4,400,95,87,8.949091460480348,5.112263280330117,84.8,411,83,72,6.031887330602601,3.395292790412996,85.1,400,100,84,4.82453862074926,3.6341241886812323,84.7,411,34,100,5.744305004769295,1.438969333741506,85.9,200,100,30,-9.667682699221782,-3.3243143893956986,73.2,410,85,75,5.572478083202554,0.5937756811691497,83.9,411,91,54,6.254303994676819,0.05624314748059733,84.3,411,91,76,8.101411347349188,1.4800294538888228,86.0,210,73,61,-11.710912418325853,-0.04646867185866439,74.4,210,63,41,-9.36930443757515,1.2718835253316731,75.3,211,51,61,-9.897704158422204,0.2505728566257881,75.2];
var allabs = [0,3,452104,7,5,3,543305,7,9,21,458731,8,12,0,0,0];
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