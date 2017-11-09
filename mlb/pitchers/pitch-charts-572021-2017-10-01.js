var allpitches = [311,55,86,-0.5813865189846529,1.160942124289539,80.8,300,100,8,-1.0261583953506064,0.47967568072170275,79.3,311,32,86,-1.2924435829623446,-1.1725004575734193,80.0,111,68,52,8.826561785703197,5.766928111236007,94.4,111,41,54,6.314156591892273,10.915359390289465,90.3,100,28,90,7.904309191119207,7.684179332379328,91.8,310,23,58,-1.1823100522942929,-2.001078234562281,78.8,100,15,100,7.7046298933161745,6.913979156091263,92.9,300,51,0,-1.0735837658245,-1.4472446687240494,78.4,100,0,97,7.259126193994959,6.316224166927255,92.5];
var allabs = [0,20,519184,7,4,23,458913,7,5,14,545337,7,10,0,0,0];
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