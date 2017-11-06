var allpitches = [110,49,73,111,60,77,411,37,80,111,73,61,100,0,84,111,81,74,100,31,95,200,45,100,100,5,95,111,0,42,111,41,79,100,93,100,100,93,99,411,15,68,100,0,38,111,80,83,211,53,65,411,27,77,310,85,71,200,97,100,100,65,93,311,63,35,110,88,60,100,20,41,411,30,96,110,79,73];
var allabs = [0,592789,514917,1,3,592789,546318,1,4,592789,571437,1,6,592789,656555,2,12,592789,608384,2,18,592789,596748,2,22,592789,595284,2,26,0,0,0];
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