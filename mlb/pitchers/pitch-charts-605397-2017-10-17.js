var allpitches = [100,100,70,-4.3613509694098,9.540550339166789,95.2,111,27,24,-3.4777832125431627,9.677965183590176,94.7,111,40,43,-9.595224916377,5.03881505489534,92.0,110,16,30,-1.776673904056148,8.443305353592155,93.9,311,67,68,4.899053962448002,1.4463494150978728,85.4,110,48,71,-7.278241307740208,2.699261535837706,93.3,100,27,70,-8.817979589461306,2.5935515076536575,93.7,300,100,88,1.0989991966982864,1.4498204779520731,86.6,111,72,72,-7.114553994704143,5.993456560249063,93.1,100,8,65,0.6599676818608544,8.609027249287521,89.7,100,78,90,-2.2678868494133497,6.565915635462671,90.5,111,44,25,-3.4535248382818162,12.0701929714642,93.4,111,68,97,-1.234855900891171,3.692956246982037,89.9,111,19,53,1.1089578954257413,9.848527489484573,92.0];
var allabs = [0,2,516770,7,3,2,543305,7,5,20,453943,8,9,20,452104,8,14,0,0,0];
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