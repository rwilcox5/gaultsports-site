var allpitches = [411,64,69,-10.472964985138926,0.18463572840702167,90.0,100,100,85,-7.75518038713661,10.482249900296974,96.7,100,100,19,-6.222226674191491,11.245616390264995,97.5,111,58,45,-8.780930910956805,8.880745383869446,96.7,411,35,65,-11.092162964067361,1.5713442849219057,89.2,300,100,59,1.2447315811769228,3.3565827202710437,87.3,411,42,28,-8.425545014616173,2.345518393642653,89.7,111,61,54,-6.101815759735809,9.804558501707394,96.6,410,67,65,-9.545660712666551,3.9532466030517006,89.6,400,100,50,-9.685776871179042,3.152182953801752,88.5,110,80,70,-5.633447840792276,12.262511752823979,94.0,400,83,0,-10.527724984650273,4.427262896161361,89.2,411,66,60,-9.909922379067536,3.9028426337161823,90.0,400,100,50,-10.9168445034625,2.9222825146327476,89.5,411,87,39,-10.221020711946746,5.811711873612549,90.6,411,78,66,-10.223266485387498,4.1520401710440105,89.5,400,100,70,-10.723920475245784,4.093996040240523,88.7,110,70,44,-5.0485264630824975,10.703940392901542,96.1,400,71,100,-10.542943433010358,5.397588623628203,89.4,110,60,74,-5.83112020631564,10.552695325073229,96.3,411,53,92,-8.305620294884898,5.920347694014878,90.1,400,94,80,-9.31929373684054,6.230746953303209,90.5,400,100,63,-9.564457153145641,5.582369914636146,90.3,410,82,57,-9.132679463316027,4.8882228270289305,89.3,411,62,53,-10.478315310138862,3.309603544973247,89.3];
var allabs = [0,2,543807,4,1,2,608324,5,4,23,514888,5,7,20,621043,5,8,20,493329,5,15,3,594828,5,20,21,435263,5,25,0,0,0];
var num_abs = 7;
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