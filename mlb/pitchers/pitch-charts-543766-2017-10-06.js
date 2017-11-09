var allpitches = [100,91,92,2.1818097757038837,6.48128786036016,94.6,111,36,31,0.1012829562900798,5.15314398173082,94.7,110,45,67,0.5860493151410004,6.79744672436112,95.4,300,100,25,7.880959915775268,-0.3462452836433952,83.7,111,96,75,0.9321860335902996,5.902498297985772,96.4,110,19,71,0.2005402509919668,8.298549826161397,97.8,111,85,61,0.0063522577057691515,6.871830622545792,94.7,100,32,87,0.06135869794280652,8.311459572592453,95.7,110,9,37,1.505795734028604,7.28376080845998,95.8,111,100,40,2.04439865587458,6.827861382739212,94.6,111,77,29,0.9208305179713776,4.625611915021644,95.1,100,100,100,0.38624729432030397,6.4692214770057115,96.4,111,60,32,0.9621448231862424,7.7256940719528835,96.3,110,52,73,0.2729471179760376,6.73376395260462,97.3,100,94,68,0.383900745918222,5.312059666236264,97.2,111,33,47,0.3136835158313436,5.5650397170837715,96.2,311,58,73,7.9865239285015805,-0.26972070707501283,82.4,100,100,100,1.060412296753325,7.307804910533352,96.2,111,59,16,1.6220377743127439,6.248672918063076,94.5,300,100,100,7.622329946178876,2.74679013234942,83.5,110,74,47,0.7522573526631384,6.636723043127988,95.3,111,6,53,0.8587858421784744,7.370840198767439,95.2];
var allabs = [0,2,543305,5,2,3,453056,5,6,20,453943,6,7,2,458731,6,13,2,592450,6,16,2,596142,7,17,2,544369,7,19,2,516770,7,22,0,0,0];
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