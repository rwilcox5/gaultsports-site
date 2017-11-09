var allpitches = [110,28,33,-7.091435218660584,5.367576657175152,95.7,100,100,17,-3.683393569295208,12.822014524524239,97.0,100,85,53,-7.393854514724148,9.292275257311896,96.2,100,26,16,-1.208709517235904,11.153402161754917,97.1,111,37,45,-2.802368635674264,12.545168254530722,97.1,110,68,70,-3.0626338247202236,11.849326122319008,97.2,300,0,93,0.7420461831533353,2.526798117976308,87.8,300,60,90,0.44907525277466764,4.1672463597912,87.7,100,88,73,-3.912574268020764,12.432389969205001,96.3,111,58,54,-2.544298181156652,11.957862282533412,96.7,100,0,41,-10.00899162718446,5.544425061550716,96.7,310,23,57,1.6346023490522759,2.443642519304604,87.8,300,2,4,2.503721693840976,2.209711385219568,86.6,111,4,23,-6.4726675013867645,6.195848102665153,96.3,100,0,37,-5.331067388266056,3.5051919079889275,96.5,111,29,36,-6.291750722500848,6.0396848286489355,97.0,311,60,56,2.228889765753336,-0.430528846962702,86.1,311,37,58,1.675115476260816,2.5650564438663483,86.9,111,37,45,-3.6111238570181285,10.454347521251483,96.7,400,0,0,-9.051301095422904,4.1513168622596766,87.4,100,83,59,-9.52297489571436,7.8479709133919515,97.1,100,6,20,-4.5146371496217235,5.451937352767596,95.3,111,92,50,-6.484345188337309,10.563867669881915,96.2,110,66,38,-5.511698066293416,7.876068492751884,96.1,111,34,42,-6.756439919848356,7.888926608320741,96.5];
var allabs = [0,20,457477,8,5,2,150029,8,10,21,435062,8,14,16,572191,8,20,2,446653,8,25,0,0,0];
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