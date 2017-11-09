var allpitches = [100,0,42,3.2097767061595075,10.338497424735696,90.3,100,6,52,3.620760498123888,10.592950359107327,89.8,100,24,71,4.248993296032165,10.781886059745217,90.2,100,6,37,3.617262843233916,10.646928039478656,90.3,110,69,56,11.703602914994004,7.907351949162408,89.4,411,47,64,11.052304756251816,2.748906698966064,84.6,100,100,55,9.374235161309905,5.179810043992536,91.6,400,100,0,12.1344703419492,4.728210296013792,83.1,411,55,51,10.796345871339529,5.159904053135232,85.1,311,78,19,-3.8113992186459478,1.466245572039552,81.7,111,100,38,8.274282720495696,4.898860126284804,90.6,111,71,14,3.8728906879605,11.594366321281884,91.5,111,54,34,4.1138127662550605,9.650129163023148,91.3,200,100,25,-5.529406771106568,-7.6829107497234475,70.9,210,74,23,-5.835290921208996,-6.59842270321896,71.6,111,41,23,4.811006533942584,9.49196010910182,90.6,411,100,40,11.471372951229336,4.2085363519031755,83.7,300,58,99,-4.551158423285364,1.812901969697424,80.9,411,77,93,10.145440335518497,8.110528310523408,85.3];
var allabs = [0,14,502517,5,4,2,543685,5,13,3,446308,5,19,0,0,0];
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