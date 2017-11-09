var allpitches = [111,0,46,-10.034355483125447,2.881268005420483,89.1,300,63,7,3.2007031828610426,9.68779440439527,81.5,100,0,85,-8.508820816469111,-1.9716601652606562,88.7,100,0,64,-7.118158791221578,-0.8523350208821121,88.6,110,38,84,-10.592925152839076,-5.003929897582056,88.4,311,38,33,8.095841535286837,9.739951826367303,80.7,111,10,68,-14.178449011789203,-3.6888472308147,89.2,111,38,52,-10.70525461795888,-2.2492149129701717,88.6,311,44,38,6.870474147897454,7.9358823637962495,81.3,111,35,4,-10.01385494677118,8.160957444113649,89.5,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,,310,51,62,5.954602956560825,6.578625131861095,81.3,111,15,81,-12.819846300562347,-1.389549703756864,88.5];
var allabs = [0,3,592450,8,6,3,596142,8,10,15,544369,8,14,2,516770,8,16,0,0,0];
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