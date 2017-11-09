var allpitches = [111,76,67,-5.137594758938604,9.054739803493764,97.3,100,1,100,-5.441957586128687,9.1901389955766,95.1,110,26,82,-6.836082481487711,9.141412050156935,94.9,211,64,91,2.55868591774014,-7.615018007488464,82.3,200,65,90,4.590856002435216,-8.506046860370292,80.4,110,44,72,-7.620553619001757,8.25677654855646,95.6,211,59,31,3.1038271543384677,-4.235822949765444,83.2,100,95,100,-7.5982050544357325,8.683231373179044,96.9,110,62,82,-7.0171844984797564,8.923167840938556,96.5,111,52,59,-6.599960877959484,7.923421231545035,96.7,110,34,83,-5.673839602054464,9.246477486755124,96.1,110,17,77,-5.022911464821805,8.4738190370127,96.3,111,96,30,-6.422839267892904,9.483925781484313,97.3,100,0,63,-7.093828781377356,9.78770588066544,96.8,211,30,98,4.79289132073548,-7.855334495882939,83.5,100,100,55,-7.345581867733595,8.35901349401166,97.1,111,58,42,-5.185637579887404,11.141559846532271,96.2,111,74,55,-5.7801712195704,8.658380992971,96.6,111,91,27,-7.082001579993287,8.684154978864685,96.6,211,55,53,3.6305067347596918,-5.8446370854488645,83.5,111,79,56,-5.343482278623265,6.7541117867796725,96.8,100,65,12,-5.477730578312617,6.787937522871072,96.5,110,51,58,-6.186627468250057,7.157579809000932,96.0,110,94,51,-6.250826279449873,7.49476872862374,96.4,111,53,13,-5.335765362071244,7.29789345355086,96.5];
var allabs = [0,2,518934,7,1,2,471865,8,4,23,571448,8,7,23,596115,8,10,2,467827,8,15,21,642162,8,21,2,518960,8,25,0,0,0];
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