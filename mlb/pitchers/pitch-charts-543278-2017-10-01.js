var allpitches = [110,49,19,5.130240866717328,12.527428143420961,88.9,100,100,31,-1.846496059124052,5.49914303911428,82.4,411,70,59,15.60380962002672,12.073128448975922,80.7,100,70,100,4.306424066540328,16.00423541957724,90.1,411,86,23,9.983456779379424,8.880763733302116,81.8,111,58,25,6.049226360218356,16.06106957719788,89.8,200,0,51,-2.137667012230752,-7.0997051671018205,77.4,200,37,100,0.05548542590384736,-6.516221938093739,77.2,111,75,23,2.200900592313012,7.162198144053985,83.6,100,38,86,8.59425761383098,16.48972026748836,89.7,100,100,6,6.102742481217468,14.1379205907066,89.9,100,97,57,5.3128486515504605,14.197160216306639,89.4,110,54,27,5.48955522280818,14.130540610262038,89.3,111,75,53,6.536958621283476,15.49896522387192,89.1,111,86,40,7.477762908935256,16.18208369869368,89.6,411,100,58,12.571159375314,9.71129201094552,81.4,411,100,69,11.280025259532852,10.755048937235088,81.6,111,52,20,6.866748938816761,15.532764129212762,89.8,211,41,67,-2.290921213207896,-4.662231363555984,78.4];
var allabs = [0,3,621439,6,5,23,488771,6,9,2,543257,6,14,3,592348,6,19,0,0,0];
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