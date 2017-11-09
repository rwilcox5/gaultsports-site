var allpitches = [100,100,55,4.184360218049745,12.283792904231149,99.4,111,48,46,2.431701187254038,12.244421980094009,98.9,111,95,37,1.6303073250763354,11.68295955444331,99.3,311,22,98,-7.981186377695638,1.945865568844026,88.4,111,30,64,1.5633596686123825,8.953565943769474,100.0,100,93,26,1.4249215335610093,9.42551882026218,99.3,100,100,25,0.32653264936528514,11.184378588692088,99.9,310,51,68,-6.724106794903777,2.1621036566916065,86.0,300,92,83,-8.90569326940908,-1.7535008000478054,84.3,111,74,60,-0.8908912920442724,11.001656327336052,98.7,111,65,82,1.8141415312130609,10.452812758540306,99.3];
var allabs = [0,3,502210,9,4,20,514888,9,5,21,621043,9,11,0,0,0];
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