var allpitches = [110,40,53,100,0,49,200,22,100,110,34,70,100,0,69,111,40,74,111,49,65,400,23,100,100,22,56,400,35,100,111,56,32,111,36,50,110,54,53,100,100,50,200,0,100,111,68,80,200,89,72,200,0,100,111,69,55,110,77,57,100,8,0,111,30,44,200,100,7,211,38,87,400,100,40,411,65,19,100,100,17,111,24,36,400,53,94,411,38,74,200,18,100,411,64,69];
var allabs = [0,543557,641355,6,7,543557,571771,6,12,543557,523253,6,18,543557,605131,6,19,543557,624577,7,22,543557,518586,7,28,543557,453344,7,30,543557,621035,7,32,0,0,0];
var num_abs = 8;
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