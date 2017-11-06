var allpitches = [100,92,29,100,56,86,111,48,25,100,71,100,111,49,27,111,55,32,200,4,69,100,85,16,100,27,97,110,34,61,100,79,85,110,40,28,111,77,44,200,8,53,200,0,63,111,35,27,111,70,29,200,20,88,211,23,87,111,76,60,111,23,43,100,90,25,111,41,48,211,61,93,111,89,74,100,96,74,200,68,100,110,44,22,100,91,94,100,56,15,210,57,81,200,60,84,211,36,79,111,18,15,110,57,18,110,62,26,110,88,61,211,39,61,211,41,30,100,100,58,111,98,58,100,0,29,100,91,5,100,97,7,200,53,100,100,96,83,210,25,68,111,45,67];
var allabs = [0,451584,457759,8,5,451584,624577,8,11,451584,444843,8,17,451584,434158,8,25,451584,518735,8,30,451584,400284,8,34,451584,605131,9,37,451584,621035,9,44,451584,641355,9,48,0,0,0];
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