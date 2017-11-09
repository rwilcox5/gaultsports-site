var allpitches = [110,21,71,8.235547229400648,13.63497233127912,90.0,111,64,36,4.138267995424056,12.160634600926802,91.4,100,95,13,5.914589995617312,9.367303737724873,92.1,100,0,68,7.2449362046900525,12.497776862390161,91.9,111,32,55,6.466781785335852,12.82514548334856,91.4,410,68,78,6.2919916857765115,12.628805842409882,83.8,100,100,44,6.839387888168652,12.842814708178201,91.5,410,64,63,4.620534537358992,11.864842083838727,83.8,111,21,48,5.323004011031568,13.657661018834759,91.9,111,55,57,5.073066529315464,12.861002661994561,90.6,411,10,96,-2.773865863066356,-7.693353372553932,75.8,411,9,53,-5.03196856384212,-7.140607005133308,76.0,100,0,100,6.104818419167532,13.13362213892628,92.3,400,0,78,-6.467618078544397,-7.289822805534216,76.6,100,0,43,8.295886534306332,11.92850853853776,92.3,111,68,12,4.005005276210916,12.802889425828681,90.8,111,56,7,8.951343974022636,13.114044220867559,91.4,411,21,13,-3.865595873830536,-3.3971207546487117,76.6];
var allabs = [0,20,446653,5,5,3,607208,5,10,2,547180,5,18,0,0,0];
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