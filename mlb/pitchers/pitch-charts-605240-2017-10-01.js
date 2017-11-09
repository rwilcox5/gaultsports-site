var allpitches = [210,19,45,-0.8959099293090372,-6.305578010166915,77.8,100,58,18,0.4603857165552825,4.962836474476543,92.3,200,73,3,-3.789047772565019,-5.5091807794414205,79.8,111,58,87,9.267502427269614,5.387936729468915,94.6,200,14,8,-3.3661156462899187,-5.012452784806587,78.0,100,100,23,10.986397984228937,7.915374068159764,94.0,110,57,82,12.337620039484653,3.665949664715514,94.0,111,88,41,9.841479557501525,4.920444967406295,94.5,111,89,56,7.375829917874971,6.5967748584058015,93.5,100,100,27,8.376253347105159,6.228407257110631,87.1,111,87,59,10.284570601008042,6.399725158488106,94.5,100,98,22,10.148186022713835,6.916610307821449,94.8,200,0,22,-2.4889523410904593,-2.9099942582855736,78.9,110,40,35,10.26877363775469,6.6087809016625805,93.5,110,19,50,10.802270048267205,7.7849351331364165,94.4,211,24,41,-4.410967286486863,-4.5543042093805175,81.6,110,40,62,10.517864894382596,4.667485430689847,95.2,200,0,41,-0.5774634514176612,-2.357844329045974,80.7,110,54,85,7.694947896596767,5.3134160787768465,93.9,111,57,55,1.7711630385952992,3.9597150687487996,92.5,211,22,79,-3.023771676200181,-3.921726082520066,80.8,100,100,86,7.477518405272102,4.160653382206927,87.3,111,68,73,8.619769992963358,7.7626372240624,88.2];
var allabs = [0,2,488726,7,4,2,571980,8,8,20,467793,8,11,2,502082,8,16,2,650490,8,23,0,0,0];
var num_abs = 5;
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