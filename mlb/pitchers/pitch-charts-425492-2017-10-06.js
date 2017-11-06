var allpitches = [200,39,9,211,73,57,111,1,26,200,37,0,211,0,19,111,22,0,111,48,40,111,9,24,111,35,38,411,0,59,111,14,52,100,29,6,110,32,38,400,59,100,411,14,63,111,55,40,111,32,43,111,63,51,111,33,39,500,50,100,500,50,100,500,50,100,500,50,100,100,99,23,111,39,19,200,36,0,111,80,35,210,54,36];
var allabs = [0,425492,445055,8,7,425492,450314,8,10,425492,592178,8,11,425492,519203,8,19,425492,575929,8,23,425492,547982,8,28,0,0,0];
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