var allpitches = [110,52,37,7.648099665288349,9.74388621409398,92.8,411,77,15,11.112195250387355,8.754588780265344,85.6,100,5,59,5.8251626365832045,8.452972442809823,93.4,200,38,90,-0.3076437154670736,-1.0612884769961881,77.7,411,71,60,11.080728236774917,5.747888185268628,84.7,100,27,21,5.627750036609916,8.853319493596752,92.3,110,12,74,6.589780953134664,7.951925179540115,93.2,211,42,73,-5.6363990579104675,-4.883218867887011,77.0,400,14,100,9.87823051035918,4.532015179492824,84.1,110,74,45,7.410382593980028,7.109235232341083,92.4,200,0,100,-0.8533057030002156,-6.949718417493504,78.7,100,16,68,3.410365183323708,2.77970927492466,90.4,111,47,56,4.301034444270661,7.9440614796998155,93.4,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,,111,93,34,10.434173224912788,6.3973896689673,93.4];
var allabs = [0,21,547180,6,2,14,475582,6,9,21,502517,6,13,15,543685,6,17,2,446308,6,18,0,0,0];
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