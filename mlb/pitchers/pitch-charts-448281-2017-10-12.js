var allpitches = [111,25,25,4.104247699685796,13.5855017013162,94.0,111,74,43,3.3006852957030723,15.13807463312328,94.4,100,85,0,3.303971829168924,12.76409619501852,94.6,111,88,7,1.270808999779728,15.622574161395718,94.4,111,41,51,2.760189493951056,14.083201992663,94.7,111,84,26,2.940536155041432,13.930739858394482,94.7,100,41,0,2.282766265876488,11.544275606665524,95.1,111,45,0,6.1814129902306325,9.417022245092845,95.3,111,54,33,2.58926967747102,11.934552040720643,95.0,110,91,45,0.5972198343609456,12.9099767980356,94.1,100,5,2,2.62963051855428,9.849327024640285,95.1,111,93,41,5.824178055741072,13.166989918312801,94.3,111,39,56,3.900146086847376,14.9567715924498,95.7];
var allabs = [0,3,518792,9,4,3,595879,9,8,2,547982,9,13,0,0,0];
var num_abs = 3;
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