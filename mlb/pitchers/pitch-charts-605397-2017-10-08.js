var allpitches = [100,100,36,0.452598204484414,6.392429962339366,90.7,111,62,20,-3.177082849248698,9.837332494175412,94.7,311,100,100,1.2620692708322105,3.5794583166121288,85.6,311,64,74,5.034722862385474,1.9603020737895966,85.8,300,63,72,3.233818866018808,0.704186101963643,85.2,311,33,94,1.3676025571289896,1.0599245137885098,85.5,100,0,0,-3.11737349464112,9.143484418697323,94.5,311,35,83,1.858310007588115,-1.0961116080985018,83.9,311,54,74,4.779528897634698,0.9084101242684265,84.2,110,19,52,-2.9193196200639147,8.946158686679212,93.8,111,7,34,-2.6057803147985643,9.601151288288555,94.5,110,33,73,-2.7001368408365964,10.150119508255704,93.9,111,10,94,-6.60103037157992,5.496171795267009,94.4,311,44,63,3.7145259526652348,0.6326297232499726,85.7];
var allabs = [0,2,506702,7,4,23,598265,7,9,2,593428,7,11,2,456030,7,14,0,0,0];
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