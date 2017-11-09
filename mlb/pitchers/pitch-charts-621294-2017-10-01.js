var allpitches = [110,51,60,-12.089225366452329,7.534734420367338,95.2,211,64,87,-2.770196757525132,-4.18783692400558,83.2,211,70,90,-1.1781001295415032,-3.191118385372996,82.8,110,56,66,-11.660403097487098,7.993926893497429,95.5,111,9,40,-11.7249207294773,7.526874984057887,96.6,200,60,96,-1.0228817869226414,-2.490046632187779,83.4,411,24,63,-9.398003948350334,1.4206040610316495,85.2,110,15,61,-10.030145756962895,11.263539952768847,96.0,400,80,100,-12.61628034312378,1.5429192204016202,85.6,400,0,35,-6.080067034738917,5.614516549873385,85.7,111,28,63,-14.131241557447677,8.579950737185152,94.1,200,96,37,2.0145328663118054,-2.0150432719890015,81.2,111,86,46,-13.824965368236311,8.810686702913946,94.3,111,55,46,-12.115252288166499,6.830257557618971,94.2];
var allabs = [0,3,620446,9,3,2,475253,9,7,2,459431,9,14,0,0,0];
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