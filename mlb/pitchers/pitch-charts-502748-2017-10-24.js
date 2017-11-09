var allpitches = [100,0,32,-10.18852290881394,9.69939824249357,92.5,110,81,55,-8.132527361550359,6.6645198729581345,93.3,300,100,100,7.9440967198228964,8.219833706670988,84.4,300,90,100,7.383090925705837,10.631944276385083,85.8,100,95,84,-7.991985763330473,10.260645810408267,94.3,110,78,56,-7.489193552356542,14.087299952962187,94.0,410,69,75,-8.788477127990603,6.386652639933269,81.4,300,100,90,4.873448204220202,11.684989972576993,84.7,100,100,85,-8.408572424625936,10.342239553029483,94.0,300,100,100,7.249802061716034,8.7992293642198,84.8,411,53,59,-9.668091505800739,5.172493708955294,80.8];
var allabs = [0,14,523253,7,5,2,605131,7,11,0,0,0];
var num_abs = 2;
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