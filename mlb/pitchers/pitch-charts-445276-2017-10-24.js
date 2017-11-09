var allpitches = [110,36,67,5.6221565998910705,14.431771417755396,93.0,111,76,80,3.694894625553184,12.262858002689606,94.1,100,100,100,4.381214063084196,13.673058093517973,95.7,100,95,0,4.534929240370433,10.210663962553756,93.0,110,78,25,5.7310471989975955,7.791145339515741,92.7,100,100,12,7.081267134302696,8.419612454275187,92.0,100,100,20,6.016889022951359,12.335749730689477,90.9,111,51,32,4.511240920616805,12.14222842436081,91.2,111,74,26,5.876582922264543,11.840491842640798,90.5,111,100,40,5.8070863842766425,10.488060546751733,90.9,100,100,97,4.61047787324043,9.96627050541035,91.6,111,68,79,4.187035588920616,11.482355676854604,92.4,111,79,95,5.766197818720004,8.750133350474949,92.1,111,78,44,4.922130785164422,10.792352730349592,93.2];
var allabs = [0,3,543807,9,5,2,608324,9,13,2,514888,9,14,0,0,0];
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