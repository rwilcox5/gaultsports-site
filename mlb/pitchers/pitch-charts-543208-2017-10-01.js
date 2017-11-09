var allpitches = [100,90,56,-12.285939952060168,6.463364422265011,90.6,300,91,94,1.988903052782613,-4.302802276505608,80.8,100,89,29,-7.906448687987797,8.72558227986065,90.1,100,58,13,-5.624183676994063,10.222372499787468,88.7,110,77,48,-9.622905725968277,7.189231465491739,89.1,111,26,53,-11.382903643984225,7.611113051030133,89.2,200,82,100,-0.590360397929218,-2.7213313460419988,79.9,100,96,100,-12.470507372157975,5.292809565964142,91.2,100,95,82,-11.261165848015484,2.3924691247423273,89.7,111,60,80,-9.947249152348022,5.581949528423183,90.1,100,68,94,-9.820791043865725,5.24524460059025,89.3,300,84,78,-2.384468766222384,1.577104238100528,84.5,100,49,84,-12.93555349642751,3.8461629157163,89.5,100,95,66,-8.138577231036596,6.329939679243243,89.8,110,79,62,-9.733521845086093,4.742819044782039,88.5,111,56,70,-11.225815671795614,3.418786387874542,89.0,111,45,66,-12.832749654165724,4.524306049343777,90.0,311,72,66,-2.3970426932313043,1.4191417455630462,84.2,110,46,78,-11.807961483784744,5.531618973034685,90.9,311,55,90,-4.8102946887882085,2.192699859130363,85.3,100,100,66,-9.882914736698897,4.613929092856653,89.9,111,23,71,-9.054287083826317,1.0614406212492185,90.6,311,62,77,-2.798243238217743,0.7661686736850375,84.5,100,11,98,-11.63417538260715,4.239636383473676,89.8,111,44,76,-10.882292410220456,3.1548393394963146,90.2];
var allabs = [0,14,592273,8,4,14,518614,8,11,20,543302,8,17,2,489267,8,18,2,453923,8,22,2,502117,8,25,0,0,0];
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