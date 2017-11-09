var allpitches = [100,0,18,111,47,49,300,100,100,311,47,24,311,41,54,311,71,75,110,9,65,111,36,45,100,0,59,311,61,73,210,52,61,300,47,77,211,64,87,411,0,86,100,7,10,400,35,100,311,69,90,111,35,48,111,68,47,200,19,80,100,56,100,100,1,59,110,47,38,110,7,67,111,72,64,111,22,54,111,55,25,211,15,49,311,84,82];
var allabs = [0,201710140,3,2,1,6,201710140,21,5,1,8,201710140,2,7,1,10,201710200,3,2,2,14,201710200,3,5,2,19,201710200,3,7,2,29,0,0,0];
var num_abs = 6;
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