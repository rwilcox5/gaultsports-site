var allpitches = [100,100,18,300,100,24,100,59,7,110,42,54,111,63,47,111,66,37,111,50,36,311,88,44,111,28,50,311,100,55,311,100,41,110,75,72,111,80,50,311,39,67,110,76,50,311,62,50,111,56,62,100,78,1,111,91,39,300,69,100,311,53,100,311,97,86,100,64,9,300,100,96,311,40,100,111,24,10,300,100,72,111,58,18,111,58,48];
var allabs = [0,571704,605141,8,8,571704,519048,8,9,571704,434670,8,11,571704,646240,9,14,571704,543877,9,16,571704,598265,9,21,571704,456030,9,29,0,0,0];
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