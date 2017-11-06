var allpitches = [111,0,53,110,23,49,200,100,100,211,56,51,111,53,39,100,0,11,411,50,46,111,0,52,211,50,36,211,38,60,111,47,51,200,57,99,111,38,80,111,13,70,211,100,100,100,16,15,111,27,35,100,0,31,100,0,21,111,14,32,210,16,38,111,10,17,211,79,49,211,50,97,211,82,81,200,0,67,111,38,18,100,98,51,100,94,63,110,49,73,200,95,93,110,73,50,111,55,36,211,100,88,110,53,48,411,24,50,211,55,78,211,59,56,211,55,66,100,0,65,110,7,48,100,43,86,110,67,73,211,78,87,100,0,56,400,84,100,110,56,72,211,66,87,211,22,71,211,76,51,100,0,65,211,31,32,110,19,30,411,0,32,200,95,94,100,89,50,200,84,88,411,8,56,111,59,48];
var allabs = [0,621244,596142,3,4,621244,544369,3,11,621244,516770,3,15,621244,595885,3,20,621244,543305,3,25,621244,453056,3,27,621244,453943,4,34,621244,458731,4,37,621244,592450,4,39,621244,596142,4,44,621244,544369,4,49,621244,516770,5,52,621244,595885,5,58,621244,543305,5,59,0,0,0];
var num_abs = 14;
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