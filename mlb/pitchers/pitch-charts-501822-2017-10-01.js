var allpitches = [111,45,5,-7.5699549344414265,12.529356600396888,93.8,111,79,31,-6.824651569022307,10.1071131904188,94.5,100,51,0,-6.196016259936192,8.038268937008672,94.4,111,57,14,-7.5220394248679145,10.030504008683373,94.4,300,0,28,-0.014100805558845434,3.836943571151142,86.2,111,58,32,-5.140118635644796,7.670566233932662,93.5,111,0,56,-6.444904220560908,11.717309275735644,94.1,300,34,9,0.5577788233532761,-0.7702745339521082,78.5,310,90,64,-1.084438278687477,1.5873148952031193,80.5,100,24,88,-7.479776677754653,10.599590018526484,93.8,100,45,85,-1.7458680302470166,4.02083112089774,86.6,111,27,44,-1.200522469132387,3.0625691218671998,85.6,111,57,42,-5.897726928673812,11.0302492459566,94.9,310,74,33,2.445907522158896,0.8800760195297098,85.4,300,85,11,2.5541187422127076,1.0068769220861116,86.9,110,29,67,-4.512908158691232,10.998840722564328,93.6,300,60,93,-0.042597699110326015,1.6135275696080493,87.0,111,19,58,-7.967303568893684,3.2864863705555285,83.8];
var allabs = [0,2,592592,8,4,21,592685,8,6,2,519025,8,7,20,592261,8,12,20,608577,8,13,3,543362,8,18,0,0,0];
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