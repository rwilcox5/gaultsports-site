var allpitches = [110,61,46,-4.3966664437101475,11.851812638219688,95.4,300,88,100,-4.552792526871912,1.247724959982312,85.9,111,0,48,-6.962638148282628,7.012660505954111,94.7,300,85,100,2.696108360276892,3.040055933554296,87.9,111,43,34,-9.686574821664347,7.01994427603902,95.7,111,58,66,-9.503790163700268,8.864935923460704,95.3,310,84,45,-0.8204058380111724,4.270504175635272,86.1,111,67,68,-11.583606728523002,7.437700544788056,94.5,100,43,81,-9.192255952986493,9.892550376111732,95.5,111,20,21,-8.832087593415805,6.631660602187212,95.9,311,89,32,-1.944533429724024,3.325275682355172,86.8,311,21,33,3.1609289688847797,-0.04972230766500409,87.3,100,12,32,-8.917283092930813,7.124274708473651,95.3,100,56,14,-7.932913684024763,10.412106319473144,95.9,100,0,27,-9.243031860427859,6.796678114557408,94.4,100,0,7,-7.360377180313944,9.874786436136997,94.2,300,100,93,-1.61594060697648,4.630850099754779,86.3,111,38,24,-8.447523011507556,12.00529353283536,95.2,100,48,2,-8.359050976075956,8.056643266923384,94.2,111,32,12,-6.008657713197672,10.66428644898534,94.2];
var allabs = [0,20,506703,6,6,2,594694,6,8,2,452252,6,12,14,150029,6,16,2,435062,6,20,0,0,0];
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