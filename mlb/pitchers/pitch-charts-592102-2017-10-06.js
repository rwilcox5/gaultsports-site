var allpitches = [211,89,61,100,100,50,211,62,44,111,21,35,200,57,96,200,100,17,100,18,8,100,0,29,210,36,51,100,0,31,111,41,51,110,73,24,100,87,83,211,58,67,200,95,77,211,61,74,200,3,5,211,92,100,211,96,12,111,82,0,100,100,24,211,96,86,200,100,100,111,33,41,211,72,90,210,86,70,200,100,100,111,60,29,111,33,15,200,93,87,200,62,100,100,50,87,110,37,63,200,100,100,111,18,12,111,50,25];
var allabs = [0,592102,544369,10,3,592102,516770,10,4,592102,595885,10,8,592102,543305,10,11,592102,452104,10,14,592102,453943,11,16,592102,458731,11,24,592102,592450,11,32,592102,596142,11,36,0,0,0];
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