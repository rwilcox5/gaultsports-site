var allpitches = [310,16,61,3.259014964540052,2.019009058929022,81.7,211,30,61,2.961084012466647,0.2434137265506274,80.8,311,76,80,2.527947556546092,2.233265870941076,83.2,300,61,100,2.9305329977224517,0.38742214824117055,83.0,311,50,78,2.0229601349712567,3.4147797286626256,83.4,110,14,51,-2.810727698218968,9.389454813929591,89.1,411,18,88,-10.308231224948877,3.7812518664060772,82.1,100,75,0,-3.0694590925735348,9.459922867627494,89.7,311,54,90,3.654177152004861,-0.299785908957026,83.8,411,10,83,-9.438056572668183,4.03460025170772,84.0,111,32,62,-3.4112559828918245,10.082502071928404,91.2,111,40,34,-5.128643888115058,6.544936246201045,91.4,300,65,93,2.2194275956003766,3.8988040178519485,84.8,100,100,72,-1.3449363075054932,11.79415131987485,91.4,311,96,65,2.2931199434331866,4.5065301458575675,86.4,311,45,40,2.0626487390009682,2.4869311917958017,85.5,111,67,48,-4.099363424410997,9.176392011166875,91.8];
var allabs = [0,2,503556,5,5,2,502210,6,10,2,543807,6,12,2,608324,6,17,0,0,0];
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