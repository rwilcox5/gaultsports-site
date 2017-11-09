var allpitches = [210,51,65,3.1938488695150724,-7.986653430321102,74.4,100,100,54,1.4757640462001838E-4,7.0896364692330565,86.1,111,59,27,-7.477239169988255,10.384367466549536,88.4,211,53,64,3.6705230919160794,-4.518024480310245,75.5,100,4,68,1.198284681510042,4.7550376997505825,84.6,100,100,78,1.820515816475011,6.647989090403174,85.9,211,48,59,3.9561277316140524,-5.4064384090661175,74.9,200,37,96,2.287081925560816,-7.914351097960433,75.2,100,93,28,0.6202941501155614,4.490303821516916,85.0,111,70,74,-0.6172119011809545,2.997727139235325,84.6,110,49,78,1.2061955255768344,6.314862419677403,85.5,111,54,57,-0.7953380888547599,3.249361063438756,84.1,100,92,88,-6.177224351664735,9.708297236802974,88.2,211,39,71,2.722941199595712,-5.414049444556676,75.5,111,51,36,-8.008138622226078,5.712990340098305,87.9];
var allabs = [0,3,596142,8,7,2,595885,8,12,2,516770,8,15,0,0,0];
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