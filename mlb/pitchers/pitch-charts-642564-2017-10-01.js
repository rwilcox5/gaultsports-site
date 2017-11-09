var allpitches = [200,80,94,2.275553664624216,-2.113117195332948,86.5,110,52,55,-1.48575022004082,10.895872823146812,97.0,110,34,50,-0.7725278189138604,9.510918802097532,97.9,100,44,86,-1.5637492833085682,8.590735913587608,99.0,211,100,95,3.960592359389448,2.835088202540676,88.0,100,35,0,-2.0876496903810122,8.602580739872964,96.2,111,99,5,-1.0358775867059005,9.513678205285009,97.2,100,100,72,-2.2106785536211078,8.548759083197183,97.4,211,51,61,3.3053940698402995,-0.3568710514968888,88.6,110,36,28,-0.5841048784123644,9.428752208342999,96.0,211,94,82,3.011937242609844,-0.17566424257845362,87.2,100,100,86,0.09628660356258792,9.551516759035705,97.5,100,100,74,0.5666199962764176,9.052998136467131,97.9,100,100,61,1.241122510597764,9.37421712632634,98.3,111,47,50,0.3333787539298356,9.640294474454027,97.0];
var allabs = [0,3,543877,8,5,2,646240,8,9,3,455759,8,15,0,0,0];
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