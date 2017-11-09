var allpitches = [100,10,38,4.251593156619804,11.017296046409724,94.3,110,15,64,7.212337692951468,12.2536466876928,94.8,311,49,28,-2.30791390452084,3.1574377032901317,85.2,100,47,6,8.466884252594532,8.400295774437769,94.9,111,62,37,5.43097083502086,9.80602183154016,95.6,111,45,44,9.428036381404235,6.821664517053899,87.1,111,31,46,3.433620669739212,11.470708669998432,95.5,111,31,39,4.576434422953332,12.317112082261321,94.9,110,36,45,6.78407133500358,11.401063942932431,95.4,100,53,0,7.738517404410084,8.008604603703263,95.5,311,60,21,-1.0050219575344057,3.3214207624352157,85.9,311,28,46,-2.521536331450752,0.022677958646422802,86.0,111,52,25,3.125887298834976,11.45735372688792,95.0,100,49,0,4.97495593842138,7.8237094681318915,95.5,100,88,0,6.142816637430756,9.03684923070042,95.2,311,36,60,-1.797493482711936,2.712699490361664,86.2,311,51,55,-1.153101744306066,3.3107251149287755,86.8,310,51,67,-0.8355514280412888,2.522211476167044,85.7,111,34,57,7.222480057085532,7.830753136020972,95.3];
var allabs = [0,20,607208,9,6,2,622441,9,7,3,506703,9,11,18,594694,9,17,20,457477,9,19,0,0,0];
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