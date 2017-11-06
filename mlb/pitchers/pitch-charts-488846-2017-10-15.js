var allpitches = [110,89,66,300,0,83,310,54,58,100,42,0,400,34,99,111,87,58,311,54,57,500,50,100,500,50,100,500,50,100,500,50,100,200,66,83,210,78,53,311,42,50,100,100,100,100,100,60,100,100,98,100,65,14,411,78,36,210,46,78,300,14,100,211,100,81,300,45,100,200,100,56,411,83,99];
var allabs = [0,488846,641355,8,6,488846,592626,8,7,488846,523253,8,11,488846,605131,8,14,488846,624577,9,18,488846,518586,9,19,488846,571657,9,25,0,0,0];
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