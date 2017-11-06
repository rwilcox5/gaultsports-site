var allpitches = [100,8,81,100,2,81,110,57,72,111,56,44,111,32,64,100,20,100,111,76,60,100,99,89,400,17,100,111,29,60,100,20,19,111,48,33,211,52,67,100,17,20,100,16,51,111,31,77,100,69,0,111,35,75,111,65,85,110,88,77,111,46,24,200,82,94,100,100,100,411,88,62,100,100,66,100,64,0,110,98,58,100,0,49,111,63,69,210,94,62,111,65,28,111,57,31,110,80,73,111,80,41,100,69,91,400,100,82,111,31,55,100,46,7,111,54,70,110,79,75,111,73,75,111,71,89,111,18,79,100,68,0,211,44,89,110,94,76,100,99,100,111,95,76,211,50,87,100,59,0,200,10,100,100,52,9,100,2,47,111,79,61,211,38,73];
var allabs = [0,452657,547180,5,7,452657,475582,5,12,452657,502517,5,19,452657,543685,6,24,452657,446308,6,29,452657,572191,6,33,452657,544931,7,34,452657,607208,7,39,452657,150029,7,41,452657,547180,8,45,452657,475582,8,52,452657,502517,8,55,0,0,0];
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