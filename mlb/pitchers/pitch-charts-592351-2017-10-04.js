var allpitches = [111,86,31,100,6,43,200,0,39,111,65,14,111,54,44,311,52,85,111,90,26,211,14,8,110,31,73,111,37,38,111,42,13,211,45,74,200,100,100,111,65,58,211,88,65,111,81,42,211,59,79,311,65,61,110,49,46,111,77,52,211,28,54,300,0,72,100,1,34,111,38,54,311,16,33,310,19,31,111,58,43,300,66,100,111,37,10,111,100,45,100,96,24,211,40,53,111,15,17,110,49,26,110,67,60,111,86,21,211,45,68,310,43,76,110,33,74,300,0,57,111,77,28];
var allabs = [0,592351,444482,1,6,592351,606466,1,7,592351,502671,1,8,592351,502110,1,15,592351,571875,1,18,592351,572041,1,21,592351,518614,1,26,592351,425772,1,33,592351,425844,2,36,592351,444482,2,37,592351,606466,2,41,0,0,0];
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