var allpitches = [110,62,31,-2.1088605400793323,9.411989639840154,96.1,111,74,53,-2.2664149618693568,10.219814854823248,97.2,100,97,51,-4.63534183737627,4.368141120144669,96.1,311,38,100,0.48223182428423095,-0.16371269872748878,85.9,310,44,43,-1.4703198761731173,-3.21025920223628,85.6,300,100,100,-0.11981896815708151,-2.404251333045643,85.2,100,64,0,-1.987498038561851,4.311291615194535,96.8,100,100,74,-1.0514537291844546,7.749410748817562,96.3,100,70,0,-3.9896482941916074,5.21646054357146,96.6,110,69,35,-3.576215373067174,7.7276589752159275,95.0,311,50,79,0.04221443459184988,-1.6711169002501451,85.4,300,100,100,-0.8672459003962278,-1.067796066753373,86.6,100,100,96,-3.5463288963495048,8.185389549877074,97.9,111,49,61,-2.0619560831008776,8.307682534885345,97.0,111,50,65,-2.47636748398333,7.488222741927217,96.2];
var allabs = [0,3,451705,9,4,14,572228,9,9,3,664056,9,14,2,594824,9,15,0,0,0];
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