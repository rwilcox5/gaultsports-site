var allpitches = [110,43,65,-1.5270868097559562,11.780316400113371,95.0,100,66,96,0.9123005152885123,12.543417664060016,95.5,111,48,35,-0.06641235548628333,10.858668098161642,95.1,211,79,53,3.6550375522247123,-3.6574141976653176,81.6,111,65,36,-0.004169046941006707,11.497994603409412,94.9,110,47,65,-0.3252746351735074,13.19665896082441,95.4,111,71,64,-0.09388952310558613,13.649591002432029,96.2,100,100,100,0.18573046116823078,13.344202636427461,96.1,100,95,5,-1.677835097477291,9.170391518118192,94.3,100,58,14,0.5725209709644704,10.874325694691102,95.1,110,82,62,-1.8739022085144503,11.592260860827551,95.3];
var allabs = [0,3,607208,8,4,2,547180,8,5,3,543685,8,11,0,0,0];
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