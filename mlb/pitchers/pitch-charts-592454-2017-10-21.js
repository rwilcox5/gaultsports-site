var allpitches = [411,64,69,100,100,85,100,100,19,111,58,45,411,35,65,300,100,59,411,42,28,111,61,54,410,67,65,400,100,50,110,80,70,400,83,0,411,66,60,400,100,50,411,87,39,411,78,66,400,100,70,110,70,44,400,71,100,110,60,74,411,53,92,400,94,80,400,100,63,410,82,57,411,62,53];
var allabs = [0,592454,543807,4,1,592454,608324,5,4,592454,514888,5,7,592454,621043,5,8,592454,493329,5,15,592454,594828,5,20,592454,435263,5,25,0,0,0];
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