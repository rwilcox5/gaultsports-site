var allpitches = [100,50,87,100,100,87,111,85,65,111,58,36,111,84,52,111,60,32,100,100,35,300,92,31,111,50,13,100,15,0,111,45,62,111,35,55,100,1,27,300,85,84,111,24,46,100,0,14,100,17,11,100,32,15,300,46,19,110,39,31,111,13,25,300,100,92,311,54,79,310,37,79,311,18,76,311,9,77,100,96,43,111,90,59,100,56,19,300,16,8,111,52,27,111,78,26,110,63,26,111,31,36,111,10,40,300,0,51,311,18,10,110,11,56];
var allabs = [0,643338,621043,5,4,643338,493329,6,9,643338,608324,6,12,643338,503556,6,17,643338,594828,6,23,643338,435263,7,26,643338,543807,7,32,643338,502210,7,38,0,0,0];
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