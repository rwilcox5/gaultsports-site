var allpitches = [100,100,100,111,55,58,100,100,100,110,83,76,100,92,100,111,34,62,110,48,51,111,86,78,100,100,100,100,16,100,111,47,40,100,45,85,111,24,78,210,52,80,100,100,71,210,70,38,100,99,30,111,51,36,100,96,60,111,41,47,110,81,42,100,100,100,111,28,25,100,100,67,100,100,95,110,84,68,111,26,34];
var allabs = [0,407793,457759,7,2,407793,641355,7,6,407793,434158,7,13,407793,523253,8,18,407793,605131,8,25,407793,624577,8,27,0,0,0];
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
        return allpitches[(firstp+ii)*3];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+2];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}