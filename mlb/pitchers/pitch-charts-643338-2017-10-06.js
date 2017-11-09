var allpitches = [110,70,58,-2.523962432519916,12.66320498120388,96.1,300,100,45,1.5526003809341042,0.4172865386091132,86.7,100,75,88,-4.205345184802008,11.373525555623736,96.0,111,56,44,-4.021096811147496,12.060451788623158,96.0,111,61,29,-2.532007381141824,11.13935616924132,97.1,111,58,36,-4.71036505516446,11.331119219874925,96.9,111,49,30,-4.635594458096844,13.180296507623641,97.1,310,41,12,0.1709460136694796,0.9540528529075704,86.4,111,39,9,-5.257347876699732,12.41328339917184,96.7,100,100,66,-2.430825995549568,10.902867491481505,97.6,111,37,43,-2.6290752765197403,11.113168228925208,97.3,111,14,7,-3.997790482499148,10.775028703697677,96.9,111,98,96,1.8554651171624879,3.896037774706404,89.0,111,47,68,-3.520358977748616,12.59323994352264,97.3,111,29,53,-4.406879792005632,11.479144391580853,96.4,111,34,33,-2.94624171158322,10.633844221361148,96.7,111,55,44,-3.682434177692172,12.237501976699441,97.5,111,16,32,-3.4685381934208803,10.64095895756616,97.4,111,6,46,-2.8137169696436404,11.92085496516378,97.6,111,24,9,-3.106168843948116,12.810757920133678,97.5,100,97,9,-0.7126455103918043,12.832098294746999,95.7,100,72,62,1.768040906133876,0.209511856181784,88.5,311,61,54,2.3168125057142044,-0.1900784108039988,87.7];
var allabs = [0,2,457706,6,7,21,543228,6,14,16,502082,6,21,23,596019,6,23,0,0,0];
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