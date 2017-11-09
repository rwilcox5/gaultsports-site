var allpitches = [100,89,0,1.507903033325511,14.285530961324886,101.1,110,62,52,3.4693391904277258,12.404094888326753,98.8,111,68,21,1.475251549721186,14.252440257794664,101.0,111,93,35,7.501472161536828,12.213480585503333,102.8,100,59,21,0.515662026277445,12.303689229084451,101.0,100,83,24,1.7897570150342381,14.537356518081701,100.1,110,19,72,1.3614509790316964,12.502721910398595,100.2,300,100,10,-6.445767756158778,1.245842165496445,84.7,111,30,44,0.32444077181616754,14.032188572999207,99.5,111,34,24,0.2691397065430141,10.001661434269906,102.0,111,100,49,3.6718417780172636,14.433069918591737,103.0,100,100,27,4.453485653166986,12.896384966747366,102.7,100,80,14,2.097508883629452,13.167131465087074,101.3,100,99,58,3.039498236777391,14.20108108420046,101.4,110,55,32,0.5759133628260955,12.194934565204832,100.4,111,77,63,2.2174037329931258,13.335405820244937,101.1,111,22,35,1.9844779215981851,11.511097006308741,101.3,110,83,42,2.0109819651775824,12.925936089618135,100.3,111,74,19,0.281195341638016,13.751282975447058,100.6,111,64,45,6.245748919625722,11.262924655933185,103.7];
var allabs = [0,3,543257,9,4,3,572821,9,11,20,408045,9,17,3,593871,9,20,0,0,0];
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