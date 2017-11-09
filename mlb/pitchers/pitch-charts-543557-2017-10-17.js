var allpitches = [200,0,100,-4.893380335289016,-4.989654588618471,78.8,110,52,59,8.475610165313778,8.497678002945474,93.4,100,26,97,7.403463212361148,8.690693654748367,93.4,111,52,29,9.25842221133063,9.039701057980935,93.3,400,67,100,10.784292107229435,4.603203078554374,84.8,100,0,61,4.311077896499583,6.121926295783087,92.2,110,24,54,5.820585880104629,3.0072570670879832,88.3,200,62,81,-1.4363093554656383,-4.69523185192544,77.7,400,14,100,10.347498559382228,5.900378971401073,85.4,111,44,55,2.6948013078089907,3.6635577112735964,89.4,100,99,22,3.016534382179762,3.188390276383253,87.8,111,65,74,6.051739363322333,11.19807515052859,92.0,400,13,100,11.573965677408399,5.445937873368308,85.5,111,62,35,5.199495543414276,5.55574145964861,92.1,111,88,40,9.44462577242265,10.32364343283511,92.7,111,37,55,4.19732947078788,7.11753983779748,90.8];
var allabs = [0,14,523253,8,6,20,605131,8,10,3,518586,8,15,2,571657,8,16,0,0,0];
var num_abs = 4;
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