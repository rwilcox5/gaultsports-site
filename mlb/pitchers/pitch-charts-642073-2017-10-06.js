var allpitches = [211,89,61,9.448381179707543,-2.78495010230472,77.8,211,65,51,7.98940348001058,0.6050385618702444,77.9,111,90,45,0.3026401134411252,14.57389895643912,94.2,200,52,100,8.988583310210124,1.747716714146832,80.7,211,57,61,7.6375351470521755,-4.14330299214054,79.1,111,81,79,-1.1658897017923067,13.692786390349319,94.2,400,14,70,-7.911514859705855,7.626956558604648,88.4,210,10,68,6.052687325751863,-2.5995636448814636,77.2,111,39,31,-0.2035444229715096,13.640475606094558,94.3,100,89,40,-3.0158811053498518,10.644740823399625,94.3,211,54,47,7.491164110307569,-1.297017963354864,79.1,211,53,46,8.012745218406467,-1.4156163945966238,78.6,111,23,53,-3.55705771289448,12.473916108407401,94.3,100,0,13,0.7489758091315235,11.470585230217932,93.2,111,50,38,-2.22830440862334,13.9137428406216,93.8,110,87,82,-0.2887854769681776,13.85407808886444,93.4,211,80,70,8.62607345673174,-1.051276611779237,79.5];
var allabs = [0,2,621035,8,1,22,608369,8,5,20,457759,8,6,3,641355,8,13,2,624577,8,17,0,0,0];
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