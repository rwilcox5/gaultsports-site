var allpitches = [110,91,66,-5.138544276550213,10.601805324843422,91.7,300,100,71,1.1361914482090305,4.638599070454366,85.2,300,100,65,2.0850840382077607,4.320897501166596,86.4,311,55,72,0.7620520935546611,4.553367939661957,88.2,111,41,35,-3.8257669086894293,7.653206829730232,91.3,200,82,100,-0.7758624367175944,-5.870085919800407,78.8,110,10,43,-3.2615998614149593,11.071465605939714,91.2,411,0,38,-12.684671475131275,5.756434080560328,83.9,100,19,100,-6.252770901181565,10.303733739134655,90.3,300,0,50,2.778743938991241,5.224130631037719,84.0,311,54,79,2.5592803439631626,3.4382431101970816,84.0,311,51,55,1.43516872759369,4.466473454422715,87.7,111,66,27,-1.1887976849314112,12.523915222876663,91.9];
var allabs = [0,3,606192,6,5,2,620446,6,8,2,475253,7,13,0,0,0];
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