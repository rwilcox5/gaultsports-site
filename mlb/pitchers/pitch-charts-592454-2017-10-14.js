var allpitches = [111,23,35,-6.528374189612489,8.292177866294153,97.8,111,53,58,-5.44823997662383,8.833460656746064,98.0,110,60,47,-5.171555566795052,9.029586666309182,97.6,100,95,84,-4.6055023469955625,10.647370924200866,98.4,400,100,71,-10.515464318384009,3.587544385873345,90.2,400,85,86,-10.258007746660976,5.25118155028022,91.0,100,42,20,-5.20042236855281,8.50442805143374,96.8,410,47,82,-8.523947601284164,4.60767486776326,90.5,411,65,94,-9.123795547566091,3.9676448989922055,89.3,400,84,95,-9.878937972549453,5.404693472689193,91.5,411,46,51,-8.509173984868465,3.6416164080147846,89.5,100,100,88,-3.7551420433049483,11.652593951875675,98.1,400,100,56,-10.856762618531931,3.040321059136467,89.8,100,97,100,-3.853173993508616,10.960056644182972,97.9,110,73,58,-2.7502279559516847,10.968609149860178,97.7,111,62,94,-6.041847282714799,8.929281054452566,95.9,111,84,25,-4.038478091786105,12.118536860499024,96.2,100,63,15,-3.890560649549548,9.684207291491974,96.8,410,25,31,-9.803630527723326,4.454254572197128,90.2,400,20,10,-10.921020490800489,1.7735424248802825,88.7,111,44,39,-2.586056667032336,11.152343014267764,95.5,100,81,88,-3.645460754958428,10.53701276740706,97.0,111,59,43,-5.179162088771936,9.483445150663387,97.5,111,73,53,-4.0249687000909935,12.015886862101205,97.7,310,60,25,3.189748861169404,1.5770738923054612,87.1,300,50,7,3.5369695289260994,-1.3136527187459677,85.4,411,38,67,-10.359547635269456,2.8904366174217273,90.6,411,26,31,-9.471452228967696,-1.5352494267276735,89.9];
var allabs = [0,2,136860,5,2,14,608324,5,7,2,435263,5,11,2,543807,6,17,2,502210,6,24,3,514888,6,28,0,0,0];
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