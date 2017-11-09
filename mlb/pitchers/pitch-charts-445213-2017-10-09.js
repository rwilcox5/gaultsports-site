var allpitches = [100,0,34,-5.913222395793904,7.4104756576478925,93.1,111,32,41,-11.323814656289379,6.561962044921939,94.0,100,0,29,-7.793001802135032,6.29594564280718,91.9,110,10,55,-10.157264902469095,6.202248504964183,93.0,100,65,4,-8.302862384364552,6.803257174031578,93.0,100,57,11,-8.789837614811026,7.504200724137286,93.3,100,31,9,-9.113255057890322,8.05893371049799,92.7,111,57,47,-8.713416055342805,7.757305109497244,93.1,110,44,63,-10.14814153077634,7.773373730731379,94.3,111,24,63,-11.0954447930629,9.278829071727067,95.0,400,39,97,-11.28641077748776,10.299906414691675,89.4,111,0,78,-10.472871741182264,7.8155892619338445,94.1,111,0,52,-7.926301102374282,7.350741483740725,94.8,411,59,96,-10.482987966547512,9.215041711365686,90.1];
var allabs = [0,2,608365,7,2,14,600303,8,7,2,445055,8,8,3,592178,8,14,0,0,0];
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