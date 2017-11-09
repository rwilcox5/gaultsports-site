var allpitches = [110,6,74,-10.211443947299676,9.677906187695722,93.3,111,55,65,-9.09557387603639,9.667758338797888,94.9,100,100,55,-6.728272064450019,13.119693718543779,96.1,100,62,100,-6.669282048550452,13.299854373066292,96.1,100,100,54,-5.523012768604522,14.530545018578117,94.9,111,85,77,-0.3297194164169761,10.06278871994995,91.0,100,100,91,0.41839860410474206,12.360212886418765,91.7,111,44,28,-6.108343901019239,13.506142459312581,95.4,110,26,72,-7.059564628244974,12.750382098856885,95.6,111,18,54,-5.343315351046229,13.510726612596699,96.7,111,60,39,2.8381157120943312,8.549145658665218,91.0,111,86,51,2.633518174063161,6.3528121273282405,91.3,110,10,54,-4.748061123999979,12.544732739355947,96.0,100,16,100,-8.22527666883379,11.10397079701395,95.9,400,41,100,-8.930743713672914,10.000020087958447,82.8,100,100,45,-2.4616608040225003,12.872831511156894,94.7,111,73,41,1.6597692656310303,8.105820317248082,91.8,111,29,30,-0.6530078163391638,10.474229793259983,91.9];
var allabs = [0,3,642180,9,6,2,407812,9,12,2,595885,9,18,0,0,0];
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