var allpitches = [111,60,9,4.952604013682277,11.444616931637611,91.9,111,42,61,5.975009755324337,13.803537690595142,94.2,111,45,18,5.799857409241603,12.669017331765572,95.2,111,29,17,6.455634286792918,11.57745536228409,93.2,300,0,45,3.884592831195614,1.3852862636220191,83.2,100,78,4,5.023759170596675,12.019533406115286,94.1,100,0,42,-3.9398131788455353,13.87690642901014,94.4,111,35,51,7.2806232571383305,10.124322891717899,94.5,110,44,19,7.1435298736786965,10.795098938041393,91.4,311,54,50,4.388586844517658,-0.3150799215428643,82.0,311,58,69,2.867554776153937,0.882131996548011,83.3,110,76,70,3.542025139906566,13.793651941437401,95.6,311,31,41,5.548782630371066,-0.8988426554441782,82.2,100,74,0,4.2159454257320945,11.494090310061512,94.1,100,0,33,-4.933727625509911,12.507860820691493,96.5,111,65,19,3.531389859716068,11.88229513750311,94.1,100,100,0,5.457054604912747,10.78830896948593,94.3,311,15,45,5.9049490859868285,0.8866356794866221,82.1];
var allabs = [0,3,455104,8,3,2,571875,8,8,2,606466,9,10,3,453923,9,16,2,444482,9,18,0,0,0];
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