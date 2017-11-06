var allpitches = [210,47,52,211,30,49,211,54,21,111,77,87,100,59,0,100,10,16,110,67,62,100,6,3,100,96,63,100,90,66,100,79,93,100,99,82,110,75,25,111,92,33,111,60,28,200,46,100,211,44,45,100,26,0,111,70,52,100,9,24,110,30,57,111,38,35,100,21,0,111,51,46,111,69,0,200,0,45,100,81,100,211,54,73,200,97,94,100,98,0,100,44,93,111,61,60,111,35,19,111,50,34,100,53,7,100,0,45,111,84,32,111,74,1,111,74,72,200,100,100,111,52,13,100,0,0,100,40,0,111,100,61];
var allabs = [0,451584,475582,7,4,451584,502517,8,9,451584,543685,8,16,451584,452252,8,17,451584,572191,8,19,451584,446653,8,24,451584,607208,8,27,451584,607208,9,33,451584,150029,9,38,451584,547180,9,44,0,0,0];
var num_abs = 10;
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