var allpitches = [110,27,50,111,80,39,311,28,41,110,58,48,200,94,88,200,92,88,111,79,34,300,22,99,300,93,72,311,58,44,100,93,50,300,71,18,111,82,25,210,49,49,100,0,0,110,60,43,311,90,60,100,100,39,311,45,44,200,0,0,311,58,30,411,4,31,111,69,24];
var allabs = [0,548389,453568,1,2,548389,606132,1,3,548389,571448,1,9,548389,467827,1,10,548389,435622,2,13,548389,518960,2,17,548389,642162,2,19,548389,506560,2,23,0,0,0];
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