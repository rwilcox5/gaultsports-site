var allpitches = [300,0,60,-1.0829838757225776,1.223117587369332,85.0,310,42,80,-2.3169406444939082,0.32609535063949324,83.3,300,0,69,-1.39013959237266,0.5376157782621012,84.0,110,12,50,6.2251915965598315,8.529693394554684,91.8,311,40,68,-1.853461598766792,1.1514999753858493,84.9,111,49,46,5.7765032112156725,8.714350454532564,93.8,100,8,69,5.709003821201208,9.838743388353612,91.4,111,37,54,5.845057422806004,9.415248907060331,93.6,311,13,46,-5.446471452215472,0.25154096914100277,84.0,110,25,62,5.727634573016256,9.132441642169908,92.4,100,100,32,5.27904632173362,8.262526871104631,94.8,100,100,6,6.364497721545637,10.440042739660488,94.3,311,54,46,-3.5672645363728437,-0.07676196939037308,84.5,111,74,78,4.08944313955614,5.272076828114352,93.9,111,61,11,5.44150729766166,8.435573175362496,93.7];
var allabs = [0,2,595885,8,6,2,543305,8,8,2,452104,8,9,20,453943,9,14,2,458731,9,15,0,0,0];
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