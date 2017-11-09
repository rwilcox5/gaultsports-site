var allpitches = [210,60,56,5.165102130094368,-4.387279736749572,82.6,210,6,33,6.710491948555861,-6.124500285280128,82.9,211,73,100,6.5700454161851765,-5.939606074945104,82.5,310,33,72,4.4212303936214274,3.8009372104394883,87.2,100,25,19,0.1886372139182232,8.231031310272721,92.9,211,46,79,6.137577049924079,-6.438603952769483,84.3,211,100,88,5.565281798063028,-7.355317208286504,83.8,100,40,0,0.12059944333704481,7.128846863626428,92.6,210,41,63,4.192295560287336,-7.081113657231397,83.7,110,32,34,0.34251975733786444,7.362559459204141,92.3,100,40,100,2.125039772384664,7.845684405552587,91.9,211,55,100,2.83571890940994,-8.136920519551513,83.9,100,70,68,-0.3278476341502176,7.706094064916783,93.0,211,46,42,5.26983049557438,-6.556144695593039,83.2,211,47,56,4.906129411646136,-8.179567917615875,81.9,200,45,100,3.6234176675557683,-7.139084739769691,80.7,111,31,5,0.5699341363064712,9.063118984455576,92.4,200,6,85,5.980129039880436,-5.669328425491452,83.1,211,45,49,6.497319246930589,-5.4244353918417,83.0,200,56,92,5.052712797273468,-5.9709115197696,82.8,200,64,87,5.7614497700156635,-5.489744615551116,83.6,111,25,44,0.2484717768622908,9.01571009694984,92.4,100,100,39,1.868225885429112,7.909373313275832,90.8,300,3,30,3.9846340234490403,0.4272721662569736,85.1,111,54,34,1.305054244898892,7.913841715045081,91.7];
var allabs = [0,3,543401,6,3,3,608070,7,7,3,488726,7,12,2,467793,7,17,23,457803,8,22,2,457706,8,25,0,0,0];
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