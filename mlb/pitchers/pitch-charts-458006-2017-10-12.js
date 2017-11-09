var allpitches = [100,100,83,-10.976014021335121,7.42807266337134,94.4,100,51,94,-10.796579955332149,5.933979835842347,93.5,311,54,16,2.282883409013052,7.436365077846757,87.9,100,94,73,-9.645383887441549,8.630632920805752,94.7,111,39,46,-10.645688867776332,5.426345394867552,94.5,110,73,60,-11.31020396780664,5.718190515862704,95.0,110,87,53,-10.140478415026283,4.882063637730252,95.2,300,100,88,-2.5173108741605157,7.354291987461863,88.0,100,99,34,-8.926877061445296,6.239657539451268,95.0,111,48,11,-9.916838398259328,9.243670769028864,94.0,100,11,28,-7.366972026720912,6.91776463640214,94.3,111,5,45,-8.016165829162068,6.748951464510048,93.7,311,82,26,2.233661808784464,6.767000683950973,88.3,100,48,90,-9.302912568250356,6.503583640372716,94.1,111,14,43,-9.44032005598728,5.215533151652052,94.8,311,57,32,0.5289685376307373,7.368022698181969,88.4];
var allabs = [0,2,595879,4,5,2,543294,4,10,2,445055,4,16,0,0,0];
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