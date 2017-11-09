var allpitches = [100,11,29,2.791319362355976,10.217993362498776,91.6,100,0,39,2.1270997952351247,10.040707645399232,92.4,111,30,61,0.9367845387417333,10.622431704112657,91.7,111,30,60,2.250682020101647,10.347010170460175,92.8,110,70,46,3.4933686267807658,9.488354081933005,92.6,111,63,9,2.0543996399501987,9.747278387258602,91.8,111,60,11,2.37269996740803,9.791289863327764,92.9,111,75,21,3.340453029747522,7.735767963639345,93.0,100,100,55,-0.19647941989993806,10.741869688785501,93.6,100,64,100,-0.5442516754939402,11.091062522973512,94.6,111,55,3,1.5797596451130478,10.473638492022204,93.3,111,77,8,1.5719008706249715,11.154726103752703,93.4];
var allabs = [0,2,608365,9,4,3,600303,9,7,3,664023,9,12,0,0,0];
var num_abs = 3;
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