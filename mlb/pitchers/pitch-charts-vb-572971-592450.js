var allpitches = [100,57,100,100,55,100,100,65,94,110,38,65,100,100,37,100,100,82,310,61,74,300,66,91,300,81,100,110,62,91,311,30,92,300,100,47,310,58,85,311,50,64,300,71,100,300,43,100,311,72,45,110,87,73,100,6,74,100,64,100,100,96,65,110,50,80,111,0,45,100,71,100,311,10,67,111,22,52,100,97,100,311,22,61,300,6,87,100,100,81,311,49,62,300,78,8];
var allabs = [0,201710130,14,1,1,5,201710130,3,3,1,11,201710130,20,5,1,17,201710180,3,1,2,23,201710180,21,3,2,26,201710180,14,5,2,32,0,0,0];
var num_abs = 6;
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