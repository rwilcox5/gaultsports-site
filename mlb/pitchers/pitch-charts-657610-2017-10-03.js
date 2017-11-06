var allpitches = [310,33,48,100,0,27,411,27,94,111,35,13,411,12,58,400,0,100,311,66,70,411,0,68,111,58,51,100,0,54,311,71,40,111,14,63,410,31,40,411,17,92,110,53,60,300,100,97,311,20,70,300,100,83,100,100,76,100,100,77,110,76,75,111,41,95,100,72,100,100,0,61,311,65,89,500,50,100,500,50,100,500,50,100,500,50,100,111,1,58,111,6,63,411,52,72,111,10,39];
var allabs = [0,657610,453056,6,9,657610,453943,6,11,657610,458731,6,14,657610,592450,7,20,657610,596142,7,25,657610,544369,7,29,657610,516770,7,33,0,0,0];
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