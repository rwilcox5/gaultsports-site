var allpitches = [100,100,100,-0.5888425864252459,6.01216114368183,91.7,200,59,96,2.1581414020654783,-3.7341783383487295,84.3,110,25,80,1.109986246600854,9.998785085547263,91.6,200,21,100,3.2551126057999564,-8.86634600921298,82.1,111,39,40,0.2935233576056652,12.627089034028927,92.9,211,71,56,4.80137864386191,-6.747616854914735,84.1,300,19,97,5.525685109926827,-0.647597766290136,84.3,100,4,71,2.0025898084539318,10.009749669869496,91.5,210,18,78,5.518881287579957,-3.7825168457405223,83.1,110,40,65,-0.311387219325149,10.263676189936017,92.7,211,83,100,6.142029802147635,-4.591276436725416,84.8,211,80,100,4.6237656009643935,-6.050989753158932,84.5,100,7,24,1.9831136251070585,15.053154697080142,92.3,211,62,61,4.6601626839001185,-6.501683185232233,83.7,211,13,56,6.52435311876763,-5.43099948330041,81.9,100,100,86,0.2354533744068046,6.999486459290807,92.3,110,78,70,-1.129869013939189,7.926770993800574,92.4,311,55,67,4.381465615350076,3.3356714889057804,82.6];
var allabs = [0,14,514888,6,7,3,621043,6,12,21,493329,6,15,2,608324,6,18,0,0,0];
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