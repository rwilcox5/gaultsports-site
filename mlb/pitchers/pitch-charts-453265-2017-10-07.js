var allpitches = [111,52,69,15.088299982119963,-1.7374553346908317,93.4,110,42,67,14.340492662220212,5.6475372559227095,94.4,100,20,41,12.652193897477368,11.893395134655993,95.3,100,5,51,12.622492978805244,4.36811788195298,93.6,111,90,65,13.540655858773114,3.5755019346292314,94.3,110,58,55,17.688938167320675,12.887705012412814,93.4,100,100,34,13.301338177705212,9.31110008626349,92.8,111,58,65,15.307972957117581,9.936291987337903,92.6,410,91,30,13.690378664243244,9.21384998903881,86.8,411,82,64,13.076536650203053,5.102315632837341,86.7];
var allabs = [0,2,518614,6,1,2,455104,6,5,20,571875,7,8,20,606466,7,10,0,0,0];
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