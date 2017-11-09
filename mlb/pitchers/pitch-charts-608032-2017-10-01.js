var allpitches = [100,17,2,-1.008335789606774,10.31806392769769,97.3,100,95,70,-1.5651082838857069,8.782110606066361,98.0,110,31,21,-1.4429355220106963,10.508098605311309,97.4,111,62,27,-2.327561084888568,8.61779543770023,97.8,111,43,33,-2.1371381635217297,11.159916002984218,97.9,300,97,26,2.9180431694722304,3.8198166495947614,91.4,100,12,0,-0.4377348441470153,7.074182630431294,97.1,111,66,51,-2.7158592736864624,9.067134038012858,96.5,411,39,48,-5.334406081102067,2.9534464541918455,90.2,100,0,4,-3.9483231686668727,7.90294994117209,99.5,311,71,40,2.5031402929255666,2.0629125958379744,90.8,300,59,80,3.8497103938961743,2.8537669031530033,89.3,100,6,33,-3.8538200912585756,8.206355396913484,98.5,110,53,16,-3.3253890335279097,7.583131319244079,99.4,300,100,40,2.485743536781379,4.755718260774952,89.3,111,48,33,-2.612905529437384,11.39241859804393,97.7,111,55,14,-1.5552893939730077,7.72718108630718,99.4,100,10,20,-1.5991701634918842,10.151014140394755,99.1,111,41,10,0.4748139932710157,8.83174677441465,97.3,111,46,52,-1.4817150764473208,7.652845518715811,98.7,100,39,0,-2.452042245909191,7.76609072080801,97.7,100,96,80,-0.6984903974525192,9.582660289445368,98.1,111,35,39,1.1662899701206624,8.957191362290166,96.8];
var allabs = [0,14,605131,9,7,3,592626,9,11,3,572204,9,17,2,518586,9,23,0,0,0];
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