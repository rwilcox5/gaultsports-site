var allpitches = [110,67,59,-2.666948986971852,7.801730992362719,91.8,111,99,53,-1.6412230222083481,8.277485306390076,92.0,310,86,76,2.6171747771612397,2.531498935595172,86.8,100,90,72,-2.021294941692636,8.8292839036917,92.5,100,100,44,-1.62300954661902,10.275102310389924,93.0,111,73,42,-1.86393415830708,8.898284925014112,92.8,111,62,32,-2.9820242091114237,7.266887161923385,93.3,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,,311,44,58,1.254069086909196,-0.4288409035022316,86.0,111,48,54,-2.847893792317776,8.28686705802084,92.3,310,40,66,2.26956292908036,1.852786899903888,85.2,111,43,56,-3.9010029498858123,6.396875960575393,91.7];
var allabs = [0,2,543807,6,2,2,608324,6,7,15,514888,6,11,21,621043,6,12,20,594828,6,13,2,502210,6,15,0,0,0];
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
        return allpitches[(firstp+ii)*6];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+2];
}
function sendXM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+3];
}
function sendYM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+4];
}
function sendVel(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+5];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendEvent(i){var abn = returnabs[2*i]; return allabs[abn+1];}