var allpitches = [100,62,78,-10.91951375802582,9.658229077233553,95.7,111,31,33,-9.444556056224291,10.407342980494068,94.9,100,74,22,-2.408651812320864,7.467829558231427,94.6,100,100,76,-2.791881950488248,6.3538416215604725,93.3,110,52,74,-9.704560077198071,9.586928083810475,94.6,111,60,70,-2.4359123814065398,9.520986213615565,95.0,110,19,29,-9.32026618745148,9.36003200538612,94.9,311,44,41,-0.25397653551438837,2.855566173402468,88.2,100,69,0,-1.928272710113328,10.723166062086936,94.7,311,65,44,1.9077088319365199,0.9849559510299071,86.8,311,52,73,1.8107818845107642,-1.2071101867319518,87.2,111,34,23,-2.543248830502572,12.37876621130604,94.3,111,69,22,0.3308229807696516,9.269203167377281,93.1,300,20,86,2.0498700187665357,0.7875890087602309,87.3,310,38,51,0.8629637885565036,2.183295917970264,88.3,111,81,41,-1.281812629025508,7.38004381456296,93.8,311,88,100,0.2131523936667156,2.4914810134698477,88.8];
var allabs = [0,3,605170,8,6,3,600303,8,13,3,664023,8,17,0,0,0];
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