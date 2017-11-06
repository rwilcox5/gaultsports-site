var allpitches = [110,57,64,100,51,100,111,43,14,100,0,36,311,78,59,300,100,100,111,58,52,200,70,90,200,97,93,110,35,79,211,33,70,300,100,100,100,0,31,111,39,65,311,62,49,111,50,64,100,0,44,100,99,58,111,10,16,100,0,55,100,43,87,311,100,100,311,82,88,311,76,47,111,76,62,100,89,29,111,84,50,110,69,56,311,39,66,100,58,19,111,37,50,111,80,52,100,37,93,111,29,56,111,45,48,400,100,100,111,0,35,100,7,0,311,81,43,311,90,54];
var allabs = [0,434378,643217,5,5,434378,605141,5,7,434378,519048,5,13,434378,434670,5,15,434378,646240,6,21,434378,543877,6,24,434378,598265,6,27,434378,456030,7,29,434378,593428,7,32,434378,643217,7,40,0,0,0];
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