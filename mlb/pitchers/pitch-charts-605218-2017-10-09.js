var allpitches = [200,79,14,6.786058515850685,-6.033535525990022,81.8,211,100,98,5.213493146231292,-4.30228511918988,82.2,100,74,5,-0.15824274227961102,9.112531176348497,95.6,111,72,24,-0.1324742798240888,9.678581677717016,95.3,111,74,12,-0.15585776585336686,8.004056750436263,96.2,111,72,57,-4.2776388254407545,9.498587888785977,97.1,100,100,62,-2.186390076328563,7.366590214767506,96.0,111,56,17,-1.0858640666319743,8.973198350473943,95.1,100,51,0,-0.12055161419618472,6.070078171457093,94.7,111,100,49,-2.854560191055643,6.109868191262601,95.3,200,77,100,-0.2070626744198509,-3.865923337380506,83.9,100,14,0,0.5547032123971422,6.8280558497687664,93.9,111,84,64,-0.4472335317155973,9.450688900903089,94.6,111,52,63,-0.8823637551513646,10.081236539638045,94.6];
var allabs = [0,2,607208,8,5,3,547180,8,10,2,543685,8,14,0,0,0];
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