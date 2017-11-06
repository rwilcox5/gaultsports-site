var allpitches = [100,0,3,111,51,46,100,93,10,100,9,0,100,22,0,110,49,29,100,63,7,100,10,33,111,25,47,210,62,33,400,81,100,200,100,100,110,45,62,111,32,16,211,59,22,210,23,41,111,79,32,111,80,22,400,17,100,111,32,43,211,88,65,400,40,69,111,53,26,211,89,60,111,71,12,400,65,100,111,80,60];
var allabs = [0,425492,595879,8,2,425492,664023,8,7,425492,445055,8,12,425492,592178,8,15,425492,519203,8,27,0,0,0];
var num_abs = 5;
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