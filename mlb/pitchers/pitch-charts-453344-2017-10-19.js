var allpitches = [100,83,62,-4.3573027742114885,10.718645491404876,96.0,110,57,69,-5.530286852129892,13.04151527562636,96.6,100,90,34,0.5024801645852124,5.11491488005668,92.2,111,59,84,-3.466135993945524,13.9410913655478,97.2,111,0,35,-4.6732006221183475,12.36476637216672,99.3,310,76,30,-0.1721365815690672,-3.46825161477216,87.3,100,47,7,-6.461812063801692,10.983177803372952,95.9,100,65,21,-5.014488851482092,11.36953983184164,96.2,111,61,32,-5.666115167911188,12.35387145536004,96.9,111,74,51,-5.511979010159472,11.126386757156713,97.4,100,85,12,-5.518326241950444,10.403634341468004,98.2,111,50,44,-5.138234401023516,10.909454450820936,97.5,111,62,55,-4.5077716497261004,12.702252285868802,97.9,311,78,67,1.1866198037938356,3.7342821522611045,88.7,311,60,100,-0.6622256200938672,1.781118657031524,89.0,311,0,68,0.4361864613574224,-0.23674862937102237,87.1,311,36,78,1.177854694127064,-1.679683896880116,86.9,111,58,16,-5.491797987466608,11.697639108925571,97.3,110,58,62,-5.29163193926916,11.682862102322929,96.9,111,73,56,-6.9639080903126755,12.567581947596,97.9,311,55,62,0.6308270672816448,-2.055959012462376,86.5];
var allabs = [0,3,450314,8,6,20,664023,8,13,3,546991,8,17,3,656941,8,21,0,0,0];
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