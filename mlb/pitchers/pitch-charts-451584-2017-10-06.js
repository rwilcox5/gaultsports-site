var allpitches = [100,74,73,1.5992642443981024,7.903812047989698,92.2,110,59,51,1.3302232625948343,8.049477680583934,92.8,110,36,57,4.044210521722417,6.38663793884341,93.0,111,48,31,-4.847586380065987,10.992300211103666,96.1,111,40,61,-10.341396048113896,9.156025931081906,95.7,110,40,34,-0.2969892214641717,12.512827792711873,96.0,100,18,0,0.1367165358217181,9.902300696245193,95.5,111,67,48,-2.7128943373949914,13.134119125077152,95.2,211,53,100,0.43705259979779454,-4.687456926312908,84.4,100,92,56,-4.340142731292808,12.41105667688718,94.3,111,47,47,-4.637600330522803,12.98507113697158,94.2];
var allabs = [0,2,502517,9,5,3,475582,9,9,2,150029,9,11,0,0,0];
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