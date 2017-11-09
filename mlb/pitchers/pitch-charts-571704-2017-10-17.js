var allpitches = [110,38,41,-7.26442924255808,10.346684276991438,99.6,300,99,100,-1.0675329079827087,2.618544622672117,88.1,111,20,33,-6.532426339871112,11.108701755603926,100.2,311,32,34,-0.6094359848470365,2.313730262780629,86.9,311,39,37,-0.4038492891844203,1.660955601271596,87.1,300,64,82,-2.0951678737365613,-1.981329619011174,86.4,300,70,100,-2.6015076410721445,-1.5235342273857138,86.7,111,2,26,-6.868112738478732,12.667026376937269,100.0,311,60,84,-3.3498596481078864,-1.0512910034697762,86.2,110,60,61,-5.623509226937472,10.10009784679803,98.7,111,26,52,-2.8618685173889187,11.682645869335111,98.2,300,74,100,-2.4541617072793094,2.485235067636385,87.2,300,19,99,-2.0105244875593753,3.487868148169908,86.2,111,52,61,-3.434265433266472,10.664009206016857,98.6,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,];
var allabs = [0,2,458731,8,4,21,592450,8,9,20,544369,8,11,21,596142,8,14,15,595885,8,18,0,0,0];
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