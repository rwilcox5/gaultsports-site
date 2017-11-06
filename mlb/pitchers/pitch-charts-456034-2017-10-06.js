var allpitches = [100,0,77,110,15,16,100,0,60,110,7,48,111,74,17,100,84,96,111,15,37,111,47,27,100,100,45,110,10,72,100,2,100,111,57,24,411,71,51,100,0,67,100,67,17,410,85,56,111,21,36,111,82,48,500,50,100,500,50,100,500,50,100,500,50,100,100,0,35,410,79,27,110,87,64,111,40,33,411,61,68,100,0,84,111,16,49,110,89,56,110,30,73,111,71,29,100,0,42,400,23,100,411,53,89,411,72,74,100,0,53,200,0,100,411,45,34,111,19,12,100,56,90,411,80,67];
var allabs = [0,456034,493329,3,7,456034,503556,3,8,456034,435263,4,13,456034,543807,4,17,456034,608324,4,18,456034,514888,4,22,456034,621043,4,26,456034,594828,5,30,456034,502210,5,35,456034,493329,5,42,0,0,0];
var num_abs = 10;
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