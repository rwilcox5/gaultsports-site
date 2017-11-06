var allpitches = [110,8,24,100,0,44,311,21,61,100,0,81,311,11,89,100,4,79,100,0,44,110,0,45,100,33,100,111,4,54,111,21,37,100,10,25,100,24,7,111,58,40,300,100,71,110,39,63,100,0,53,111,54,26,111,64,48,110,17,45,100,40,82,311,47,73,110,43,33,111,69,76,111,51,63,311,42,17,111,72,60,111,100,94];
var allabs = [0,643338,136860,7,5,643338,503556,7,11,643338,435263,7,14,643338,543807,7,19,643338,502210,8,22,643338,514888,8,24,643338,621043,8,28,0,0,0];
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