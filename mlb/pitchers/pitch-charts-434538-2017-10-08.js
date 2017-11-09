var allpitches = [111,65,72,9.39615497563118,8.273188470438614,94.2,311,39,51,0.5023985792739295,5.472042246138269,87.1,110,54,80,8.64497100754138,6.648728725383103,93.6,300,47,1,-0.847685986829011,1.8153848364972975,84.7,311,34,71,-0.06851043183607625,1.8280899426775994,85.3,311,40,91,-0.06198951734584873,3.7238971466168973,85.6,100,100,32,6.433547173038221,6.433912658162584,93.7,110,54,26,8.545593066723518,7.482937850876784,95.2,111,97,70,10.08681255968484,6.527078503945521,94.2,100,58,89,7.563975691430859,6.223789294791457,95.7,100,79,7,7.490207504698118,5.537962260177766,95.6,111,26,50,8.14248901396535,8.4560508190181,92.8];
var allabs = [0,23,646240,3,2,20,506702,3,6,2,598265,3,12,0,0,0];
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