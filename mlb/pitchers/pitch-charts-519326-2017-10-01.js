var allpitches = [100,100,96,-4.640013728761565,12.594865979087437,96.9,111,66,51,-1.5767749865004286,9.696242512137154,95.1,111,50,61,-3.371402292307338,11.429259532053537,96.2,111,51,13,-1.7961610440231506,9.083305305186265,95.7,111,28,19,-4.0468629216991125,10.809058501190247,95.5,100,49,87,-2.4777776576991943,11.373557317868705,96.1,111,42,48,-3.1683211832394615,8.956368194823984,95.1,100,66,3,-2.3402916942408845,11.790485240251275,95.1,100,31,20,-1.610375702209232,11.41261180377009,94.9,111,31,27,-1.813426050484476,11.059286295269795,94.9,100,23,0,-3.592845880548792,8.200627642100772,93.6,111,62,23,-2.651004202402397,9.436240004099169,90.9,110,8,17,-2.1621846139674687,8.806298324635058,92.1,100,0,33,-2.3878584382101384,8.36955216336034,94.1,100,3,31,-0.5620282961237992,10.62126207171767,95.4,100,75,91,-4.789348222660109,11.744679325803492,94.8,111,58,60,-3.286307829716586,9.841764831432297,94.2];
var allabs = [0,3,502570,8,4,2,516949,9,5,14,608671,9,11,2,642707,9,12,2,641319,9,17,0,0,0];
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