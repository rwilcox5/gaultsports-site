var allpitches = [300,80,96,0.9482451207459264,-0.19929765102949437,84.7,311,53,59,-0.23090054843073,1.1229940029349932,85.2,311,100,75,0.927918343024386,-0.0768508226515134,86.0,300,100,97,-0.3876308663385516,1.466551314685368,85.8,111,77,65,-6.221995435756309,8.651693490637296,95.1,100,18,98,-9.404554502258712,6.517092950166791,92.3,111,21,60,-10.879739957559504,5.859904363254108,91.3,110,56,76,-7.31076213527964,8.709423965035345,94.0,200,100,100,2.43172038688416,-7.119268087199556,80.8,111,58,56,-6.5066024714946,9.531665823517656,94.9,100,100,100,-1.168653705338171,-0.7977175312025964,86.1,111,45,27,-6.434308452949716,10.53583472444034,94.6];
var allabs = [0,3,572041,8,5,2,518614,8,7,3,455104,8,12,0,0,0];
var num_abs = 3;
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