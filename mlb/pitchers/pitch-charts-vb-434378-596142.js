var allpitches = [210,71,69,311,83,100,110,65,51,111,52,46,211,28,37,311,89,56,210,56,43,311,83,98,311,100,99,210,25,72,111,23,45,110,69,59,111,29,21,200,100,100,311,100,76,110,78,31,110,83,28,311,59,71,300,100,67,311,91,87,100,99,65,100,65,89,100,95,47,311,65,57];
var allabs = [0,201710140,3,2,1,3,201710140,2,4,1,6,201710140,3,7,1,9,201710140,2,9,1,11,201710200,20,2,2,15,201710200,2,4,2,20,201710200,2,6,2,24,0,0,0];
var num_abs = 7;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*5;returnabs[2*iii+1]=i*5+5;for (iiii=allabs[i*5+4];iiii<30;iiii++){        nabsc[iiii]+=1;}
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
function sendEvent(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendDate(i){var abn = returnabs[2*i]; return allabs[abn+1];}