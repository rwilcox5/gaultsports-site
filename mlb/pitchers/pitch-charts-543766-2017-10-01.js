var allpitches = [110,39,45,0.683802896222136,4.5314487763059,94.7,111,61,66,0.9933813808433457,5.831883394862576,96.7,100,0,18,1.648697623057584,7.4880976762129094,95.9,111,49,47,3.374712295824004,7.054696647835851,94.5,311,43,76,9.705194588522698,0.5631234152801136,82.9,100,96,26,2.5111597222492454,4.04038498039861,96.1,300,80,100,5.8117060549971,0.638618300595194,84.3,100,30,100,0.9566927934914957,7.395263607985699,97.6,111,50,28,-0.44207340379776017,10.256409110748042,97.1,111,24,32,1.462658716155906,9.58832756859168,97.0,100,93,9,2.882038687382086,6.231613493033023,97.1,311,62,100,9.11666170321708,-1.347790257672738,83.6];
var allabs = [0,18,570560,8,2,14,660162,8,8,3,573135,8,12,0,0,0];
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