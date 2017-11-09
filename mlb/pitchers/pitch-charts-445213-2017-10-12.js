var allpitches = [110,25,36,-11.727903829185312,9.654771322777716,93.5,400,8,80,-11.783122061288413,8.75278901030946,88.4,111,59,7,-6.356016013397111,9.270905432613564,93.8,100,79,73,-13.13579915290008,5.553950804649563,94.2,111,8,52,-11.044537957098996,7.203361432978644,94.0,411,7,44,-14.23284198288324,7.3326406401369235,88.7,100,3,38,-11.217992060560297,6.363731782879151,93.9,110,71,40,-10.435954497043967,7.2042437571576246,93.6,111,0,50,-14.10094784254752,7.6018581300063115,93.7,111,14,7,-12.53487853157484,9.247201146828107,94.1,110,12,66,-11.484719271096695,10.256425371992377,93.3,100,16,82,-10.705319445413425,7.780163483538336,93.6,100,0,54,-8.466798782348928,8.02236310526311,94.0,110,67,15,-11.28740908081236,9.314461957847183,92.9,100,29,90,-11.352550569256847,8.913551429778888,93.4,100,68,81,-11.006416627718892,9.964609456977168,93.4,111,8,58,-12.630050003472121,11.044836417176196,94.2,111,56,24,-11.545841061159576,5.2418478044714885,94.2,100,100,0,-6.580429942566336,9.664529006214504,93.9,110,76,24,-9.784973610464029,8.742817980162288,94.3,111,26,58,-10.489566283833875,8.413164151996188,93.4,400,61,100,-13.509562785693,10.089365022143351,89.6,111,73,38,-9.255434071677817,7.403112042407615,94.0];
var allabs = [0,2,519203,6,6,2,575929,6,10,14,450314,6,16,21,608365,6,17,2,518792,6,23,0,0,0];
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