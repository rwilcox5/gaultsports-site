var allpitches = [111,45,56,8.625899413418951,8.46383253189624,91.5,110,71,47,7.018002366942264,9.01849181292414,90.9,411,85,67,6.853773219711565,3.8072345706158637,80.5,100,8,60,5.465599504985064,10.594757873312652,93.3,100,0,94,-0.2365641044781408,5.8163624573614925,90.5,411,77,25,6.455480080587083,5.8902567745718635,81.6,411,49,61,5.95504675486566,7.410912347437776,83.5,100,8,96,-0.7142972519310277,4.734460332570924,89.5,111,25,61,-2.625757035926568,3.010803351403968,85.9,111,49,50,-0.8463724270814856,6.974830002868801,86.5,111,39,52,6.015334151738772,8.995536080960916,92.0,111,56,19,7.464371523572185,11.63057908139058,92.1];
var allabs = [0,20,571875,3,1,3,572041,3,7,23,518614,3,10,2,425772,3,11,2,425844,3,12,0,0,0];
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