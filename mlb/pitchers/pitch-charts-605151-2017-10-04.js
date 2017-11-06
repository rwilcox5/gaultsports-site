var allpitches = [111,76,67,100,1,100,110,26,82,211,64,91,200,65,90,110,44,72,211,59,31,100,95,100,110,62,82,111,52,59,110,34,83,110,17,77,111,96,30,100,0,63,211,30,98,100,100,55,111,58,42,111,74,55,111,91,27,211,55,53,111,79,56,100,65,12,110,51,58,110,94,51,111,53,13];
var allabs = [0,605151,518934,7,1,605151,471865,8,4,605151,571448,8,7,605151,596115,8,10,605151,467827,8,15,605151,642162,8,21,605151,518960,8,25,0,0,0];
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