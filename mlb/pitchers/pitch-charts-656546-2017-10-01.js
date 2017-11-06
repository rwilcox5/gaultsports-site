var allpitches = [100,87,84,111,39,56,111,58,31,100,37,82,110,70,58,111,28,15,111,96,56,211,60,68,111,37,33,200,100,100,100,49,0,111,79,51,200,100,100,111,44,25,100,60,0,111,24,41,100,22,0,110,77,34,110,76,60,111,51,60,100,77,85,111,49,82,110,41,53,200,67,100,100,0,15,111,57,51,200,100,100,100,24,9,100,58,98,111,57,20,111,42,13,111,20,33,200,100,88,300,100,100,100,95,49,110,64,27,110,62,35,100,100,29,111,34,46,100,0,18,100,17,12,110,10,35,110,16,22,111,72,72,100,0,31,100,0,12,110,57,40,111,10,72,111,79,42,200,100,100,100,83,100,100,88,22,100,30,1];
var allabs = [0,656546,518735,4,3,656546,624577,4,13,656546,444843,4,16,656546,621035,4,20,656546,608369,4,22,656546,400284,4,26,656546,641355,5,32,656546,571771,5,38,656546,523253,5,39,656546,518735,5,46,656546,592626,5,49,656546,572204,5,53,0,0,0];
var num_abs = 12;
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