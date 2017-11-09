var allpitches = [100,35,82,6.584261933183151,9.771063630841402,96.3,111,49,48,7.236938344333831,11.291763403306025,96.6,111,27,47,7.130338618665074,12.288901539051686,96.9,111,50,30,5.5115396500107865,9.089732559996827,96.1,100,100,13,7.858063054970243,8.929967647203243,96.4,110,94,55,6.287836055654438,10.35406338120285,94.2,110,49,76,6.192805452253282,13.015315084339674,96.1,111,87,41,6.452457871045938,9.079125391198895,94.7,111,80,52,7.502957621996063,9.963512631708387,95.7,100,100,49,8.305470745022474,8.237427023797045,95.4,111,55,74,6.741346866338361,11.716235961532805,95.4,111,71,12,5.986655160730587,10.436909135289909,95.5,111,83,24,7.541053778026722,10.280110217794181,95.5,110,56,73,7.296470645396724,11.802108261437478,94.9,110,30,48,7.050956059347041,9.741013178958301,95.5,400,39,100,4.841245601294888,9.025113638879684,91.2,111,30,47,6.402117119730728,10.290684870628063,95.6,100,66,5,7.274700471740516,12.388620203471262,95.1,111,90,32,7.40754486456648,11.364568433158064,94.8];
var allabs = [0,16,445055,8,5,3,451584,8,14,20,546991,8,17,2,518792,8,19,0,0,0];
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