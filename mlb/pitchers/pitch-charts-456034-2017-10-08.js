var allpitches = [110,14,74,400,32,100,110,76,76,111,35,51,211,37,74,400,100,31,111,65,56,111,69,27,400,61,93,411,99,40,100,8,48,111,43,58,100,0,72,111,60,63,100,42,0,110,11,60,111,49,68,110,40,51,211,67,20,111,24,60,111,27,62,111,20,62,100,7,24,111,14,47,110,73,70,111,0,69,100,0,94,100,50,84,111,33,64,111,54,69,411,33,93,111,53,64,400,14,97,100,0,88,111,56,58,111,59,42,111,53,28,111,75,34,110,45,28,111,47,26,400,44,87,111,60,39,110,55,29,100,6,39,100,100,18,100,31,100,111,65,63,100,67,81,100,84,97,100,0,60,100,0,100,111,3,29,111,92,37,100,58,9,111,58,57,111,17,31,111,38,0];
var allabs = [0,456034,136860,4,8,456034,493329,4,10,456034,435263,4,12,456034,543807,4,17,456034,502210,5,20,456034,514888,5,22,456034,621043,5,24,456034,503556,5,31,456034,608324,5,32,456034,136860,6,37,456034,493329,6,38,456034,435263,6,40,456034,543807,6,42,456034,502210,7,47,456034,514888,7,51,456034,621043,7,53,456034,503556,7,57,0,0,0];
var num_abs = 17;
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