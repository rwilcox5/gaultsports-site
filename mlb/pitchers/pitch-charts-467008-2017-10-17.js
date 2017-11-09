var allpitches = [110,77,52,-8.84129066721023,9.454649789945123,95.7,100,0,55,-9.094027633694573,8.096852370104648,95.3,300,62,100,-10.746704986729652,5.687478505125195,88.9,111,72,62,-7.202671120363236,8.830909573005759,94.9,300,10,55,1.8859360933148785,-0.08285529064793706,83.0,310,74,63,3.8876871712261494,0.9387745825429168,83.2,110,74,38,-9.569580718538285,9.541076226701344,95.6,100,100,93,-6.964178264969584,9.559759057206161,94.9,100,100,100,-1.8119380767188815,4.164908607622104,89.4,111,51,38,-8.876748204370404,9.88697702793625,96.3,100,100,82,-6.30548761453886,7.795768526850805,94.9,100,4,41,-6.7903564466565935,8.085226328954226,94.2,111,58,58,-8.95314880759301,8.528758860641641,95.1,111,80,57,-7.3002845756239765,8.714139674567416,94.7];
var allabs = [0,18,641355,7,4,14,457759,7,11,2,624577,7,13,2,444843,7,14,0,0,0];
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