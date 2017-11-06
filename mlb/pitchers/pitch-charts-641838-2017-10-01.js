var allpitches = [100,20,12,410,74,53,111,4,42,111,17,30,410,7,68,100,0,35,111,17,58,111,25,41,300,35,96,400,0,77,111,31,51,100,0,0,311,59,58,100,0,43,111,9,49,410,9,49,110,63,63,311,69,60,100,0,59,400,0,20,111,36,88,411,9,86,300,100,100,110,72,63,300,100,79,110,41,59,400,87,90,111,30,27,111,51,42,110,32,68,100,0,29,311,56,65];
var allabs = [0,641838,606466,6,3,641838,489267,6,4,641838,453923,6,12,641838,502117,6,13,641838,545121,6,15,641838,571757,6,22,641838,455104,6,29,641838,592273,6,32,0,0,0];
var num_abs = 8;
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