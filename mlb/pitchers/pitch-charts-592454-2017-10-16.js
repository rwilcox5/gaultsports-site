var allpitches = [100,40,9,-4.926938993261269,15.103381577643361,97.5,111,20,52,-7.302725807261845,11.814513585477457,97.7,110,27,25,-6.018603572452176,13.735073065766159,97.0,400,96,72,-10.95280996437516,8.124704376355549,91.3,110,85,64,-7.23050791432428,12.21028286877108,97.8,411,83,67,-13.70696264863776,3.443742435593736,91.8,110,66,18,-9.551213029576033,9.957983622579276,97.7,400,84,87,-12.2896593990228,5.452252946892852,90.8,100,86,2,-8.253254652890796,9.396865166198172,97.8,100,34,85,-5.6938064588486395,13.457884126846679,98.0,100,100,59,-5.830436228802012,13.196386170952682,98.5,410,92,44,-10.315415539395744,5.850552434186688,89.8,400,40,0,-10.28613679243098,7.870769830983697,88.8,410,77,18,-11.5755181029966,4.393305839904745,90.0,411,60,58,-11.970015156716604,3.20717950867902,90.8];
var allabs = [0,20,457727,9,2,3,543807,9,6,14,608324,9,11,2,514888,9,15,0,0,0];
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