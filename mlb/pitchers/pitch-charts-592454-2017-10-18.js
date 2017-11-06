var allpitches = [110,11,30,100,16,2,400,28,8,111,76,2,111,27,75,111,77,49,111,63,21,410,50,23,411,59,76,311,62,64,111,64,69,111,20,36,300,100,75,100,8,67,400,36,91,111,50,64,110,28,66,411,64,58,100,100,69,111,50,34];
var allabs = [0,592454,435263,8,5,592454,543807,8,6,592454,502210,8,9,592454,514888,9,10,592454,621043,9,16,592454,493329,9,18,592454,608324,9,20,0,0,0];
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