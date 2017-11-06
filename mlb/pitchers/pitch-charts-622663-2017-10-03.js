var allpitches = [110,43,47,100,87,93,300,100,54,300,99,40,111,63,32,110,42,37,111,53,13,100,0,48,400,0,47,400,9,33,110,81,54,111,42,7,111,21,13,300,95,71,300,24,17,111,37,41,311,63,58,110,63,66,400,0,69,411,7,64,110,37,40,111,23,54,111,60,22,311,72,77,100,16,26,311,32,93,100,6,25,400,0,49,411,47,52];
var allabs = [0,622663,572821,1,5,622663,408045,1,7,622663,593871,1,14,622663,592696,1,17,622663,500871,1,20,622663,596146,1,29,0,0,0];
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