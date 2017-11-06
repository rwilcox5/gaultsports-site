var allpitches = [410,29,74,100,6,56,111,68,39,100,2,68,111,52,60,200,100,57,111,67,69,110,25,29,100,13,51,111,26,66,400,100,81,110,17,30,111,100,60,100,100,63,111,96,50,210,88,57,200,0,100,110,40,54,111,100,38,100,0,53,411,45,92,110,23,35,100,0,42,411,75,75];
var allabs = [0,571948,607369,7,3,571948,493114,7,7,571948,595943,7,12,571948,607043,8,16,571948,642086,8,19,571948,621512,8,24,0,0,0];
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