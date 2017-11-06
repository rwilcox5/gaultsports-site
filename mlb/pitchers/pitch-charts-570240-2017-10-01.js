var allpitches = [111,20,28,100,53,100,111,49,37,110,13,71,111,54,59,110,44,22,111,47,55,300,100,100,300,62,100,111,19,17,110,47,60,100,73,79,100,0,52,111,39,45,400,12,100,111,26,68,100,32,18,110,34,77,300,80,31,111,51,53,111,41,39,310,58,62,100,41,14,111,39,57,110,7,52,111,70,25,311,72,100];
var allabs = [0,570240,623182,7,1,570240,571740,7,5,570240,572227,7,10,570240,458015,8,16,570240,594807,8,22,570240,553993,8,24,570240,571697,8,27,0,0,0];
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