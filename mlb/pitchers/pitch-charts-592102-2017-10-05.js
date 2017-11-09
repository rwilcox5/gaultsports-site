var allpitches = [211,80,51,5.441846347172445,-3.2449983821579953,84.1,100,60,0,-6.2311214413450315,11.029602758669764,95.5,111,42,19,-6.469137305349266,12.141032901510965,95.7,111,20,25,-5.974557046364985,10.183021528696546,94.8,200,70,0,6.586517686148653,-3.604792310999736,83.9,211,65,25,5.282696798931322,-6.012357592038107,84.4,211,100,100,4.104457388222339,-7.875853253249012,84.8,110,70,55,-4.869770272764346,11.980360742556883,94.4,100,13,34,-5.543765849834768,12.034160157850387,94.0,211,87,86,4.807873528004873,-4.0692587724933365,84.0,110,67,73,-5.565156451941711,9.677307101612076,93.7,111,81,39,-4.823397140312232,11.856081386223737,95.5,111,86,0,-4.746852351658297,11.515297552606642,94.3,110,47,26,-7.7842622212239085,12.000711751803717,95.0,210,89,49,7.353084503580388,-2.787415797379802,84.8,100,90,19,-5.756210073398296,10.699377669673288,94.9,111,76,64,-5.985103019969281,11.89969718072432,95.2,111,17,25,-5.883936473334803,12.787640749195539,94.1,111,81,32,-7.504496735105392,12.040651862771547,94.7,211,77,100,4.05370341442627,-3.5402667643844072,84.4];
var allabs = [0,3,592450,8,7,2,596142,9,10,3,544369,9,13,20,516770,9,17,3,595885,9,20,0,0,0];
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