var allpitches = [111,40,15,-8.669109132026177,7.317816775130334,91.9,111,44,86,-10.220449646041065,6.341181974005748,92.5,111,14,57,-12.220086126466263,8.271596645898784,93.5,111,0,60,-8.940131905200344,7.003111100644073,93.6,411,51,71,-13.896214040092321,7.430433325135159,89.9,100,100,52,-8.921817324698463,5.21933124979095,93.9,111,0,24,-7.066644201810838,5.779173439106348,93.6,311,76,63,-3.2160220522504197,4.019549559521092,86.4,411,21,76,-10.827478033254557,8.367160244953983,89.2,110,100,43,-7.4371344890301145,7.347691946535277,93.5,100,0,89,-10.488257925748982,5.8740757187170445,93.6,110,78,26,-9.025826584150634,8.301730076005871,94.3,111,40,44,-8.87089310305819,7.739283041440629,94.4,100,100,0,-4.482549116128169,9.068803739935944,93.7,111,30,68,-8.53485047985383,6.659504448337526,94.1,111,34,14,-8.27918259392463,6.690159148297532,93.7];
var allabs = [0,3,608365,9,10,16,518792,9,14,2,595879,9,16,0,0,0];
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