var allpitches = [110,27,38,3.963614155048759,7.7758298528963445,95.6,300,74,100,3.543891136321104,3.9388355814940796,89.1,100,0,23,0.8457117832365177,9.744594485435572,96.9,100,86,96,1.7571803363277991,8.367870324186406,96.5,100,0,58,-1.5580696010129098,8.0022098659244,95.7,110,63,60,0.22008176408952249,7.431735864602712,93.8,111,57,42,1.4912270682090147,6.922922262254771,95.1,111,12,18,-5.317107081889534,9.779233376560695,97.2,100,86,74,0.13534391632821685,7.929891508649593,96.5,111,72,56,0.026637964844839802,8.08629894707214,96.4,311,79,66,3.62766853009592,-0.825889346561649,87.4,100,15,61,-4.049293884329272,4.634046459546683,96.1,100,0,57,-4.20802206586455,5.154096955670376,95.3,111,44,55,-2.5605214523732815,3.525607441672806,95.8,110,17,31,-2.132722453168598,7.057305420251941,97.3,300,54,100,3.6272781031137677,-2.0967363378712056,88.3,110,53,73,-1.9215591423510514,5.471549471357295,97.0,300,71,100,-2.3350810061210545,3.7841691724662407,92.5,311,11,44,5.470926416168599,0.834728292261391,87.2,400,23,0,-2.8033502227422913,6.771810389887397,88.9,311,37,44,7.450457876641186,6.654578665704912,88.3,111,26,64,-2.537245260951416,5.669990829610921,97.3,110,22,38,-2.128360276308546,3.420471958607499,97.0,300,0,95,3.196464820791924,-1.03641410728577,87.6,111,65,65,-1.6418278569000277,3.415827085052343,96.5];
var allabs = [0,14,518586,5,5,2,628317,5,11,2,400284,6,14,2,641355,6,22,2,657077,6,25,0,0,0];
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