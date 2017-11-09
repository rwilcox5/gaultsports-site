var allpitches = [111,61,66,-7.9594024972241515,7.969533436352604,94.2,100,100,43,-8.509643026491588,8.255046231451477,94.6,111,38,34,-6.939338312642843,9.531343490314093,94.4,300,100,100,0.5525277836943348,1.8378405085601521,87.8,111,51,55,-5.75676443427918,10.552267918795632,95.1,110,56,70,-9.494523380241635,7.494588057392976,94.1,100,57,88,-7.5526240170843115,8.031133881859189,94.9,100,13,0,-3.439304987954052,10.048852081676149,92.9,300,96,98,0.386140258012704,-1.0110947901150515,86.7,111,58,39,-7.112755612985784,7.874131835885171,94.8,110,69,34,-6.885300153501587,5.607556717546272,93.6];
var allabs = [0,2,506433,6,5,3,621035,6,11,0,0,0];
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