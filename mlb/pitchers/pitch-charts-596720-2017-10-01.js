var allpitches = [110,60,67,-6.235558238886,15.36128397132492,98.0,200,92,44,3.4836859670507163,-3.0528296673108244,83.4,200,68,100,4.8489779397972,-3.7390078130142363,82.3,110,63,62,-7.452291053224345,13.771345107328681,98.2,111,43,26,-6.2605985052188045,13.513430894415599,98.6,300,100,44,3.288374800102848,8.40694623026784,90.7,111,61,17,-7.5560957715888595,15.506814333761639,96.7,111,51,60,-9.38649644755116,10.735322901340009,97.0,111,59,25,-8.388199010001983,11.622425479589687,96.8,211,80,52,2.974889974368192,-4.53320065970412,83.9,111,56,21,-9.368866067432124,13.1232366327414,98.1,310,24,43,4.162262695379508,4.572508074288864,89.6,110,63,75,-8.274337498934628,13.511544307752601,97.0,300,96,73,0.4527392203947864,5.6944902799946515,89.3,200,97,100,1.993151425212624,-2.941357638518892,83.5,111,49,53,-10.518774379939163,11.92027525524456,96.9,111,51,49,-7.0366005984090005,13.74935050378944,98.2,110,64,69,-5.001889053912996,14.41914795472896,97.9,311,60,65,2.970997384336776,8.148450427299215,90.7,200,100,95,6.582571222709088,0.07765464844790627,83.7,111,74,38,-6.500432811174456,13.75129753849212,96.5,110,37,68,-4.06083334258518,12.263319946051801,96.5,210,35,30,5.230485195763212,-4.9397667197934965,82.2,211,69,35,5.597269919226708,-3.367766700279,82.2];
var allabs = [0,23,572191,7,7,3,446653,7,12,2,607208,7,16,20,547180,7,17,21,506703,7,21,3,594694,7,24,0,0,0];
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