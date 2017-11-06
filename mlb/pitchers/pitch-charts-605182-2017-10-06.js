var allpitches = [110,56,74,210,39,83,100,21,0,300,100,100,300,60,100,100,100,96,300,89,68,110,51,66,400,0,83,111,39,83,311,37,44,111,34,36,211,15,20,411,0,60,300,100,74,111,29,23,200,94,93,400,0,0,100,96,100,310,31,80,110,26,77,311,4,59,100,100,57,411,4,68,100,100,100,110,77,77,400,63,100,111,50,37];
var allabs = [0,605182,592450,4,6,605182,596142,4,12,605182,544369,5,19,605182,516770,5,22,605182,595885,5,28,0,0,0];
var num_abs = 5;
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