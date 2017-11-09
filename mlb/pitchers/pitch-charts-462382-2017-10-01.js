var allpitches = [100,3,76,-7.571127232453175,9.35394493742455,92.3,110,82,75,-8.314198275896608,10.501471081290989,92.7,111,0,68,-8.372794226776707,10.208241466913858,93.8,100,0,100,-8.6612203736717,9.002428154912218,93.5,100,0,60,-8.841405578431191,8.511079796081614,94.3,111,61,92,-9.963567396499538,9.739331454987596,94.2,110,81,28,-8.224765242075224,9.606222343454688,92.8,100,12,25,-7.277115412009423,7.8645015642366385,93.2,211,100,68,4.619894769415577,-5.1311419490798675,79.4,111,67,21,-4.571628028754185,10.154923364097824,93.8,100,0,39,-7.9639949882333925,8.2306684390884,93.3,400,2,59,-7.524846699782201,5.846662790466777,88.3,110,11,71,-9.106431867262037,8.124333363075088,94.2,110,68,39,-9.140906528590289,8.438577259666245,93.3,200,0,10,4.875299185974696,-6.670311626501367,79.5,111,68,61,-9.842291909495891,7.4536232655864465,94.9,100,0,37,-6.403780093924305,4.724122206649343,89.1,200,51,11,4.429699752445185,-6.277999628575339,77.6,100,100,91,-8.720126823243747,9.12241400816717,93.6,100,100,90,-9.79169950039996,9.01194978230298,92.7,110,57,61,-9.389566634539282,8.164541342650459,93.6,111,73,68,-7.758755204270315,9.263283652046958,93.9];
var allabs = [0,2,519317,7,6,23,542303,7,10,14,592885,7,17,2,592663,7,22,0,0,0];
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