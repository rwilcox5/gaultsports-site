var allpitches = [110,79,52,211,80,38,211,98,74,211,100,65,200,76,0,110,74,39,111,48,47,100,0,76,100,0,55,210,5,73,211,64,85,200,93,71,111,16,52,100,44,90,200,14,20,200,87,87,200,51,1,211,86,68,211,68,68,200,67,100,211,84,67,200,99,42,111,58,62,211,71,48,111,3,68,211,63,75,211,56,79,211,21,81,110,70,76,100,0,6,200,100,73,211,31,55,211,33,24,211,41,76,211,76,100,100,38,100,210,71,80,111,64,89,211,49,100,211,36,100,211,38,86,100,85,97,211,68,79,100,0,36,100,0,36,200,0,0,100,37,0,200,9,15,211,59,86];
var allabs = [0,621121,593428,4,4,621121,456030,4,7,621121,643217,4,13,621121,605141,4,17,621121,519048,4,21,621121,434670,5,24,621121,646240,5,26,621121,506702,5,29,621121,598265,6,35,621121,593428,6,39,621121,456030,6,43,621121,643217,7,47,621121,605141,7,49,0,0,0];
var num_abs = 13;
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