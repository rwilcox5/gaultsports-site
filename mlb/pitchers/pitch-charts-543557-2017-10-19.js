var allpitches = [100,40,0,8.063196627127391,10.257960283105511,91.4,111,14,51,7.226766459262824,7.765594934519148,90.9,100,16,91,9.245048183960112,9.836814709937173,92.6,111,43,47,7.975859666835804,6.534305772253152,92.6,210,68,59,-3.1393375433630757,-4.86623264814828,76.4,200,0,98,-5.133284224478316,-3.922539673056228,76.6,411,74,74,9.471823678132836,2.845531527602952,83.8,200,51,84,-4.9065322065369,-4.308231318582192,76.9,110,27,77,8.303585328956927,9.624911270605224,92.1,400,39,95,10.57313701979778,6.303811905345061,84.8,200,0,100,-5.114065594513692,-6.27267815435208,78.4,110,12,62,7.759154954267725,8.862281878537225,92.0,111,68,59,5.15531312259078,7.119710047681512,90.8,400,96,100,11.053502655710712,4.834844789784012,86.0,400,73,95,12.34911120888048,5.5569455883284755,84.8,111,49,60,8.122403369464152,8.943204473349192,92.3,111,81,39,4.482153610311744,3.676520166666168,89.1,211,76,77,-3.042579615835728,-4.893095280042852,79.2,111,53,48,3.9402023427504,6.557634120044293,90.5,110,62,76,10.427891429955096,9.316711027968564,91.7,111,74,62,3.531980793050508,2.489423197047672,88.1,211,24,95,-4.994067456499848,-5.8807859256128765,77.7,100,100,42,9.43079341285494,7.817568388843331,92.3,111,41,69,8.91421061943258,7.498437968315987,92.7,100,90,100,10.987179736741489,6.695553507057996,91.2,111,90,38,9.00467271824142,8.096713712607313,91.0,100,97,79,8.453135845337581,5.851358024897268,90.8,400,88,88,10.834921797104435,0.440322718812828,84.7,111,41,49,8.14944212532852,8.528432428003608,91.1,100,100,30,4.5414824926991395,7.325426797093044,91.6,210,78,29,-3.4845623255923925,-5.216141151035736,77.6,200,81,70,-3.783670857348276,-4.89433650527994,77.1,210,100,27,-4.963173063898032,-6.212509998924732,76.2,211,91,51,-4.007082844326036,-5.208043197878076,77.0,111,79,44,7.530006714696876,5.920172742215964,90.3,110,69,65,10.009207897899769,8.641892124354158,91.3,211,47,70,-2.835566576043084,-5.4033847986131995,76.8,200,0,100,-2.928752417545908,-1.8659464800786,78.5,200,18,100,-2.774226942051336,-3.795161290584252,78.2,100,36,85,2.07259093707144,4.4736013914774,88.6,111,100,69,9.256428841001064,8.247313051205987,92.2,111,85,57,9.721206029373564,5.72945129530014,91.5,110,43,76,6.059839536625272,9.77447209720141,91.6];
var allabs = [0,22,518586,8,4,2,571657,8,7,2,621035,8,13,2,457759,8,19,3,641355,9,22,20,624577,9,24,2,523253,9,26,23,571771,9,29,20,605131,9,34,20,518586,9,35,3,592626,9,43,0,0,0];
var num_abs = 11;
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