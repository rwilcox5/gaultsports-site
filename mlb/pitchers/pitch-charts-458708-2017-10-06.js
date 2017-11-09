var allpitches = [211,11,36,8.493783361155804,-6.584294448444204,73.4,111,76,34,2.36963440719204,6.7810026132711485,87.2,111,64,22,-7.966766791590564,10.24448837665351,89.0,100,100,75,2.598891476754192,5.142424861718256,85.7,200,93,100,6.038451719058852,-6.54131775965112,74.6,110,100,43,2.127168953652192,4.775973518246892,86.3,111,28,59,-2.80838416038864,9.526372326971952,89.0,110,73,16,1.8954036863235237,6.9054933717660605,87.4,200,46,100,4.229890894140948,-7.515170575293708,76.1,110,57,82,1.808419810332132,5.0591906121256915,85.5,110,26,88,2.697666432354048,7.2625710456196675,87.9,111,68,70,2.589043956049176,9.06663900597593,85.2,110,19,68,1.856654658267576,8.350308950982443,87.5,110,41,84,2.678978756649864,8.457658614409645,86.8,111,100,47,-4.849555212404244,8.554573749631128,88.1,110,66,74,0.4569656613334272,9.458394845533967,86.1,211,72,76,5.616372566609725,-5.729679586409268,74.4,210,8,51,5.146118866354428,-4.56827639601126,76.1];
var allabs = [0,2,544369,12,3,2,516770,12,7,3,595885,12,11,3,543305,13,14,2,452104,13,15,3,591720,13,18,0,0,0];
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