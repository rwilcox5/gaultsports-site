var allpitches = [111,59,85,1.6691181245241615,1.30320371834731,87.6,211,54,90,1.6272611288990313,-5.656885857090397,83.9,211,74,91,2.2901322183427277,-7.521627162981828,85.4,200,52,100,1.28467751107616,-5.996156689419744,85.7,211,42,92,5.069164946869417,-8.740595182182583,84.3,200,49,88,3.288697311277231,0.5080988993244003,86.0,210,73,29,3.606556261532938,-1.1984741588678935,85.1,211,51,80,2.4056987574824964,-8.472553786778068,84.5,200,100,100,2.219018430512728,-8.186842864668947,86.0,211,36,50,3.446742951098334,-0.499368575720461,85.1,210,47,81,4.579688810465775,-8.164260998284995,85.1,200,4,71,6.93050561791307,-8.314385087083519,85.9,211,33,34,5.341274939509336,-10.819096887482157,82.2,110,68,41,-0.9158958533927877,10.386342686100955,92.5,111,65,56,-0.8642243443527968,7.560330745003924,92.1,210,25,56,2.764209052467706,-8.11197301463463,84.8,211,58,99,3.9511287015791634,-8.913520817720215,84.0,210,8,37,6.037908850862271,-7.969001906164172,83.3,111,53,69,-0.40317889742029306,5.69418411480239,93.5];
var allabs = [0,2,621043,7,1,3,503556,7,5,21,493329,7,10,2,136860,7,13,2,608324,8,15,3,435263,8,18,2,543807,8,19,0,0,0];
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