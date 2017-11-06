var allpitches = [300,75,100,110,14,77,311,90,83,300,57,100,300,100,100,111,10,30,300,95,89,300,89,100,111,52,38,300,86,100,300,100,78,110,10,54,111,26,54,311,58,65,311,54,86,311,48,100,300,100,100,110,36,38,100,56,2,111,64,54,111,87,46,311,79,72,311,83,97,110,45,56,100,100,37,311,78,74,300,93,100,111,46,62,111,21,38,311,58,97,100,42,90,111,11,52,111,37,39,111,38,46,111,35,70,100,0,40,311,84,93];
var allabs = [0,571704,592450,8,6,571704,596142,8,11,571704,544369,8,16,571704,516770,9,23,571704,543305,9,30,571704,595885,9,33,571704,453056,9,37,0,0,0];
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