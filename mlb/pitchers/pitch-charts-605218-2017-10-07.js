var allpitches = [110,36,24,0.5089616439797275,11.490197094337104,94.8,111,74,28,-2.1156599204656863,12.869822274028351,96.3,111,59,71,-2.5048007440213347,11.856235124850148,96.4,111,94,43,-2.5407235053711674,12.515165584511195,96.1,100,68,72,-2.602601822116692,14.351731170290048,96.4,100,100,52,-3.3326338373500493,11.90907737529848,96.3,211,100,100,3.28781567035297,-4.296202531204837,79.8,211,32,83,7.593249140585273,-6.15769465373112,79.2,211,80,100,2.6666975238424264,-2.02870120644236,80.2,100,94,100,-1.3583225360315505,12.629375195797554,95.6,100,100,7,-1.8107350714018713,8.592717830997369,94.4,100,82,0,-2.4701568712366884,9.379783369858393,94.5,211,54,33,5.187635628537526,-3.4244038685155456,80.4,111,52,36,-0.9807707983535923,12.897961967005628,96.9,111,93,38,-1.7578328320422292,9.072535928265543,95.8,100,100,35,0.24088616286484588,7.4494403637805755,95.6,111,46,36,-1.2580245962434784,11.666628949107462,96.9,200,21,98,4.7718829860836784,-6.0324802518486775,81.2,100,69,11,-0.9894423279309379,9.154921540137476,95.0,111,39,43,1.3600316187982013,10.107964843572313,95.3,200,72,100,1.5788286497143407,-5.866110999648305,81.8];
var allabs = [0,20,452252,8,3,3,607208,8,8,23,547180,8,13,14,543685,8,21,0,0,0];
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