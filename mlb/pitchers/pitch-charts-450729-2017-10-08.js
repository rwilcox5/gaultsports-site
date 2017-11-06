var allpitches = [100,88,100,111,48,35,200,100,79,210,18,30,100,100,19,111,65,23,111,65,55,211,94,71,111,74,56,200,100,68,111,0,19,111,0,32,100,93,0,111,0,21,100,100,0,211,71,31,400,74,100,210,38,31,100,100,50,200,86,24,111,81,58,110,86,29,110,89,49,100,100,52,200,100,100,100,100,27,110,60,74,400,1,93,100,100,100,110,3,37,100,75,74,110,66,23,100,100,76,211,76,40,410,6,48,100,13,57,200,100,100,411,42,27];
var allabs = [0,450729,543807,1,2,450729,502210,1,6,450729,514888,1,9,450729,621043,1,16,450729,503556,1,21,450729,608324,1,27,450729,136860,2,33,450729,493329,2,34,450729,435263,2,38,0,0,0];
var num_abs = 9;
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