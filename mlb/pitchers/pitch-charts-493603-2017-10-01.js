var allpitches = [310,65,44,9.596143697135432,-1.0116360991519155,79.6,311,66,52,10.075045232158581,-1.1406952575774714,81.4,110,57,61,-6.706208422219323,1.4571024944973718,94.6,300,100,99,8.326662853877355,0.8992839550352674,84.4,300,34,75,9.399264158706861,-1.733135159443537,81.9,310,18,15,8.536595198520422,-0.687593336664372,81.4,100,0,45,-3.611892020228146,8.263448604177784,96.3,300,29,91,11.820029243733567,-1.548246027215101,81.3,310,21,25,10.931701620925535,-1.8038568080681248,79.5,100,100,39,-4.058182310380115,7.273050628971189,95.5,300,20,4,8.640825441950472,0.8012116289272319,82.2,311,67,54,7.065034843333412,-2.4987738852726453,81.9,310,22,26,8.154995414178833,-0.8754231878950945,81.4,310,70,68,10.678738377439,-1.6933187449889182,81.5,100,100,59,-5.038567906849536,7.426789487593352,95.8,100,90,26,-7.390254815018895,7.269912063754801,96.0,100,100,71,-3.491735659192125,9.585793050279182,97.4,311,42,77,10.350426613782195,-2.3813653522953393,82.4];
var allabs = [0,2,641796,8,2,14,641355,8,8,2,657077,8,12,2,574847,8,18,0,0,0];
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