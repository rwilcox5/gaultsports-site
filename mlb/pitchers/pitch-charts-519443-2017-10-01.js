var allpitches = [200,3,54,1.1998735333892063,-8.457739472554236,80.1,111,52,45,-2.01595683871164,3.687246622649928,87.6,200,16,0,1.736709722811876,-9.60070889452614,79.6,211,22,66,0.08114120916848004,-9.153110244901896,80.6,111,26,45,-5.605462228915932,9.820421344792681,91.6,111,46,46,-2.602168847802,4.720040607838104,90.3,111,74,28,-1.375963334346612,5.161385590214616,89.0,111,73,52,0.41669995197837123,5.344659902536752,87.7,100,33,35,-5.033312834735388,9.593290662272857,91.5,210,88,58,0.2955614025556452,-7.834317095754228,81.1,100,15,34,-5.332370970299004,9.203008476140171,91.5,100,12,85,-6.01756546594668,10.338022094362945,93.5,100,100,47,-1.476931456804284,3.3547520475088435,89.1,111,57,42,-0.9566280485011536,2.3435186405399397,86.9];
var allabs = [0,21,493329,6,5,2,608324,6,6,2,643603,6,7,14,545358,7,13,20,605204,7,14,0,0,0];
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