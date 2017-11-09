var allpitches = [111,54,24,4.253731207026921,13.105751749539934,92.4,111,36,47,4.395898259595766,13.927851692615551,92.5,111,99,53,6.189473233520488,11.21084789903214,93.6,100,0,5,5.234442808360661,12.958961322334572,94.2,111,58,44,5.888590316557338,12.086262389560794,93.8,100,100,1,4.954904336005003,11.556586094772047,93.7,111,16,0,4.38173962595207,9.129970053545549,92.1,111,15,0,4.4952693224437015,9.635491896084385,93.2,111,40,0,6.645068888778921,10.726036372772251,94.6,111,52,0,3.115705463269294,12.587836994041918,94.2,111,78,27,4.213453885817931,11.198416806221044,94.6,111,55,3,3.4233225605084137,7.405963281191564,95.3,111,38,6,4.377653200328323,7.575022613803329,94.8];
var allabs = [0,3,592178,9,5,16,519203,9,6,3,575929,9,9,2,546991,9,13,0,0,0];
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