var allpitches = [410,42,61,-7.288632539905536,1.2962600115615601,81.5,411,59,89,-9.806383117393464,2.059145374039068,83.9,400,52,100,-8.954060605002228,3.6879520441925155,83.5,111,72,0,-9.086336280921216,8.14648314381642,94.7,400,26,100,-9.92583025927464,3.305487004693896,83.5,400,83,100,-10.469140033736473,2.186126382965616,84.2,411,73,74,-10.110677780319504,0.5146103085309912,82.8,411,63,30,-10.06857362927784,2.019496070731308,83.9,100,86,71,-9.362133392415204,10.025859111489275,92.6,111,90,59,-7.576959751088964,10.81421018159274,92.9,110,78,32,-7.9176022685665925,10.057352920217376,93.3,411,11,70,-9.234777765751176,2.5790179499884918,82.6,400,23,96,-9.16376801820042,2.100026829501492,83.0,410,23,73,-8.381939216765712,1.6874058764284678,82.3,411,43,57,-10.017886915518265,2.718668018312604,82.6,100,100,72,-7.7893204383270955,10.957568486587716,94.7,100,100,51,-8.726054300323835,9.560139855047435,94.9,411,82,47,-9.807266864029069,3.337414205375352,83.2,111,57,74,-8.51026847252322,10.422179424038545,95.2];
var allabs = [0,2,519048,6,8,20,543877,7,10,3,646240,7,14,2,598265,7,18,2,593428,7,19,0,0,0];
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