var allpitches = [111,64,53,200,7,100,100,10,7,211,27,76,111,49,18,211,76,6,100,86,100,111,100,36,111,95,26,211,54,87,210,65,63,100,47,0,200,56,100,110,36,23,111,16,44,111,58,12,211,50,35,111,45,35,110,43,46,111,70,0,200,9,98,111,80,5,211,64,51,110,30,29,200,0,100,200,0,100,111,29,52,200,13,95,100,5,35,200,7,100,100,100,7,200,6,92,211,37,62,211,24,84,211,55,19,100,0,19,110,44,42,111,13,18,210,77,47,211,70,54,100,75,16,100,100,0,210,73,49,111,68,69,111,69,38,100,100,13,211,18,47];
var allabs = [0,519141,543807,1,6,519141,608324,1,9,519141,514888,1,10,519141,621043,1,18,519141,594828,1,23,519141,502210,2,27,519141,493329,2,31,519141,503556,2,35,519141,435263,2,38,519141,543807,3,40,519141,608324,3,45,519141,514888,3,47,0,0,0];
var num_abs = 12;
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