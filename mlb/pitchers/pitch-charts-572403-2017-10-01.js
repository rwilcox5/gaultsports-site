var allpitches = [100,100,73,-2.31895294037412,13.38496911695796,95.4,111,48,35,-5.442472577359451,11.695350044052265,93.1,100,0,65,-7.2088415232764405,9.18355517326362,94.7,111,61,18,-5.140044348839364,13.073373684049201,95.7,200,100,47,6.995127141594456,-4.940889968204016,79.2,111,31,2,-4.504738318156188,10.820569352910995,94.3,111,72,55,-2.662674455648796,14.355428028056881,95.9,211,92,100,5.94129630369054,-3.9471008291331358,80.4,100,0,13,-8.088646893310417,10.044858362707163,95.0,100,0,47,-8.40525068563986,7.031869634056429,92.7,100,78,79,-8.8417298275083,11.646190624332336,95.0,110,65,54,-8.477600678251344,9.107855997149269,95.1,111,39,43,-5.903016569051064,9.141749562838164,93.9,110,78,64,1.7580759954525242,3.168172153543068,88.6,100,100,66,-3.342894831713508,12.46181657811,96.1,200,46,100,7.365302447277648,-7.236646037367912,77.9,111,14,54,-8.925173238986904,7.2473031720146395,94.3];
var allabs = [0,23,460269,8,2,3,500871,8,8,2,643335,8,13,2,641598,8,17,0,0,0];
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