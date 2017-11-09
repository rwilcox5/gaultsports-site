var allpitches = [110,40,37,-6.906210267302749,10.227560697741708,95.0,200,72,1,5.7793391110896355,-2.8183034935104,78.4,210,46,35,8.663468165276916,-1.938948243636384,78.1,300,86,100,-0.00518388780638748,6.708831684932772,88.9,211,72,53,6.506376687370237,-1.2937032369055919,79.1,111,67,57,-3.6575840128522437,10.228025639391324,93.6,200,0,0,6.431727658912992,-4.273617736614276,77.9,111,8,16,-4.677408233792496,8.6171926254537,92.6,111,33,25,-5.009460252345636,9.178497157667172,93.8,100,0,50,-8.386710245196781,7.857801562503768,93.3,100,100,65,-6.338716804840596,10.358178416308188,95.1,100,1,62,-5.044461261699061,9.035173806562547,92.8,100,25,19,-5.041862554892148,10.213426848716185,93.8,300,87,100,-0.030320824242874196,5.18608514643576,86.9,100,100,100,-5.50099465247256,10.526745446642114,93.6,100,9,32,-3.92750611420242,8.698143783657253,92.3,110,30,73,-3.5145278963595965,11.176103614208076,93.0,100,79,81,-5.873362461688548,12.7385324148312,94.7];
var allabs = [0,2,150029,5,9,14,446308,5,13,14,572191,5,18,0,0,0];
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