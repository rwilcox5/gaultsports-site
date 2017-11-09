var allpitches = [110,80,61,4.194308284826472,12.56079027459888,92.8,111,4,16,3.052108671016188,10.391767592877947,92.8,311,31,51,6.882519679335445,-1.4626807984819081,82.2,311,90,100,6.038481464243484,2.027110636767516,85.3,110,19,74,6.385041426370801,10.451505067757171,91.2,100,100,0,6.912046846904195,14.296711843270321,92.0,111,100,40,6.2116983667374,10.092488055463129,92.6,111,25,34,5.302629913523724,11.842017644059416,95.2,100,40,100,-2.747907316075824,15.230757440841721,96.4,311,78,100,5.469215768343732,0.7497609854502516,83.9,111,43,53,8.748810142268017,13.70149595155812,93.7,100,93,86,2.36400282529008,12.3238233419268,95.0,311,15,69,4.710612212971452,4.814522803760304,83.6,111,6,65,-4.303979686772844,12.38664224721132,95.7,111,73,57,4.365702884087952,9.8182293743676,93.5,110,77,62,5.135785304869488,12.0168872108496,92.8,111,81,52,4.472639462844144,12.753219861641881,94.7];
var allabs = [0,3,592178,8,4,3,519203,9,10,3,575929,9,14,3,664023,9,17,0,0,0];
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