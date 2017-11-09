var allpitches = [110,89,52,-5.40222086447192,10.107805250493973,88.3,311,86,89,0.9563853502279187,2.6771945994465236,83.5,210,40,35,8.742536674522608,-1.952552114525544,69.1,100,62,10,-6.845425773010804,11.836852993162111,89.0,311,81,49,1.0764486221960294,3.8167695728106033,83.4,300,100,66,2.1350505119321554,5.562844210674126,85.9,111,63,29,-6.816684480846664,9.013143863134133,89.0,311,84,43,0.1863315832836447,6.875947818738208,85.9,100,56,86,-9.993062497490154,11.722318388594022,90.0,311,47,52,-1.284547359363273,11.012029479525667,85.4];
var allabs = [0,2,453943,8,2,2,458731,8,8,2,592450,8,10,0,0,0];
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