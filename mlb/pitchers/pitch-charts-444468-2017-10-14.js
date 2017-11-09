var allpitches = [100,100,100,-2.1493911159861,13.153196095005601,96.9,111,60,57,-6.140502614474496,11.170295429791272,97.3,100,96,57,-4.09970795958714,12.21774446434284,97.5,300,100,98,5.68635029641488,4.369078354341529,88.1,311,100,100,3.8312824602053763,1.5800340744089398,87.8,111,20,74,-7.9931442358756435,10.873497781348476,96.9,100,88,88,-4.562803391088444,12.2595178550742,98.2,311,100,87,3.775374360261768,5.061738112619761,88.7,111,34,69,-7.3243773745046274,9.450200105757457,97.1,311,100,96,4.2237378982038845,5.945149243839552,87.9];
var allabs = [0,23,621035,6,2,3,457759,6,10,0,0,0];
var num_abs = 2;
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