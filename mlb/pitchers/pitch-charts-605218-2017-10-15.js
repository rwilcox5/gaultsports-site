var allpitches = [110,58,58,3.4304501819481388,13.381246368863884,97.0,100,73,88,1.7548648424652784,13.729914450031213,97.5,110,33,43,2.7873886892726727,12.912210096228256,98.1,211,23,97,8.558496207543477,-5.630281631468225,82.8,210,80,56,7.533625284790596,-4.791212920173463,80.9,200,49,10,6.149635973549927,-6.04888320777998,80.5,111,59,44,3.0636784819964187,10.360272551448595,95.9,111,70,44,2.428527480241596,13.050240840854695,96.6,200,100,93,7.320773545390242,-0.7435902293937983,83.3,111,46,24,2.436946018412336,12.663308854251202,95.9,211,60,98,6.79125990761926,-3.8752884394528953,81.9,210,51,61,7.326429045270432,-6.672885302263252,80.7,111,84,44,3.095998215344011,10.093867731711281,96.0,211,8,81,6.455014862483093,-4.665137889929568,82.4,211,70,41,6.927449789065056,-4.482140248633307,81.1,100,100,59,3.1062515301968174,9.97015011894726,95.3,100,100,34,1.0148802407128406,10.383406508193472,95.4,100,100,31,2.6236032620435266,10.449267919490746,95.8,110,34,27,3.6042135940365965,12.046219724614595,96.2,111,22,18,4.320197223419069,12.56003123726417,95.8,111,100,57,3.941551410624167,9.770306889584772,95.2,111,71,19,1.0210958008754025,11.848622997547107,95.1,211,67,100,6.658979709305705,-3.8077377947256785,82.9];
var allabs = [0,3,400284,5,4,3,523253,6,11,2,605131,6,15,3,624577,6,23,0,0,0];
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