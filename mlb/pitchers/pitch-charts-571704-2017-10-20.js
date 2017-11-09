var allpitches = [100,1,57,-8.285254403122359,8.639071104702595,97.5,100,7,47,-7.5448116664683464,6.3312177946344095,96.7,110,33,79,-7.8210236335097765,9.763897488243668,97.6,111,59,54,-8.302828365997621,8.718304097025452,98.1,111,72,54,-5.4291972340662,10.894233533741708,99.2,100,80,29,-4.287525226281285,11.93225185611735,98.9,111,59,65,-6.2958073513631625,11.700805211003892,98.6,100,100,100,-6.409095385504127,12.911487501397694,98.7,111,52,56,-6.25276365932478,11.105967048855742,98.1,110,36,74,-5.050189388527121,10.922075019301554,98.0,311,52,65,-2.113419735198385,-1.13674388264494,85.9,311,49,45,-1.3105794976475689,-1.3495861832961815,87.2,300,82,100,-2.5620203740484975,0.6601070061187566,86.2,300,57,100,-2.971336745177769,-0.16082996530632437,85.6,100,0,26,-7.935511480427385,7.723886542612586,98.4,100,4,71,-6.262164452426474,8.391491935192992,98.2,100,47,16,-6.450653396697327,9.289005842108644,98.2,111,38,65,-5.894485809115859,10.114535278972108,96.7,100,74,87,-4.962467913824872,13.156359856376707,97.4,111,43,79,-5.718594026744551,10.329431310572518,96.9,110,44,71,-4.9454387331678475,10.914490234226655,96.3,311,62,85,-1.5565082203440102,-0.2269729494239165,85.1,311,71,82,-2.4840334444247665,-1.9649280342853166,85.3];
var allabs = [0,2,595885,9,5,20,516770,9,9,14,543305,9,16,2,453943,9,20,3,452104,9,23,0,0,0];
var num_abs = 5;
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