var allpitches = [110,65,48,100,100,30,111,100,95,100,100,62,311,88,69,100,1,5,110,37,79,100,12,6,111,69,52,111,82,47,100,99,67,111,99,65,100,0,62,111,44,50,110,52,73,110,85,73,111,99,47,100,0,91,100,0,42,110,21,85,111,22,65,100,34,86,111,16,18,111,17,43,311,60,17,100,80,0,100,100,77,100,100,86,111,54,41,110,70,55,111,77,58];
var allabs = [0,643338,493329,7,5,643338,136860,7,9,643338,608324,7,12,643338,435263,7,14,643338,543807,8,17,643338,502210,8,23,643338,514888,8,29,643338,621043,8,31,0,0,0];
var num_abs = 8;
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