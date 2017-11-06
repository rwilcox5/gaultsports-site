var allpitches = [100,82,87,111,45,21,111,39,44,110,18,69,311,51,68,111,24,27,300,72,100,110,68,76,400,48,95,111,69,60,111,73,40,100,22,0,411,60,42,300,100,88,310,50,73,300,55,93,311,26,44,311,25,41,310,82,72,111,51,31,300,100,100,300,75,100,411,59,78,100,100,99,400,34,83,100,0,47,310,49,47,310,34,74,311,66,78,111,53,41,111,79,63,111,78,86,100,54,98,100,88,100,111,41,40,110,16,61,300,19,96,310,77,73,111,19,30,311,76,86,400,47,100,111,29,51,400,15,37,310,72,49,100,0,20,311,86,78,111,64,14,411,25,76,111,24,84,110,87,81,100,0,22,111,59,58,111,78,83,111,90,35,310,35,80,100,4,91,400,0,0,100,36,89,111,53,46,111,66,24,300,91,100,111,65,56];
var allabs = [0,622663,543807,1,3,622663,502210,1,5,622663,514888,1,6,622663,621043,1,14,622663,503556,1,17,622663,493329,2,25,622663,136860,2,30,622663,608324,2,35,622663,435263,3,42,622663,543807,3,47,622663,502210,3,48,622663,514888,4,49,622663,621043,4,54,622663,503556,4,59,622663,493329,4,62,0,0,0];
var num_abs = 15;
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