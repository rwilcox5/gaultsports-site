var allpitches = [111,47,34,100,100,34,311,0,42,300,43,81,111,40,43,111,77,44,300,89,53,311,11,57,100,98,38,311,9,59,110,24,44,100,100,67,300,0,81,111,79,40,100,100,62,110,66,80,111,54,36,111,2,35,100,100,39,300,0,87,100,94,2,111,56,48,300,10,61,100,89,55,111,28,42,100,0,48,111,34,44,300,0,89,110,92,34,100,61,7,310,49,58,300,6,76,100,100,0,100,82,8];
var allabs = [0,424144,607471,8,5,424144,516782,8,6,424144,446481,8,11,424144,605137,8,17,424144,591741,8,22,424144,656669,8,28,424144,621559,8,34,0,0,0];
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