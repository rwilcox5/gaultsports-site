var allpitches = [100,86,85,3.1788437047855727,6.541074520139075,90.7,300,28,3,6.55719300962721,3.6834905704704215,82.4,110,83,70,-4.858424867469473,9.996330165470438,96.0,100,100,78,4.566662783815869,7.144083056246657,90.2,111,49,48,-5.969626015026633,7.99902620119718,95.9,100,81,65,-4.6522823006866325,11.091828022311635,96.4,110,57,55,-6.258318700486143,13.025961094370544,96.2,111,50,85,2.356140432962736,8.97764320675439,92.0,100,0,34,-5.072927524931287,14.141151447666545,97.3,300,99,100,3.9459696502895416,1.8685899528895455,85.8,300,82,100,5.138053013341256,3.6314248659716415,85.2,100,93,81,-1.6156175538271214,11.890573558602183,97.0,111,63,51,2.602907923479356,7.433033417419818,91.2,111,18,61,-6.493962908151393,10.572657286583638,96.9,100,65,87,-2.290306419523657,11.52177721350294,97.4,300,91,100,4.421918258853529,1.625779551503852,86.5,100,100,100,2.836979142569681,5.425396382943,91.2,111,41,82,-5.505604717254576,8.517930748481202,96.9,311,76,63,5.735710594396408,4.498760385760703,86.1];
var allabs = [0,2,518586,7,5,2,434158,7,8,14,621035,7,12,2,457759,7,19,0,0,0];
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