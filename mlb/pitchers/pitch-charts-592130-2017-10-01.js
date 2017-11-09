var allpitches = [100,0,0,-9.25127000565587,8.431009807683616,91.0,411,22,56,-10.119682214899044,2.422708828235511,78.9,110,84,80,-10.240450607186158,9.801340824746958,92.9,300,97,15,0.04599422252849361,2.7188910865248475,83.2,111,44,70,-12.679553950862473,8.13802531559094,92.6,410,32,85,-9.177156690123619,0.4166788642868535,81.3,400,28,85,-7.866939213199991,1.7919775407568017,80.6,100,0,44,-9.421572315055823,8.693699014760112,92.2,400,51,100,-10.903452976417823,2.3710920548117738,81.5,100,0,60,-9.671403345062375,9.307427088730861,91.8,110,95,54,-8.60643283129951,9.96193441609047,93.2,400,100,100,-9.659050551991347,4.813855697699211,81.6,400,100,100,-7.314496281859202,5.836458195250636,82.5,111,69,46,-10.008149565227194,8.251709362010546,93.3,411,72,42,-11.387295625046644,3.6928124168852055,81.7,100,98,32,-9.730110103903755,11.014642116039699,94.0,411,75,42,-10.052899061334418,0.6535697026988503,81.2,411,60,65,-10.089699040551245,2.3364191644049486,80.4];
var allabs = [0,2,642180,7,2,23,407812,7,5,14,595885,7,10,21,609280,7,15,2,519222,7,17,2,640449,7,18,0,0,0];
var num_abs = 6;
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