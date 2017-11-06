var allpitches = [110,75,47,400,100,92,411,100,88,111,35,50,111,41,25,210,50,60,210,35,56,100,87,78,111,70,38,111,82,26,411,86,72,400,69,100,111,72,38,200,79,11,100,100,32,110,18,45,110,13,35,100,2,8,111,35,21,400,10,100,111,33,54,211,33,64,111,0,51,100,91,78,300,3,100,111,83,61,111,37,34,111,24,62];
var allabs = [0,621389,606131,6,6,621389,608671,6,9,621389,642707,6,13,621389,641319,7,20,621389,500208,7,27,621389,592669,7,28,0,0,0];
var num_abs = 6;
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