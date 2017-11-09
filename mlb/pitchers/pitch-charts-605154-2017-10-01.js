var allpitches = [300,100,100,3.347117433017769,3.651562924973792,81.0,110,83,72,-5.2354412692957695,12.640461814177584,92.7,211,64,96,3.219825114712648,-0.13354881770747712,80.3,111,83,26,-3.8021327981724014,11.278172489269384,93.6,100,86,83,-4.709766761395897,11.435812581022635,92.1,110,53,70,-4.429678157037612,10.640578849641267,92.0,111,75,60,-4.054381565741469,11.492073860807208,93.1,111,18,45,-6.1465995602686725,11.493107780777207,94.0,400,52,100,-9.969349605305236,0.8455038369147756,87.4,111,27,44,-5.174784410519578,11.674371876055718,92.5];
var allabs = [0,2,542908,7,4,2,658792,7,8,2,519299,7,10,0,0,0];
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