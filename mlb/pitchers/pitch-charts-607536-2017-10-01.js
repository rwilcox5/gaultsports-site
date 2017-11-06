var allpitches = [110,95,42,111,53,31,100,100,89,100,100,35,111,99,43,100,82,82,111,68,53,311,51,69,310,40,76,400,0,91,111,44,56,300,0,91,111,33,68,100,100,40,411,51,72,400,20,78,111,60,45,300,10,74,111,38,24,110,84,78,100,100,89,100,100,55,111,56,33,400,17,97,111,63,37,100,92,43,110,35,30,100,0,51,111,61,45,300,88,28,111,64,60,100,95,70,110,50,82,111,51,86,310,82,36,411,54,75,400,77,100,111,35,45,300,60,9,300,0,66,100,19,100,111,50,49,411,39,68,100,100,49,111,75,50,111,77,43,411,71,84,311,54,55,300,7,94,100,100,35,300,21,76,300,0,91,400,85,100,111,81,72,100,77,90,100,61,97,111,58,84,110,96,54,110,40,29,100,0,57,111,14,36];
var allabs = [0,607536,621035,1,2,607536,608369,1,5,607536,457759,1,8,607536,641355,1,13,607536,571771,1,19,607536,523253,1,25,607536,518735,2,29,607536,624577,2,31,607536,548389,2,34,607536,621035,3,38,607536,608369,3,42,607536,457759,3,47,607536,641355,3,52,607536,571771,3,57,607536,523253,3,61,0,0,0];
var num_abs = 15;
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