var allpitches = [311,69,95,2.450609522811516,6.123753018048072,83.3,311,67,100,3.239000353266108,6.417653043216983,81.4,311,100,70,2.25604829964876,4.8202767852036,82.9,400,18,100,-5.75565864858654,11.9167270888518,81.4,411,49,59,-5.8174072374180845,9.576256240469593,81.4,300,44,95,4.6692297961119,5.964352560959448,83.8,311,100,66,3.4044369349859758,5.439983429169708,83.3,311,100,47,4.7045953367820355,6.178374325316316,85.5,411,49,76,-7.036380444551927,7.708516883861904,80.1,111,85,74,-3.7225449318707398,12.187174554369241,91.7,311,70,53,2.8172593932603602,3.137648337952632,82.4,311,74,71,1.9861750471738921,4.124606815243633,85.1,300,100,99,3.3426385687107363,5.9334585071097115,84.3,311,60,50,3.772217320299216,2.973167672395524,83.6,300,53,100,3.6957951479429036,4.990666634317344,83.1,111,59,41,-5.111567962874592,12.4113441406362,91.1,110,28,40,-2.93457712721796,12.850725771815402,92.4,400,0,56,-3.7129457527658998,9.688302221741905,81.0,311,56,50,2.633027729528772,6.315742616784684,85.1,410,52,21,-5.697618322480476,9.733030678361171,80.3];
var allabs = [0,3,571437,4,3,3,656555,4,8,2,608384,5,10,2,596748,5,14,20,595284,5,16,3,641487,5,20,0,0,0];
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