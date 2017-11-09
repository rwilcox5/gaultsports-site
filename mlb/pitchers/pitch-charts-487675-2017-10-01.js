var allpitches = [300,0,74,-1.485274630681913,2.295780427445506,80.7,310,73,17,-3.6963851858122165,2.8156118564182275,78.9,111,64,61,5.222395302119493,7.1158429361134505,90.1,300,0,64,-3.8774560455295424,1.1012174612623515,79.1,311,15,59,-2.9289928026007477,4.475764717950003,79.2,111,78,34,6.119893701013592,5.902185561146695,90.3,111,99,23,5.518678870402181,7.852215632768111,90.7,310,70,21,-4.879662226024047,2.263215642882258,77.9,100,12,74,5.987365207278228,6.843587969904374,91.0,100,72,13,3.2735766073227897,5.651775469813312,89.8,111,52,29,7.284346483790108,6.014153313939942,89.6,111,53,38,7.016953521151738,9.762812656854802,89.2,100,20,17,7.143098153636118,5.188200341610839,89.4,311,75,58,-2.8739771608156457,1.2753451173839938,77.4,111,58,46,6.177558978848529,9.211516025712047,88.6,311,49,52,-1.8670480292689995,2.724008298409845,77.0,311,12,78,-2.2107042537005355,0.6974279349617618,79.0,300,0,72,-2.0104827304114026,1.6799685830927,78.9,111,76,20,7.283638854609564,10.417077739333704,88.3,311,0,89,-0.9265753329316503,1.3717157267312885,78.7,100,100,10,6.6281001182011785,5.784526435560904,88.7,411,85,34,7.701930304832608,5.498479186482196,83.5,411,58,42,3.7412372889039003,4.697316502872142,82.7];
var allabs = [0,3,643565,3,8,20,453568,3,15,3,606132,3,20,2,571448,3,23,0,0,0];
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