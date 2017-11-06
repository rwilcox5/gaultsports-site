var allpitches = [111,0,48,200,0,81,100,27,99,111,41,24,200,26,100,111,0,54,400,22,86,110,23,65,111,19,51,111,60,20,110,52,74,411,100,57,411,54,92,400,100,60,111,62,47,111,38,53,100,67,0,100,58,88,100,96,65,100,30,17,111,50,67,400,99,73,111,78,45,110,27,62,411,97,49,111,11,75,211,29,70,210,27,28,211,19,76,200,7,100,200,1,53,100,11,9,210,79,38];
var allabs = [0,607455,543333,4,7,607455,519058,4,9,607455,593528,4,12,607455,444876,4,15,607455,460086,4,16,607455,460077,4,20,607455,456715,4,21,607455,593160,5,23,607455,466320,5,27,607455,461235,5,33,0,0,0];
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