var allpitches = [310,33,48,3.5551094968638983,0.8165543085748809,77.8,100,0,27,-9.919053594151343,9.901952434890037,95.2,411,27,94,-8.973417334978762,-2.418173470039296,77.7,111,35,13,-9.70951097800013,9.56778977874891,95.4,411,12,58,-10.591909659838059,-1.3492302221380728,79.3,400,0,100,-8.153183518016979,-1.82455371428494,78.6,311,66,70,3.0830223165251436,-1.2806868500895945,78.9,411,0,68,-9.342043420464258,-1.5564052586328476,80.1,111,58,51,-9.03752107571786,4.765165015749419,94.2,100,0,54,-8.068543182320337,0.8115478603975836,90.8,311,71,40,2.590091078684679,-1.5589740772623641,78.0,111,14,63,-10.497166239514756,0.08045645271605799,89.2,410,31,40,-7.978030571932255,-1.3636602204123112,77.5,411,17,92,-7.409660659459762,0.4796776938557552,77.0,110,53,60,-10.916578698314478,-3.2498204733393057,89.4,300,100,97,3.4438547248632405,-2.8560322701827197,80.2,311,20,70,3.483264800191353,1.8502191820639355,78.5,300,100,83,2.916388464550798,-1.4060170771211098,78.0,100,100,76,-12.804019761656745,-0.23912864610481563,90.5,100,100,77,-13.877594793115925,-1.7495085496826266,89.9,110,76,75,-14.336843925937776,-0.9789576847475198,88.2,111,41,95,-14.456551245584109,-1.7288474383567036,88.2,100,72,100,-12.479645784317444,-0.024490094054525735,87.3,100,0,61,-8.498959402988884,9.74662604252777,92.9,311,65,89,1.41571926740906,0.3671854898788177,77.8,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,,111,1,58,-8.129933727939099,2.579280874778834,89.7,111,6,63,-14.086666843295049,0.1402027832053956,89.2,411,52,72,-7.0907300125393595,2.043988431410405,73.0,111,10,39,-7.026670144464581,13.226244722361683,93.2];
var allabs = [0,2,453056,6,9,2,453943,6,11,2,458731,6,14,14,592450,7,20,20,596142,7,25,15,544369,7,29,2,516770,7,33,0,0,0];
var num_abs = 7;
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