var allpitches = [110,46,69,300,0,100,110,14,51,311,64,63,111,36,45,400,56,100,110,9,74,411,3,56,100,0,91,111,45,69,500,50,100,500,50,100,500,50,100,500,50,100,111,35,64,110,33,70,300,0,100,400,0,100,300,0,100,111,35,45,111,65,48,110,13,50,111,43,43,100,44,3,100,0,78,111,47,17,311,0,96,100,100,36,100,100,42,100,92,17,100,100,24,110,74,71,110,43,88,311,0,74,310,9,83,111,100,32,111,43,28,411,32,83,400,96,65,400,81,100,111,11,63,400,99,96,411,86,74];
var allabs = [0,543734,444482,4,4,543734,606466,4,5,543734,502671,4,10,543734,502110,4,14,543734,571875,4,20,543734,572041,5,21,543734,518614,5,27,543734,425772,5,31,543734,592662,5,34,543734,444482,6,37,543734,606466,6,43,0,0,0];
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