var allpitches = [110,23,33,111,52,13,100,99,0,111,82,63,100,62,8,100,49,98,111,43,40,100,0,75,111,28,14,100,70,79,100,63,85,111,12,40,100,0,12,111,96,33,111,41,41,100,100,84,100,43,100,111,32,68,100,1,88,111,29,44,100,95,44,100,48,100,111,25,33,111,1,34,100,0,39,110,35,81,100,0,1,111,21,51,100,94,76,111,48,43,111,100,70,111,58,36,111,70,55,200,99,100,110,42,50,200,39,95,111,0,13,111,42,14,210,16,46,100,21,0,100,16,17,110,82,30,100,13,0,111,12,16,500,50,100,500,50,100,500,50,100,500,50,100,210,54,65,100,15,26,210,7,47,111,65,46];
var allabs = [0,592836,621035,1,7,592836,608369,1,13,592836,457759,1,18,592836,641355,1,24,592836,624577,1,33,592836,434158,1,38,592836,518735,1,44,592836,523253,1,48,592836,477132,1,52,0,0,0];
var num_abs = 9;
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
        return allpitches[(firstp+ii)*3];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+2];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}