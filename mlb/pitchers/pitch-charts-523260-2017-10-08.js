var allpitches = [200,97,62,1.776239792704542,-1.0663312267345475,87.3,300,97,100,1.4135058178827937,-0.5597740377562723,87.9,311,61,62,2.442243027653457,0.01113776363357598,89.3,100,22,9,-6.660557453541642,10.289997001060058,98.6,311,61,85,2.569516100053334,0.6295242184302896,89.9,100,8,1,-6.960622065625515,7.594185953089212,99.1,411,44,64,-8.74315044225288,4.6816291395367085,85.9,111,72,48,-8.423770943391322,6.913965894071483,98.1,300,93,81,0.00516195174901081,1.041052158088288,87.6,111,54,56,-6.746465050526933,9.219070450037965,99.4,311,84,67,1.507954046749507,0.11443792658538751,87.8,200,41,99,3.8087877626750704,-5.208558792136254,85.3,311,74,91,4.374131678629175,2.391661625371667,88.4,111,16,57,-7.698066369978337,9.949466036687731,98.6,100,48,100,-9.946256287069861,10.234406764637637,99.1,110,66,64,-8.72520869519629,8.234783269761369,98.1,111,50,57,-7.776798936443876,7.7014326129889366,100.0,111,84,80,-7.078039032499653,9.048331480030186,99.0,100,15,0,-5.8767104065333,9.379038581414243,98.7,300,88,100,1.2328688087930202,0.6150122852889317,87.7,311,38,45,0.577249786311405,0.9511474061631249,88.9,111,67,27,-4.875315269311847,8.385104931704962,100.0];
var allabs = [0,2,543807,2,3,2,502210,2,11,20,514888,3,13,2,621043,3,14,20,503556,3,17,2,608324,3,22,0,0,0];
var num_abs = 6;
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