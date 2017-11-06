var allpitches = [100,26,18,111,19,51,100,0,100,100,89,67,111,51,29,111,15,34,100,84,76,111,79,57,111,53,56,100,43,80,111,31,63,111,43,34,100,24,18,110,80,72,100,100,13,111,21,30,100,88,100,110,95,50,100,0,100,100,31,84,111,18,49,111,59,0,111,43,43,100,43,86,100,100,46,111,29,46,200,0,100,100,0,75,110,75,66,111,28,89,111,28,49,111,80,32,100,0,100,111,33,10,210,34,40,211,57,23,100,70,24,111,29,53,211,24,70,200,32,84,110,86,57,211,2,68];
var allabs = [0,642239,640447,5,5,642239,571466,5,6,642239,592547,5,12,642239,571740,5,16,642239,446359,5,22,642239,458015,6,23,642239,594807,6,26,642239,553993,6,34,642239,571697,6,36,642239,640447,6,38,642239,595453,6,42,0,0,0];
var num_abs = 11;
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