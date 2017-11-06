var allpitches = [100,40,0,111,14,51,100,16,91,111,43,47,210,68,59,200,0,98,411,74,74,200,51,84,110,27,77,400,39,95,200,0,100,110,12,62,111,68,59,400,96,100,400,73,95,111,49,60,111,81,39,211,76,77,111,53,48,110,62,76,111,74,62,211,24,95,100,100,42,111,41,69,100,90,100,111,90,38,100,97,79,400,88,88,111,41,49,100,100,30,210,78,29,200,81,70,210,100,27,211,91,51,111,79,44,110,69,65,211,47,70,200,0,100,200,18,100,100,36,85,111,100,69,111,85,57,110,43,76];
var allabs = [0,543557,518586,8,4,543557,571657,8,7,543557,621035,8,13,543557,457759,8,19,543557,641355,9,22,543557,624577,9,24,543557,523253,9,26,543557,571771,9,29,543557,605131,9,34,543557,518586,9,35,543557,592626,9,43,0,0,0];
var num_abs = 11;
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