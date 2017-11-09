var allpitches = [111,51,16,-2.0129643516957154,10.173092903584251,95.5,111,68,12,-1.0265930413512012,10.875208456447586,94.6,200,100,100,1.2906469210378138,-5.4102468575568405,82.4,111,66,42,0.13728556974568823,9.079803715593354,95.4,211,70,60,4.3450965398476775,-2.2118426960873183,82.5,200,84,100,6.723041753133049,-2.7310471506211487,82.0,100,0,0,-2.8189621940498197,7.156033417977082,94.7,100,41,0,0.6036856409520283,8.870622415485144,93.6,200,53,100,2.8934785196604116,-4.282176639522676,80.8,111,87,35,-1.7713082576073518,10.154456517080886,94.7,211,53,77,2.9522588718863183,-4.539713938233704,81.7,111,70,20,-0.9060568345744524,9.02951084705638,94.9,100,80,19,-0.2181386068446602,8.871691576434547,91.4,100,51,8,0.18810885505608071,7.651744245846277,90.0,100,36,3,0.040007395877671964,9.629551464512852,92.8,100,98,60,0.6690280142282463,8.832624698457016,92.3,210,18,50,6.265213430436203,-6.474572552861835,80.2,211,47,92,5.033441237019411,-6.99640868203565,81.1,211,39,85,6.262529766729107,-2.0556836745436438,82.3];
var allabs = [0,2,400284,6,4,14,605131,6,9,2,592626,6,12,14,506433,6,16,3,621035,6,19,0,0,0];
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