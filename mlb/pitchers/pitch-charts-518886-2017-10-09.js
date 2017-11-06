var allpitches = [100,90,34,100,100,56,100,100,78,111,62,53,100,66,7,111,64,34,100,44,0,100,36,6,211,52,76,200,100,100,111,75,48,111,73,29,111,35,63,210,81,54,111,16,38,211,100,80,211,100,71,211,100,100,211,60,88,100,76,1,200,100,100,111,70,63,111,58,34,100,35,0,100,46,0,100,94,14,111,94,74,111,26,33,111,71,42,211,10,48,100,39,0,210,38,55,211,69,69,100,8,0,111,50,11,111,94,23,211,18,18,211,29,64];
var allabs = [0,518886,543807,8,5,518886,502210,8,13,518886,514888,8,15,518886,621043,9,18,518886,503556,9,21,518886,608324,9,29,518886,493329,9,30,518886,136860,9,38,0,0,0];
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