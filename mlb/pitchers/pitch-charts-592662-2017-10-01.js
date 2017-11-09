var allpitches = [211,41,100,-3.256540961949433,-2.0103521056406644,82.8,311,38,85,-2.5061179647102723,1.9554192343251562,84.6,200,100,95,-4.5212301992188575,-1.7385285184704322,82.5,111,35,75,-0.47997878906665886,9.75736888697448,95.6,100,96,66,1.1829910041616465,9.403061929018158,94.5,111,68,59,2.2670348744032967,8.261985300554874,95.2,110,28,60,1.4392658740778779,9.133502885497073,94.4,211,25,97,-2.575707097680505,-3.992367236249009,85.1,111,24,64,1.6143736713407497,9.723863012641566,94.5,100,0,100,1.1936296989653377,9.170777418574104,96.6,311,30,85,-2.8074629906962527,3.6783403125275673,86.0,300,0,100,-4.536093696761297,3.3152231128191794,86.3,211,47,95,-2.552504442198436,-1.2977994552614613,82.6,300,0,100,-2.569579467695277,5.088608921925134,87.5,311,1,83,-3.145138519703651,2.302903036099141,86.2,110,71,61,3.583280718098278,9.829265658092286,92.8,211,69,74,-4.177789962127507,-2.863263336261386,82.7,211,26,100,-4.808164954394567,-3.0097171864375607,83.6,100,77,30,-0.021309720190972617,9.549871597077097,94.6,211,50,100,-4.482454961858347,-2.5447379893332704,85.2,300,0,100,-1.2440294975817356,3.8754052831798598,85.6,111,82,17,2.3676810792537335,8.759168821088679,96.3,211,29,100,-4.944851664268812,-2.5772868448158737,84.6];
var allabs = [0,2,593160,1,4,2,466320,1,6,23,543333,1,9,2,519058,1,15,2,593528,2,17,3,444876,2,23,0,0,0];
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