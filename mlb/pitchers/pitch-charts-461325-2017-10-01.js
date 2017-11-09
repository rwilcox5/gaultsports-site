var allpitches = [100,0,3,-2.6457226386270483,10.580413469013024,88.8,410,71,81,-9.344404170885984,10.680438571746,78.7,411,15,65,-8.846989848538188,10.094931370226112,80.2,111,53,36,-1.6349995712140202,11.88854345669562,90.0,400,0,26,-7.917755597125115,9.68304740028714,79.0,411,36,58,-8.74171241581482,8.843743841109191,79.1,110,38,59,-3.4065486539288283,11.111356863392148,89.7,411,19,65,-8.220531842405281,10.858075258908972,80.1,100,77,100,-2.256920246031828,2.024927977165896,83.1,111,40,66,-6.564599839071096,8.788958899712881,81.3,111,71,32,-1.930813884805128,11.205626445186397,91.1,411,9,85,-7.667217341893345,8.073820078767348,79.6];
var allabs = [0,2,598265,9,3,2,607752,9,6,3,596119,9,12,0,0,0];
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