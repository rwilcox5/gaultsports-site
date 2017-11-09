var allpitches = [110,84,49,-2.528520926654071,12.542556380490481,98.4,111,90,60,5.400692771272376,1.9548018924359085,89.6,111,60,36,-3.3017480843041818,13.097891280395256,98.5,100,51,1,-6.022136727791688,11.103618555609373,97.6,111,62,28,-4.445736578566475,10.830097217877128,98.1,311,95,96,3.0101114739087,2.6968408304223637,89.1,111,78,56,-1.1161712721559145,11.802248868428592,98.7,111,41,7,-3.050822543205017,13.292896407922552,98.9,111,30,56,-3.883393122099821,12.506404349073824,97.8,100,0,49,-2.997996838257433,11.57290024605824,96.2,111,42,27,-2.8290893910392825,11.590318084522282,97.0,100,80,12,-2.052134418466173,10.982192646192805,98.1,111,26,51,-1.3161687296354274,11.853773708065397,97.9,111,55,74,-4.133095706501702,12.48809900066396,98.3,111,68,84,3.837780314790195,3.7539545526318845,90.2,111,83,16,-1.6755786686544645,13.920459216387663,96.8,111,82,100,3.46951444459787,6.00370196646686,93.1,111,75,70,-0.8542741924128328,11.981877553852872,98.9];
var allabs = [0,2,592178,6,3,2,519203,6,5,3,575929,6,8,2,546991,7,9,3,608365,7,15,2,518792,7,18,0,0,0];
var num_abs = 6;
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