var allpitches = [100,23,88,-8.51355687312768,11.120671800853104,96.1,110,29,50,-5.940574644729372,11.195367010542396,96.6,110,75,53,-7.6958654857424165,14.1249261278898,96.6,100,0,18,-6.840191308913651,7.1140085753747515,96.6,300,100,100,2.797124669427744,5.978758731049104,85.8,111,32,39,-8.013236066326776,11.964750166935204,96.6,100,78,65,-7.966955945882652,12.039907240455241,97.1,400,43,82,-7.820690992133724,1.225517605856484,89.2,100,82,71,-7.401224633986093,13.20327216335136,97.3,110,67,31,-8.3922808622691,12.16600290752244,96.0,111,49,42,-6.097032513361175,14.802049932380882,96.2,111,81,45,-8.722070169458243,13.529806633665839,97.2,111,70,34,-8.528240291355983,14.6986930521078,96.7,111,68,23,-8.033256853270572,11.015239378572769,96.4];
var allabs = [0,3,573627,7,6,2,593871,7,11,3,501303,7,14,0,0,0];
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