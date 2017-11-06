var allpitches = [100,36,1,200,89,13,100,24,0,110,61,65,100,14,0,100,0,13,111,68,57,100,67,84,111,41,62,200,100,100,111,57,32,110,18,43,100,19,20,111,39,14,111,39,43,110,40,54,200,91,100,111,65,52,100,90,96,111,72,18,111,50,29,111,60,33,100,95,94,111,17,27,111,48,36,200,93,100,111,67,59];
var allabs = [0,448614,594824,8,5,448614,608348,8,11,448614,642423,8,15,448614,657557,8,20,448614,591971,8,22,448614,622270,8,27,0,0,0];
var num_abs = 6;
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