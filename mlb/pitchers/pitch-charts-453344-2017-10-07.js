var allpitches = [111,37,65,3.067931868714882,3.0501693571147945,90.4,111,65,18,-3.66990863505647,13.705925985363919,98.3,111,62,45,-2.850048890053722,11.738401192006295,97.4,110,20,55,3.2754557956293597,3.50726850889952,90.8,111,73,100,0.7223818083118796,0.20431549407675414,90.5,111,51,69,3.012621667780966,0.7806370119855557,90.2,100,36,0,-2.5470874108483064,16.19387265091918,98.8,111,48,48,-0.8119923037525805,14.88030354977029,100.3,111,5,82,3.005819083646916,1.3350772640986515,91.3,100,63,0,-2.559004499325521,13.09770700584438,98.5,111,64,22,-1.9917609912840821,14.145612539610687,99.5,110,84,92,4.724395252639292,2.90093806223166,90.2,111,55,88,3.642904001512167,2.1513365174550456,90.3,111,53,50,-4.536869593168401,11.164101170858276,99.3];
var allabs = [0,23,592273,7,1,2,444482,7,3,3,572041,7,9,2,502671,7,14,0,0,0];
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