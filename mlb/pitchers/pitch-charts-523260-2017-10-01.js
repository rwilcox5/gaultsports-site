var allpitches = [111,52,24,-7.04906615621754,9.104029573766628,98.9,111,68,32,-7.584306321532619,10.368781254023917,99.7,100,59,0,-7.710597819182917,8.38626841097286,99.5,211,78,40,-9.15067198594746,8.652122986996847,83.8,210,43,54,2.553158270020344,-8.241717442801379,84.4,111,38,25,-8.98535463149712,8.446793060887428,100.7,111,59,45,-8.514826312373401,8.990161907377152,100.8,110,83,31,-8.696949149283707,8.403295349672568,99.8,200,0,0,5.31750524431344,-8.7679271505198,84.2,200,0,5,5.212395404066028,-9.198659759803391,80.8,100,100,58,-8.984584440887701,9.951644532316896,100.6,110,71,84,-8.916186758104427,10.079428168149505,97.0,111,57,65,-8.658122045231831,9.102798071583575,98.6,100,100,76,-10.494696141840492,7.881966435268296,100.0,100,62,100,-7.670091885392892,10.662267767621412,98.4,111,44,54,-10.019164189984643,8.195305642598749,99.1];
var allabs = [0,3,518542,9,4,3,605233,9,8,14,592567,9,14,2,643393,9,16,0,0,0];
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