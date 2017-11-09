var allpitches = [110,27,50,0.029043134792352675,9.479010035712097,92.2,111,80,39,0.4458624232287356,11.707303788424978,90.5,311,28,41,2.1349637529695125,5.239942282099751,89.3,110,58,48,-0.06638339230180601,9.91805189517087,91.6,200,94,88,1.4221257394710969,-3.2481438403842784,81.1,200,92,88,1.0200258163073768,-4.724989337630502,81.2,111,79,34,-0.22343480592564363,10.825028258371248,92.9,300,22,99,-0.35256712491278686,6.667425371030795,85.4,300,93,72,2.7701323380082723,5.43473355874912,91.1,311,58,44,2.981839079252559,6.746151465641395,89.1,100,93,50,-1.2161189883398926,10.040075687971175,92.6,300,71,18,2.0180390762402047,3.248320014118846,88.1,111,82,25,-0.3298163614025339,9.753663583736948,92.1,210,49,49,2.73792958429847,-5.452501424628762,80.0,100,0,0,-0.9155190282615835,10.057899914597154,91.2,110,60,43,0.3198692502443041,8.856386932726593,92.5,311,90,60,3.381201458095398,5.080214121994074,90.9,100,100,39,-1.19252015479225,9.101759086287373,92.9,311,45,44,3.0862651462771233,4.612307334094867,90.3,200,0,0,1.783187791020974,-4.239736831256877,79.1,311,58,30,3.6708126692087957,4.128268007336006,88.4,411,4,31,-1.8847799445750635,8.311206650812428,84.6,111,69,24,-0.7706108818643976,8.41390835965426,93.8];
var allabs = [0,2,453568,1,2,2,606132,1,3,14,571448,1,9,2,467827,1,10,2,435622,2,13,20,518960,2,17,2,642162,2,19,2,506560,2,23,0,0,0];
var num_abs = 8;
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