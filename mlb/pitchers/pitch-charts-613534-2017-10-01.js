var allpitches = [110,35,48,300,93,91,311,100,70,110,29,24,310,79,50,300,88,69,100,18,6,311,41,49,111,63,25,300,100,100,300,100,100,100,2,47,100,43,65,110,8,49,311,77,74,311,64,79,100,100,66,111,44,24,300,86,91,100,37,17,111,46,50,300,92,100,300,100,100,100,76,18,110,39,31,110,55,20,311,84,73];
var allabs = [0,613534,444379,7,4,613534,656669,7,11,613534,621559,7,16,613534,607732,7,22,613534,455755,7,27,0,0,0];
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