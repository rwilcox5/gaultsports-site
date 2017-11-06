var allpitches = [100,43,87,200,36,83,111,54,74,211,32,77,210,55,60,410,40,76,100,53,13,300,23,100,311,38,43,111,12,82,411,70,55,100,80,100,110,15,82,400,31,100,411,77,64,110,70,30,400,82,90,100,68,85,111,81,50,400,97,74,400,72,100,100,100,72,100,48,100,110,45,50,311,33,44,111,54,38,300,39,68,210,100,23];
var allabs = [0,488846,621035,6,3,488846,457759,6,4,488846,641355,6,11,488846,624577,7,15,488846,523253,7,19,488846,571771,7,23,488846,605131,7,28,0,0,0];
var num_abs = 7;
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