var allpitches = [400,0,47,110,76,68,100,93,70,411,36,35,111,51,11,100,100,39,411,8,72,111,65,0,111,66,56,411,38,71,111,67,56,111,44,0,110,86,17,400,0,76,411,31,54,100,56,15,111,74,55,100,46,12,110,86,79,100,100,81,411,59,84,111,40,12,100,68,4,110,92,61,411,53,73,100,100,53,100,100,83,110,93,50,111,79,0,100,17,0,111,60,2];
var allabs = [0,545348,493329,7,10,545348,503556,7,12,545348,435263,7,15,545348,543807,7,23,545348,608324,7,25,545348,514888,7,31,0,0,0];
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