var allpitches = [300,0,12,10.630340581240178,-0.02428519569355727,81.9,100,9,17,-0.3052597993095277,9.24554059975582,92.8,100,5,21,0.16263897117584108,10.496582951578985,92.4,110,58,67,-0.33400069507389807,9.299165658741643,90.8,111,80,74,-0.17071402223630544,9.58634334285533,91.6,111,69,32,0.5265395801953698,10.073528351081535,92.2,111,51,65,-1.9162133707608109,7.745085759595007,91.2,111,60,19,-0.4584816159556555,8.008306096875259,91.0,311,99,98,12.448657814764204,-2.0707357351351434,82.4,310,19,26,13.414031250864571,0.6385017384316986,81.7,311,26,50,11.526827316651907,-0.9973707336595306,82.1,100,0,30,0.48259663024704796,11.311006836198022,92.8,100,13,0,-1.3182750447257507,7.578950440869038,92.3,300,2,34,11.91135306058067,0.3451370006534362,82.1,111,67,72,-1.7606609803570918,11.567936175522043,92.1];
var allabs = [0,3,543063,9,9,23,467055,9,15,0,0,0];
var num_abs = 2;
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