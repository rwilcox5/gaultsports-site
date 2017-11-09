var allpitches = [111,70,33,7.573394293928267,8.659136956839443,90.6,210,68,50,-3.459250926714888,-7.594569006057216,77.6,411,37,73,8.382867512138017,5.473475418603853,81.1,100,68,0,5.501916199681524,6.262090621915764,92.6,100,80,18,6.328993883254452,6.094409043269124,92.1,411,79,50,7.465369937093941,3.906203286192948,83.5,400,34,91,5.173430538406908,9.049188808523231,83.7,111,93,46,4.411712834247156,6.646822013630964,89.9,210,70,18,-2.8986408297949677,-6.126550136214588,77.3,100,100,15,7.63817952044964,5.227858874079276,90.2,111,63,29,6.99333261406176,4.80830771998818,90.3];
var allabs = [0,20,518542,7,1,2,605233,7,6,20,592567,7,8,20,643393,7,11,0,0,0];
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