var allpitches = [211,28,77,6.021717124010762,-8.464927423515602,74.1,100,54,0,-3.6365838859217456,9.970074727939066,91.6,211,63,75,7.138108512530632,-7.286693047640343,75.1,100,47,100,-3.7279813804602124,10.782045315039442,92.2,210,25,32,9.308131401450444,-6.238246043591419,75.0,511,43,100,-9.617714498702714,2.5356146441136267,87.3,200,41,100,5.8688666726302445,-9.260587984589847,75.0,111,27,37,-4.177695933299734,13.569242051838348,93.4,500,54,100,-7.989195962789177,8.451405120117343,88.2,111,59,59,-5.909686337935131,11.736979187440827,93.4,110,93,61,-4.687446011989459,13.01715158675984,92.5,211,72,79,5.131158513090362,-9.476085452271438,73.2,210,24,83,7.376733419898344,-8.870208116105594,74.2,511,49,83,-8.671595642412974,7.165510024535148,88.2,100,95,56,-3.6719492527937034,12.96252992387554,93.5,100,91,74,-4.935040030279987,12.259230216187284,93.6,200,60,100,5.682964411967104,-9.454585305046933,75.2,110,66,43,-3.2725290302449292,10.471803873753263,93.7,111,81,56,-2.290274386442813,11.438090303207277,94.2,111,72,40,-4.314861294855152,8.758846258220576,94.5];
var allabs = [0,2,518692,7,3,20,455976,7,10,20,572669,7,12,2,547004,7,14,20,621020,7,20,0,0,0];
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