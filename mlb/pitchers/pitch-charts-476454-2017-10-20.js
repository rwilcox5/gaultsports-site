var allpitches = [100,0,0,-4.201219994097901,8.250009197012982,97.3,200,93,25,6.390520441065689,-1.1720339669267679,83.1,111,58,44,-5.6491020956543805,7.824200535123034,97.5,210,66,23,6.722030900446319,-0.7213821772440713,84.1,311,55,71,4.440300830999463,-6.953698890072539,86.8,200,0,55,8.090047483342829,-2.329429697594632,83.9,210,53,77,6.877470518645172,-0.3005696032838032,84.7,211,42,54,6.8213151260076685,-3.2311317834010627,84.6,100,5,92,-6.005635424531109,8.519465718631633,97.7,200,25,94,7.816748460562886,-0.7099853613726237,83.0,111,83,77,-5.492880234246453,9.509889798429365,96.6,111,20,51,-4.908109293128579,7.540757649340552,97.6,111,53,29,-5.061196150212013,9.900191770709881,98.8,100,25,24,-4.076297488811228,8.513003891571778,97.6,211,89,72,4.540332879580879,-2.947175081881628,84.2];
var allabs = [0,3,503556,8,5,2,594828,8,8,20,435263,8,12,2,543807,8,15,0,0,0];
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