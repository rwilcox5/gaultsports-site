var allpitches = [110,58,34,210,85,71,111,57,0,100,100,83,200,100,100,211,58,59,100,59,90,410,45,70,200,87,100,411,45,70,100,100,88,111,23,36,111,96,46,111,19,26,411,72,85,211,37,24,200,0,25,111,69,46,111,48,40,211,63,92,100,44,84,111,56,8,210,40,51,100,57,14,111,48,38,110,21,70,100,0,29,110,71,49,110,69,77,400,88,100,111,63,19];
var allabs = [0,201710050,2,1,1,6,201710050,2,3,1,16,201710050,2,6,1,20,201710090,3,1,2,26,201710090,20,2,2,31,0,0,0];
var num_abs = 5;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*5;returnabs[2*iii+1]=i*5+5;for (iiii=allabs[i*5+4];iiii<30;iiii++){        nabsc[iiii]+=1;}
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
function sendEvent(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendDate(i){var abn = returnabs[2*i]; return allabs[abn+1];}