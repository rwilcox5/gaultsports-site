var allpitches = [111,88,48,-8.738781085631667,-0.5680997835572145,92.7,310,26,37,9.182254097310345,-1.227739529941107,84.2,111,3,72,-8.09245303722658,0.8372211214707306,93.3,100,0,39,-6.455232508761848,-0.042272275128213244,92.3,110,6,68,-8.012741251405872,0.08406745272725644,91.7,411,71,51,-4.710293319537222,-2.078802225443801,89.8,110,30,42,-10.18272288685429,0.7757869290564106,92.9,111,47,65,-6.716529094364294,-0.6710974845898736,93.2,100,5,0,-5.393413306679313,0.1902401289114376,92.4,310,49,73,3.9382765752985494,-2.593640947472302,85.0,111,65,39,-5.367918630585567,2.251268700923601,92.9,300,100,90,8.345553359572945,-1.297326408714773,85.6,310,26,58,9.372995324033376,-1.0578625013413427,86.7];
var allabs = [0,20,543807,9,3,2,502210,9,6,20,514888,9,8,3,621043,9,13,0,0,0];
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