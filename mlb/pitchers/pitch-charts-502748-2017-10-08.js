var allpitches = [110,75,62,311,90,65,110,41,71,100,62,80,100,100,65,111,34,64,311,57,68,311,73,63,111,54,51,311,83,63,310,63,65,110,86,55,311,72,72,300,100,72,300,100,85,300,100,84,111,51,33,111,54,53,110,24,30,311,28,57,110,34,72,111,53,64,100,100,51,100,74,93,100,100,100,110,48,51,110,53,87,100,70,94,311,79,72,311,31,54,300,42,89,111,17,47,100,87,46,311,74,80,310,4,67,311,6,71,310,74,50,110,54,55,111,56,52,300,85,81,311,17,52,100,2,6,110,7,50,400,46,99,311,34,41,300,0,27,111,0,40,310,24,72,111,33,66,311,13,72,100,54,0,311,65,71,100,77,79,300,100,98,311,66,86,200,100,76,111,29,21,111,31,65];
var allabs = [0,502748,593428,1,2,502748,456030,1,9,502748,643217,1,10,502748,605141,1,18,502748,519048,2,20,502748,434670,2,22,502748,646240,2,28,502748,506702,2,32,502748,598265,2,36,502748,593428,2,39,502748,456030,2,41,502748,643217,3,47,502748,605141,3,55,502748,519048,3,57,502748,434670,3,58,0,0,0];
var num_abs = 15;
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