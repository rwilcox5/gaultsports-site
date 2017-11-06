var allpitches = [111,23,35,111,53,58,110,60,47,100,95,84,400,100,71,400,85,86,100,42,20,410,47,82,411,65,94,400,84,95,411,46,51,100,100,88,400,100,56,100,97,100,110,73,58,111,62,94,111,84,25,100,63,15,410,25,31,400,20,10,111,44,39,100,81,88,111,59,43,111,73,53,310,60,25,300,50,7,411,38,67,411,26,31];
var allabs = [0,592454,136860,5,2,592454,608324,5,7,592454,435263,5,11,592454,543807,6,17,592454,502210,6,24,592454,514888,6,28,0,0,0];
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