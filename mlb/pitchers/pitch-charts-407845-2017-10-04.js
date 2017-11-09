var allpitches = [110,92,74,-3.6727045187738643,11.151876959440992,94.3,111,74,67,-5.540516962054152,9.110306489060651,94.9,111,64,37,-5.295970143260268,9.453291243353387,95.7,410,43,49,-8.082715262602692,7.101867431921832,85.0,100,18,99,-4.3147892519487,10.26133634839158,95.7,111,58,56,-7.897484679974004,6.69308598559674,93.8,100,65,0,-4.80553689322422,8.106281096444112,95.6,111,34,22,-4.5801481739466725,9.777966458043252,93.6,411,76,86,-8.573361504301536,6.053063783165868,85.8,411,42,100,-9.70117543926324,6.884557363763472,84.9,110,69,76,-8.562174479192327,6.241628255613252,94.9,300,100,79,-0.3616849667342556,0.8401326651907453,85.2,111,49,38,-8.503964515960572,7.19814901095336,94.8,111,73,12,-4.586400846481272,8.842411589402651,95.8,411,14,79,-10.055486978241227,4.500008284535088,86.3,100,0,52,-7.021327674146724,7.144645444502952,96.6,400,5,93,-9.757081868611309,6.226286589658464,85.1,411,24,45,-8.766497860550663,5.69107017462492,85.6,410,57,93,-9.58977093361224,7.46761287228672,85.2,311,6,29,1.02854756756625,-0.649185259354824,83.8,100,87,0,-5.612496924856824,8.955487401690469,97.5,100,100,83,-7.60395289035408,5.634887515996884,95.0,111,65,68,-7.097935148164799,7.270597989605951,97.2];
var allabs = [0,20,435622,9,3,3,453568,9,10,3,518934,9,14,20,471865,9,18,2,571448,9,23,0,0,0];
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