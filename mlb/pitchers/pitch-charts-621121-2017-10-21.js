var allpitches = [110,22,74,211,67,59,110,66,55,211,66,47,200,65,100,111,46,84,211,62,80,111,36,69,211,69,65,100,75,0,200,100,100,211,100,91,211,53,80,100,63,25,111,31,54,110,31,55,200,99,78,211,71,73,200,50,100,211,46,84,211,100,100,110,75,68,200,77,94,210,24,75,200,83,100,211,49,44,100,0,32,100,100,72,400,10,37,100,39,29,200,95,97,210,25,38,211,75,86,211,55,99,211,48,76,211,51,81,211,82,99,200,17,26,210,50,79,211,86,69,211,60,74,211,76,100,211,69,99,211,66,100,210,29,58,211,30,71,211,78,100,210,52,39,211,57,91,211,69,70,211,51,100,200,0,31,200,0,45,211,38,64];
var allabs = [0,621121,458731,6,2,621121,592450,6,7,621121,544369,6,12,621121,596142,6,13,621121,595885,7,15,621121,516770,7,21,621121,543305,7,26,621121,453943,8,30,621121,452104,8,37,621121,458731,8,41,621121,592450,8,44,621121,544369,9,47,621121,596142,9,51,621121,595885,9,54,0,0,0];
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