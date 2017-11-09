var allpitches = [100,0,94,-3.9003618148904318,3.501855385350917,90.2,111,45,44,5.139802900958057,8.921167620902082,94.8,111,48,61,3.476597335517379,11.2491933576832,95.8,111,0,100,-0.649817202122995,4.851177165057997,90.1,111,36,70,-1.2744581370252412,5.723226741062199,90.3,100,98,75,5.553877498220919,11.02876497026554,95.5,111,34,47,4.9993410092352555,9.880594631810538,95.4,111,0,62,-0.9675936504045075,2.737350240697417,90.3,111,0,86,-1.4190779018271225,2.040105575564744,89.6,100,79,16,5.012810518183953,11.523472585217098,96.5,111,20,68,6.0384728211570815,9.579685340991604,95.6,100,0,100,5.614568038835543,11.19428239836638,96.9,111,39,94,0.43375401452367857,3.2761025999907467,92.2,100,0,74,-0.27624205578322164,4.5584866330078295,91.5,100,40,100,-1.3829504966547392,3.7383640289815654,90.9,100,100,87,5.823666046527148,11.539181475753994,95.9,100,94,62,-1.8025435407365509,5.370483467689873,90.8,111,66,42,4.344583343118505,12.331907382301978,96.4,110,57,81,5.8835234153578995,9.658780267248405,96.4,110,22,81,5.346358818921969,10.517444990157653,96.1,111,40,55,4.10728849241843,11.566534381872541,96.0,111,46,35,4.353983154591525,10.858165093026727,95.6,100,0,51,3.2297570631679537,11.412217432408408,97.0,111,19,21,4.808656397079041,10.854662764257448,96.6,111,0,48,4.13756194207882,12.05981608459683,95.3];
var allabs = [0,3,571506,7,4,3,605119,8,9,14,500743,8,15,3,449107,8,20,3,543829,8,25,0,0,0];
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