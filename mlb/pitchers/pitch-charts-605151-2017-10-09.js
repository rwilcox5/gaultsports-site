var allpitches = [110,28,77,100,71,12,111,33,72,100,72,84,100,100,38,100,100,81,110,72,46,111,56,67,200,15,31,200,0,42,100,0,88,110,61,78,100,46,92,110,79,73,100,11,30,100,100,62,100,17,98,111,44,72,100,14,0,210,77,52,100,100,1,100,37,18,111,56,5,111,56,11,100,5,6,211,10,68,111,33,4,110,67,62,100,0,7,100,100,50,111,68,1,211,67,56,211,52,58,200,71,100,110,86,52,110,54,86,111,76,34,100,73,8,111,92,41,111,32,46,210,31,42,111,66,57,110,100,69,111,35,44,200,49,100,100,10,100,100,100,43,111,14,44];
var allabs = [0,605151,608369,7,3,605151,457759,7,8,605151,641355,7,13,605151,624577,7,19,605151,605131,7,26,605151,571771,8,32,605151,400284,8,33,605151,523253,8,39,605151,621035,9,40,605151,608369,9,42,605151,457759,9,48,0,0,0];
var num_abs = 11;
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