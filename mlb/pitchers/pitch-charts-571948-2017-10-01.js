var allpitches = [410,29,74,11.82042111339192,3.9859033605725642,82.6,100,6,56,11.502217965515328,6.685530505169112,90.4,111,68,39,11.017807192877171,6.153753323895156,89.7,100,2,68,11.148743322505297,6.88748623121724,89.8,111,52,60,12.33574926186468,5.720574168982776,89.7,200,100,57,-7.02033006103554,1.565062952898324,76.3,111,67,69,13.782580246163281,2.917064469506844,89.7,110,25,29,10.05211519599432,7.002059597874588,89.5,100,13,51,11.431692793182096,8.034474807511153,89.6,111,26,66,11.117334540682105,7.919042721876192,89.6,400,100,81,9.985312120260396,3.205476160303464,81.6,110,17,30,11.472547823364625,7.871591864209848,90.7,111,100,60,14.12008056662436,1.1004870988184807,89.0,100,100,63,12.55121316966744,1.983358908410928,89.0,111,96,50,13.543547444905922,2.612256250273044,89.0,210,88,57,-4.767463606292412,2.8284654702695518,73.3,200,0,100,-4.587795749568564,2.672335440027156,75.9,110,40,54,12.022890528290759,0.6166773521117928,89.3,111,100,38,11.659446097646125,2.287870700560272,88.3,100,0,53,11.743466353132176,5.735625798264012,88.9,411,45,92,11.731666693778616,3.415235831488548,82.4,110,23,35,10.08967192981224,7.877081492372099,89.7,100,0,42,9.457510277967577,7.29156457850058,90.0,411,75,75,10.59262163359452,4.14230681949042,81.5];
var allabs = [0,2,607369,7,3,2,493114,7,7,3,595943,7,12,3,607043,8,16,2,642086,8,19,2,621512,8,24,0,0,0];
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