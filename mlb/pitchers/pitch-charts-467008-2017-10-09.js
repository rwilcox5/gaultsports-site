var allpitches = [100,0,32,-9.028089183821582,5.876766026249452,94.8,111,48,66,-0.9633741500591776,3.0144034524759427,88.1,111,47,42,-6.339235596377371,8.658757573459159,95.3,110,73,61,-5.60213563465418,11.540591387932913,96.6,110,85,54,-2.5029764005805006,10.898235285053316,95.4,111,91,29,-3.778437149941621,9.526596325502332,95.6,100,22,84,-10.570141162443129,7.266063630666258,95.3,311,44,28,-0.4452478582140399,0.7765563817803472,82.0,100,100,100,-4.313657403341894,4.119508324231648,88.3,311,25,75,1.0533324627148957,-0.7839161070572116,81.7,311,23,100,0.745579758778649,-1.2011701743275867,81.6,300,70,100,-1.5316664087382037,1.9146108203969052,86.9,100,100,70,-3.100960248543232,9.317720220663162,95.3,110,71,74,-7.9866174181156335,10.17360619164842,95.4,300,16,55,2.034804585263516,1.1225954886661689,82.3,111,45,44,-6.920758761357156,9.18708574191402,94.6,311,51,48,1.8308932822619244,0.6802765049628128,80.9];
var allabs = [0,21,475582,6,3,2,150029,6,6,2,446308,7,11,2,572191,7,16,2,453286,7,17,0,0,0];
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