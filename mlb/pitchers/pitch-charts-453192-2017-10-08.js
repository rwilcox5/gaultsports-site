var allpitches = [300,82,55,-6.256823741022376,3.3306104127216507,83.3,311,22,51,-2.0468328344018634,5.66824390665715,85.1,300,0,80,-1.3316287735700423,5.599302693241336,84.9,311,72,59,-4.877213122948916,4.785423244976995,83.7,111,41,40,8.600144204699586,13.645459500199284,95.2,110,53,59,6.620094160482756,12.004924988952318,94.2,100,65,99,5.875592061017098,11.537202897705544,94.2,300,90,67,-3.19940369727884,1.357140082866937,85.5,311,26,97,-4.458996948495056,0.958033181621282,85.3,311,44,94,-1.2447164336575063,6.319559389400063,86.1,111,87,69,7.537584964980379,12.844850179449587,96.4,311,46,72,-4.538249276258484,4.109000334140099,85.3];
var allabs = [0,2,516770,6,2,23,595885,7,5,2,453943,7,12,0,0,0];
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