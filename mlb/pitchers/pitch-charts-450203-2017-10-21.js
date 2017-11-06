var allpitches = [110,51,54,210,14,43,111,64,50,111,43,72,100,100,87,100,100,100,111,64,62,110,29,54,111,83,40,211,53,87,111,62,71,111,27,45,211,67,67,210,15,50,210,54,77,111,0,36,210,78,77,110,13,87,211,73,61,200,60,94,210,69,79,111,76,55,200,3,53,210,49,47,100,0,18,200,0,35,111,12,56,111,26,68,111,60,78,110,10,39,111,100,60,211,56,93,111,47,62,200,100,100,100,100,63,211,39,88,111,58,66,100,40,29,200,89,100,111,18,46,211,71,83,111,100,78,200,47,100,200,100,100,100,39,100,200,98,97,200,10,31,110,16,44,111,43,76,210,79,73,200,89,100,110,52,88,200,100,98,111,57,57];
var allabs = [0,450203,458731,1,3,450203,592450,1,7,450203,544369,1,10,450203,596142,2,11,450203,595885,2,12,450203,516770,2,13,450203,543305,2,16,450203,453943,3,19,450203,452104,3,22,450203,458731,3,28,450203,592450,4,29,450203,544369,4,32,450203,596142,4,36,450203,595885,5,37,450203,516770,5,42,450203,543305,5,46,450203,453943,5,49,450203,452104,5,54,0,0,0];
var num_abs = 18;
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