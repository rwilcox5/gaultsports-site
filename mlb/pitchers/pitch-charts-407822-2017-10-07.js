var allpitches = [100,100,29,110,79,48,111,45,86,111,58,64,100,100,73,100,100,92,110,32,80,111,57,58,200,12,32,111,41,75,111,77,41,111,35,80,111,16,65,100,50,6,111,55,57,211,53,23,100,4,97,111,51,78,100,19,38,111,42,57,111,21,67,100,0,97,111,11,100,100,53,0,111,53,68,100,0,100,100,1,94,111,65,73,100,94,25,111,22,80,111,70,10,110,41,45,100,41,100,110,42,79,100,0,96,111,0,75];
var allabs = [0,407822,624577,5,4,407822,628317,5,8,407822,621035,6,15,407822,608369,6,18,407822,457759,6,25,407822,641355,6,31,407822,434158,6,36,0,0,0];
var num_abs = 7;
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