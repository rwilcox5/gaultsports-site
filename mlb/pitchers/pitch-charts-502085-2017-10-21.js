var allpitches = [100,0,0,100,81,100,110,70,73,111,28,72,111,93,97,211,33,46,211,54,90,200,100,100,211,23,71,200,95,100,111,98,42,200,16,93,111,17,41,200,53,100,110,15,60,111,52,47,111,7,14,211,100,100,100,0,52,310,27,60,110,27,72,111,31,33,300,47,100,111,23,59,311,36,93,400,30,85,311,84,100];
var allabs = [0,502085,514888,7,5,502085,621043,7,6,502085,493329,7,11,502085,594828,7,13,502085,435263,8,18,502085,503556,8,22,502085,502210,8,27,0,0,0];
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