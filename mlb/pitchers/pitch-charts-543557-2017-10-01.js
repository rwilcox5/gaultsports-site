var allpitches = [100,83,5,110,41,44,100,100,67,111,59,41,100,95,0,111,81,21,200,15,83,100,49,100,111,27,30,111,34,59,211,41,57,111,100,51,111,60,58,200,0,79,200,87,33,100,65,84,111,60,42,100,100,23,111,100,53,411,100,36,411,78,70,211,47,73,111,17,24,111,78,23,211,15,66,211,20,77,111,20,39,400,100,87,211,30,60,100,97,91,111,47,70,100,100,28,100,100,58,110,36,66,111,79,52,111,100,47,111,52,77];
var allabs = [0,543557,571740,1,4,543557,446359,1,12,543557,458015,1,17,543557,594807,2,21,543557,553993,2,23,543557,571697,2,24,543557,640447,2,29,543557,571466,3,31,543557,592547,3,36,543557,571740,3,37,0,0,0];
var num_abs = 10;
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