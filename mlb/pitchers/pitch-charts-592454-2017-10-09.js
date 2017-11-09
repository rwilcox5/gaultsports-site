var allpitches = [110,42,58,-6.956647199567227,9.14165170444871,97.4,411,29,38,-8.478728304597876,5.2448346606847265,90.9,410,33,19,-8.56782828632436,3.9147817055816283,90.4,100,31,79,-6.10837771735846,8.607070328675622,98.2,411,26,39,-8.388155079070252,7.935142442381352,90.1,410,64,21,-8.160460119213386,5.736142066013907,90.5,111,26,68,-5.6426565696331075,11.767193845993834,98.3,411,42,53,-13.477859242876427,2.508051271232257,90.6,110,30,28,-2.623941683715373,12.039460624924368,97.6,400,88,99,-8.237424446954098,8.274889412127202,91.8,111,10,35,-3.502460145987483,13.123876506594094,97.0,111,69,16,-3.916599565421625,10.900017257727804,98.8,110,79,59,-3.637541594683956,10.873858266455157,99.1,111,52,42,-5.32414021647637,9.502587893504913,97.7,100,100,82,-2.3330901081929096,11.227556394218519,98.9,400,76,100,-12.810293598208471,6.41218596911867,92.1,411,53,76,-12.314972086891952,2.9414990391318403,90.7,410,33,21,-9.483252571188057,5.2996850760976795,91.1,111,45,23,-7.122111547255149,9.452496927856783,96.8,410,49,20,-9.778288681850466,4.118552984271653,89.6,100,100,54,-5.657233127365523,9.651925349331632,97.8,411,68,100,-9.832040414263473,3.70595026516527,90.9];
var allabs = [0,3,543401,8,3,2,608070,8,5,3,457803,8,8,3,467793,9,13,3,488726,9,18,3,502082,9,22,0,0,0];
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