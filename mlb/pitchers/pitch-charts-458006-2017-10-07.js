var allpitches = [300,95,59,-0.10301189563748292,5.86268495425573,87.6,111,15,57,-9.705454764792972,4.523342329065461,93.5,311,52,46,3.173119038644674,6.8806960962683466,87.8,311,15,75,-5.716870044650519,5.137728019116704,85.3,300,77,80,0.7058555940652995,7.314408722830214,88.6,300,89,44,0.04629555842045813,8.889358263483821,88.6,300,99,63,1.4675433377743952,7.261862720166517,88.1,110,73,63,-12.743379795095429,9.446926225385106,94.9,110,72,49,-10.91161670689967,6.453890399681198,94.5,111,0,39,-6.973716663691571,8.912938519312302,94.4,100,100,74,-10.321776746667936,6.446014936382988,95.2,311,79,41,0.8034449606878096,6.36584000151808,89.1,100,5,73,-8.410904110452261,5.741461286485478,93.0,111,47,42,-9.789683989275288,7.599648887776557,94.5,300,18,93,-4.375668985658135,3.6988026186169636,84.4,100,10,32,-6.052833822456451,4.900980063790605,93.8,110,35,36,-9.060974926860673,4.179280745536124,93.0,111,36,43,-7.453992607013004,7.268914797838615,93.6,110,44,70,-9.344553556798163,8.636409675690393,93.5,300,100,60,1.10232848021821,2.0258381807634454,86.3,300,100,63,0.14505972624825525,7.428304453732215,88.8,100,99,55,-9.104765779503483,8.901283145042061,93.9,111,41,33,-9.673988954362132,8.777133503939144,94.9,111,24,75,-9.987228286857599,5.420442024110231,93.3,111,23,23,-9.256324871478864,9.029395698696987,94.8];
var allabs = [0,2,592178,6,3,2,519203,6,4,14,575929,6,11,2,608365,6,14,20,450314,7,18,2,595879,7,25,0,0,0];
var num_abs = 6;
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