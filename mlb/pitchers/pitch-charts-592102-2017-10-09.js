var allpitches = [110,60,57,-7.855488137897323,10.19855823376539,93.3,111,48,39,-6.735626159885642,9.925914115979051,92.6,111,71,26,-6.2086041368871285,9.48326883304555,93.2,100,7,8,-5.771029527143758,11.742499351576514,93.3,100,11,9,-5.674989426250485,11.85002991618477,93.5,211,97,44,3.297415270201361,-5.597426925254817,82.1,100,100,98,-8.259770038927787,12.485522220833436,93.8,111,46,47,-9.51921919808635,9.963905465936492,93.8,111,53,50,-9.766198875629813,11.336284218376228,93.6,111,61,57,-6.378600367290886,12.93960275980061,93.5,111,80,47,-6.26348514372919,10.740060751341096,92.6,200,100,81,2.4240730312380356,-4.958416847397396,84.1,200,71,15,4.898255750010837,-4.203086258216327,82.1,211,90,100,5.041321932609928,-5.328999826427313,82.7,210,33,40,6.461920611981913,-1.4160857080762526,83.9,210,88,60,2.7086226099747828,-5.595833762308594,83.6,111,28,42,-6.615056416331358,11.834237689379995,94.7];
var allabs = [0,3,453943,7,6,18,543305,7,10,20,458731,7,11,3,592450,7,16,2,544369,7,17,0,0,0];
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