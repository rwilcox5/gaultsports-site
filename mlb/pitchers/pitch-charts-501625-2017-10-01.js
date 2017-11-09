var allpitches = [110,32,31,3.9361056741397347,8.871224306580544,91.1,211,32,67,-2.4413470763332135,0.2847400094764523,79.2,111,74,33,9.338933436378484,7.1403383611546705,91.0,210,53,81,-2.755071521428639,0.44792284605808486,79.4,211,20,100,-3.1407533955827978,-3.7845549837966006,77.7,211,45,100,-2.117987268009559,0.514960594908671,78.7,210,64,59,-1.479381672589904,-1.17113697287642,77.6,400,100,93,8.118928124252742,5.547128547706106,82.3,111,82,42,9.519301167747054,4.900357751932777,91.8,400,40,100,7.907744831156172,5.436817634251326,82.0,300,61,100,-2.310740233120794,1.4811212408613357,83.2,111,81,63,10.788480771874688,5.426143209620962,92.1];
var allabs = [0,2,595238,8,2,23,605357,8,3,3,592325,8,6,2,571745,8,12,0,0,0];
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