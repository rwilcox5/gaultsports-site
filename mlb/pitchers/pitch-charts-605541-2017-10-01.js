var allpitches = [300,100,54,1.776982685343055,0.8661679401547642,81.5,110,80,69,-9.558912017860402,6.140164745286718,92.0,111,16,77,-13.141978325234344,4.689161308994899,87.1,100,98,73,-9.417735481701719,8.801414110356404,93.3,100,79,80,-11.592779015089333,4.627606612164547,91.0,100,12,25,-8.288856909394168,7.419042236160419,92.8,411,19,56,-10.33137400204822,4.051324245993178,80.2,100,77,80,-12.807229574644015,4.117289167980797,90.3,300,100,68,-2.080949900802311,1.0916238853288676,85.2,100,100,74,-8.301088755838235,10.250232105317556,93.2,100,93,95,-11.82623442033397,3.334611896370986,90.4,110,73,54,-12.304688794810355,4.416879515483917,92.2,300,100,82,0.8368260569625681,1.9232893766298358,85.7,311,75,52,1.9321154982760294,-1.900866084737511,82.3,311,84,50,1.1526174659593367,1.5144654962386999,87.6];
var allabs = [0,14,592200,8,6,2,605480,8,7,14,621002,8,11,2,488721,8,15,0,0,0];
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