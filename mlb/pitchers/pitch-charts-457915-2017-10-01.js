var allpitches = [310,69,58,1.1597768278141252,4.055622485612597,86.7,111,73,55,-3.496596123441029,10.309094321426624,93.3,211,70,49,1.1341746160861672,-2.8592687788293323,78.3,110,32,19,-2.9997252669353136,12.193809464411048,90.7,110,73,34,-4.250242889493844,9.365678327988169,91.9,411,0,63,-3.1446658614078262,8.279391140451706,83.7,111,35,45,-0.03146827586014395,12.085750391791404,92.1,200,94,0,3.543209516518089,-1.8464794049841784,80.9,211,58,36,2.132182270679111,-3.793011640984707,77.8,111,26,19,-3.15104423756172,9.669357759980823,94.0,311,100,67,3.288951951279225,5.130834609748092,86.4,110,26,74,-1.6651390565097148,13.376277486293162,93.8,311,96,62,1.1553426921255192,8.863339388046802,90.8,111,60,19,-1.9867278898305445,10.451975453520184,93.8];
var allabs = [0,2,452095,7,3,2,645277,8,6,3,435559,8,11,2,518692,8,14,0,0,0];
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