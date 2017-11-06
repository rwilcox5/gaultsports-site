var allpitches = [311,84,68,100,76,7,300,100,57,111,91,15,311,44,87,311,73,85,200,0,66,311,26,80,311,88,88,300,6,100,311,26,67,310,40,71,300,3,100,111,53,68,311,73,58,500,50,100,500,50,100,500,50,100,500,50,100,111,22,37,311,54,100,311,68,71];
var allabs = [0,518813,502110,8,6,518813,571875,8,11,518813,572041,8,15,518813,518614,8,19,518813,425772,8,20,518813,592273,8,22,0,0,0];
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