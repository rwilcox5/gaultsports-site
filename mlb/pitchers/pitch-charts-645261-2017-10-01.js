var allpitches = [411,45,83,-7.560869610107551,4.194856126458671,96.1,100,0,42,-7.26634953367345,3.0463065127449793,97.6,411,23,41,-7.6216707658324525,6.323618398896557,96.0,111,34,72,-8.215447135825727,3.781314727755995,97.4,300,87,82,1.0720298711588123,4.180095768031529,84.4,111,53,72,-8.298560686385029,4.849870229730115,95.6,100,0,36,-6.596031567174864,6.346282568775274,97.3,310,48,68,4.28407910559948,0.7318372624686712,83.7,111,33,60,-2.573224633183168,8.678589128420992,98.7,111,51,39,-5.422607721409365,6.69897383086351,97.8,311,69,62,4.141998785905418,2.037988452137509,85.4,410,46,83,-8.327027631795662,3.5211499538265203,88.8,100,35,88,-7.8710384257703705,3.436994320398797,96.5,110,43,56,-7.365857236770541,4.193805933518175,98.2,311,34,74,3.1017813708488067,-1.5498613324347348,86.7,110,34,59,-8.212306486374985,6.037984761477488,97.3,100,60,100,-9.993844797016166,4.351416219253039,98.4,411,53,96,-9.849100527962047,3.0179171103622418,91.2,111,62,59,-4.660322048524895,10.074801554712064,98.3,410,12,70,-7.642733926568196,2.37186631123542,91.2];
var allabs = [0,2,542340,8,1,21,519346,8,4,23,542583,8,11,2,541650,8,15,3,621433,8,20,0,0,0];
var num_abs = 5;
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