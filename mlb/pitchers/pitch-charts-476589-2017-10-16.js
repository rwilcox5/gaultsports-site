var allpitches = [110,44,25,300,100,70,100,62,81,310,93,73,100,100,96,311,59,68,311,54,48,100,88,89,110,11,63,100,18,25,311,27,65,100,53,9,311,77,30,311,100,58,111,99,33,310,50,40,200,100,100,300,100,54,311,66,57,110,18,64,100,12,88,111,56,39,300,100,83,300,100,100,311,64,29,311,100,85,111,25,49,311,64,59,111,49,64,100,38,83,300,100,98,311,88,94,111,52,18,311,60,28,211,38,44];
var allabs = [0,476589,457727,7,8,476589,543807,7,14,476589,608324,7,15,476589,514888,7,19,476589,621043,8,29,476589,493329,8,34,476589,594828,8,35,0,0,0];
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