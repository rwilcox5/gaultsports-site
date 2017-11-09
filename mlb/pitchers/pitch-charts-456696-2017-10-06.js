var allpitches = [300,2,0,3.0758546907695044,2.338027849655988,85.8,311,54,76,2.713635556373664,8.140475336514445,88.3,211,54,43,7.05731803866786,7.072872448487317,83.0,100,100,43,-6.00679247674338,13.107038380839,95.9,211,46,41,7.034503091960076,0.86669914043577,83.1,200,77,100,9.542987185516525,4.7376998462076605,82.9,100,100,77,-3.7863428965355155,12.601598246015879,95.8,211,58,79,10.032939055197865,4.736430850660872,83.7,111,54,60,-7.450868724876648,12.081923924173921,95.4,100,100,49,-4.1937599281816444,14.50701027245136,96.2,311,79,81,1.7784996986448123,7.072750942074168,87.9,111,46,30,-5.656871647700928,11.014869076837453,95.5];
var allabs = [0,22,624577,7,2,2,434158,7,9,2,518735,7,11,2,523253,7,12,0,0,0];
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