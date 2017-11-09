var allpitches = [111,34,20,-7.636370825432772,10.79888776464294,94.0,111,35,39,-10.65621460999812,4.517826092947344,93.6,300,0,53,7.857229836733333,10.181033982147191,84.1,311,80,47,5.107402297993632,7.241673582009024,83.7,310,11,65,5.625037037326596,6.883234812801792,83.5,110,92,67,-11.741260336809397,5.688962802683112,92.4,300,100,97,6.099009060919212,3.428137732654212,81.3,110,46,79,-13.10600230883364,6.182191141254516,93.3,310,35,63,6.198471926817708,4.88759308708626,81.5,110,40,42,-11.267444900909004,5.73157528161582,93.0,111,1,29,-13.73013225290568,6.010073773855008,92.7,311,55,43,3.404720724409284,3.729058294364484,82.4,100,0,55,-9.908293813749973,6.76761309561162,93.6,100,76,100,-9.684682557522265,11.090641619027748,93.8,111,14,54,-13.581677128554961,9.738748778897245,92.3,100,100,95,-8.369935686042457,8.121141109968708,92.8,411,25,51,-9.949360156702223,7.270934121956881,82.4,410,52,77,-13.805997018993839,5.3012838561144715,83.4,311,100,77,3.0985188165595203,6.244325221543068,85.4,110,74,69,-12.11045012724024,7.539835524314988,92.8,100,99,87,-10.670287518125184,7.802906731153536,93.3,111,73,84,-11.53673692997268,4.82619565793934,92.5,311,46,38,2.291730782475396,6.836751108269256,82.2,311,90,87,4.346520306288828,5.04311328226584,83.5];
var allabs = [0,3,458731,6,5,3,592450,7,9,23,596142,7,12,21,544369,7,15,3,543305,7,19,2,516770,7,24,0,0,0];
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