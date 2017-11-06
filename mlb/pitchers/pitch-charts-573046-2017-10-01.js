var allpitches = [111,70,72,100,89,55,111,42,29,400,100,100,411,42,59,111,17,45,100,32,79,100,93,53,111,8,76,100,100,66,111,19,32,111,18,60,100,100,10,410,54,18,411,34,33,110,62,46,111,56,53,400,1,0,110,22,58,111,65,71,111,19,54,100,85,51,411,33,85,100,36,92,100,87,57,100,0,60,111,17,58];
var allabs = [0,573046,572233,6,5,573046,543302,7,9,573046,489267,7,11,573046,453923,7,15,573046,502117,7,17,573046,545121,7,20,573046,571757,7,26,573046,455104,7,27,0,0,0];
var num_abs = 8;
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