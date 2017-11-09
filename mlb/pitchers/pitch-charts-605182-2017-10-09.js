var allpitches = [100,7,44,-7.011797872812472,11.417959107638563,93.3,400,61,99,-11.62194085579333,1.7414421476125201,88.4,410,54,74,-9.327235053937516,3.859704247358801,87.9,100,0,90,-6.919081013200411,9.976097618655565,93.2,410,82,57,-10.015143545650226,1.855775196007754,87.3,400,92,100,-11.828060098484562,5.1257295101993625,88.0,111,42,40,-7.656497812155363,8.987735269732989,93.3,111,38,28,-8.198521080341866,9.924011163005357,95.3,111,100,60,-8.520477414591578,9.634328149428882,94.5,111,60,17,-6.801862810117676,5.522828988093508,94.7,310,71,33,4.314161987202079,4.766707701612914,83.0,100,15,4,-6.8915347308701715,8.247389189784737,93.7,110,31,39,-7.0598251121097615,10.830119044180163,92.3,311,62,68,2.2160905405892817,1.0804010658982761,84.0,100,14,2,-9.788673618955823,11.450584422317519,94.6,100,0,33,-7.348060015795936,10.925262430345732,94.6,400,20,75,-6.969567454629495,3.153767890459346,87.7,411,24,32,-9.160241243973818,3.7859979143907734,88.1,411,20,57,-10.856247628772866,1.2591844921190432,88.7,111,28,39,-10.285840305015615,9.702385154181032,94.5,410,15,65,-12.363499575562813,5.122687135819382,88.4,411,0,59,-9.286849210161737,8.134078811749948,89.4];
var allabs = [0,14,595885,3,6,21,516770,3,7,3,452104,3,10,14,453943,3,17,2,543305,3,19,18,458731,3,22,0,0,0];
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