var allpitches = [100,99,77,-3.0716643631179688,8.1882771221202,95.4,100,9,32,-4.160280773784834,5.555029769923816,96.5,110,72,37,-0.2082022091134182,6.691804056954673,89.7,111,59,48,-4.963235361387385,7.916086353660328,96.9,200,52,89,7.238454198873502,-4.929358095265417,81.3,200,48,100,5.772407607704728,-0.685611631557272,82.1,110,75,66,-3.391332071321326,7.7966222569276615,95.5,211,79,47,10.0738782350181,-7.077990166680419,78.1,100,23,12,-5.789260410343392,6.375564285302858,96.0,111,74,43,-3.935277632376607,8.907235039023753,95.3,100,33,22,-3.2741317899107525,6.879300980072653,95.8,211,85,44,6.083263717530456,-6.100158027370883,80.2,100,50,5,-5.590031096512319,4.9633286445823614,95.3,111,89,28,-0.9560549030831669,11.231961758974988,96.3,310,85,25,2.912942458851233,3.3722519558026836,88.2,111,45,48,-5.222750847100901,3.372502977391542,95.6,111,31,41,-5.650109211944034,2.928318520717971,94.0,200,0,93,3.8733089060049766,-4.848969438099149,80.0,210,16,57,6.877600640158352,-8.102588597414485,80.7,200,0,60,11.183440670328638,-4.172058867974074,81.8,210,25,15,9.150333343630315,-7.0195966618503025,80.9,200,0,79,4.731042494698647,-6.763789490400156,81.3,211,62,72,11.484160493046465,-3.8083160425219424,82.7,100,75,0,-3.666868186962649,5.216170974576518,94.2,211,73,66,8.867018539571845,-3.599358481763856,80.7];
var allabs = [0,14,472528,7,6,20,453203,7,12,19,543068,7,16,2,460060,7,17,14,592230,7,24,2,492802,7,25,0,0,0];
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