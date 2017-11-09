var allpitches = [111,74,45,-4.866224769438206,12.028046318718445,95.9,100,81,16,1.622904099417108,6.311504282563938,93.8,100,99,74,-6.969892765822654,13.416842940853542,97.9,110,54,72,-4.824324482225865,12.87409607902929,99.4,111,26,38,-4.933654469971769,13.993726122223485,98.7,111,50,87,-1.2288366680434837,0.69145921909923,89.4,111,7,33,-5.793113263944092,13.879094830197225,98.7,300,12,18,2.968152861097227,-2.0518748148745787,88.4,111,30,58,-6.042845370329559,11.94082446561806,98.7,110,84,45,-5.521881004341665,12.884105591201706,98.2,111,67,62,-9.195981434562993,12.779089757946458,98.6,100,54,0,-5.807072032962515,10.55795091785256,99.3,100,100,100,0.4836198708408129,-0.01709148026678462,89.8,100,100,77,-5.1186821728307965,11.912503386966357,99.6,100,75,100,-5.375847298723479,13.854218856183845,99.8,100,16,18,-4.3525713161874275,13.303437703056897,98.8,111,64,38,-4.3487387088457545,12.243268113041225,97.9,310,81,48,-0.622080759117116,-2.8997249836820984,87.1,111,56,73,2.3519722850120695,-0.3123494022723306,89.7,111,79,43,-2.825691184357908,13.253479311257447,97.4,111,68,22,-8.228737040956393,10.12783486505106,96.7,111,28,0,-6.594316951750496,10.682153877207284,98.3];
var allabs = [0,2,450314,8,9,14,656941,8,15,2,592178,8,19,3,519203,8,22,0,0,0];
var num_abs = 4;
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
        return allpitches[(firstp+ii)*6];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+2];
}
function sendXM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+3];
}
function sendYM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+4];
}
function sendVel(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+5];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendEvent(i){var abn = returnabs[2*i]; return allabs[abn+1];}