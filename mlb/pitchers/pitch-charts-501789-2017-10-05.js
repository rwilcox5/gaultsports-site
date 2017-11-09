var allpitches = [110,80,42,1.2939205920988004,6.090654605700772,92.1,211,46,100,5.535288364616969,-8.984645881223791,81.2,100,100,0,-0.8688302075078467,5.424541409843654,92.0,200,64,100,6.181480616406679,-9.790553430646154,81.4,211,31,72,5.772493901971316,-10.736366968371179,82.2,111,68,57,-0.2621177553387989,7.352202149148928,93.0,100,28,0,-0.7110751479520079,2.901565386485908,91.2,111,73,44,1.5214033325834408,4.982610770551028,91.7,111,75,50,0.6003452618535523,5.832579912293171,92.1,200,88,100,4.108870872212284,-7.692963108055194,81.8,111,94,62,0.1783081019081683,4.616593676775821,91.9,111,63,22,0.35040450251527644,3.8505957273368043,92.4,100,94,69,-0.8314297714736151,4.156490864395021,92.5,100,16,35,1.3321064069313255,5.574922276836764,91.8,111,71,44,-0.27287828798204034,4.711643100420895,91.3,110,62,42,-0.18689734441674394,4.503948621558486,91.1,100,97,78,0.8693554611739065,6.234295777693115,92.1,110,63,31,-0.011496496656384117,3.707764811994953,91.3,111,65,58,-0.11010495301218184,7.024226433943901,93.5];
var allabs = [0,2,593428,8,8,2,434670,8,11,20,643217,8,15,20,605141,8,19,0,0,0];
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