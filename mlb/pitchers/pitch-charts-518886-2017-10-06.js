var allpitches = [111,60,49,-10.000061270029919,8.07743159181845,99.2,210,31,30,2.696303483776968,-2.4019346629342078,89.7,111,38,6,-8.856794930470775,5.09836962907176,99.0,210,54,61,2.670998687506104,-2.559678039429684,88.7,111,60,39,-10.149453618874237,8.144599899323605,99.3,211,34,61,0.9806921933269404,-7.65215128534542,88.8,111,0,51,-9.635940305251788,5.68168634740668,98.3,100,11,5,-9.543192436486464,6.203132955499427,99.4,211,36,53,3.334170930016788,-7.99556283711234,87.8,111,61,31,-9.996000646228811,6.833592957142105,99.5,111,57,21,-8.172378182896571,8.303768737443743,99.0,111,46,18,-8.417345882656404,6.432801878120472,98.7,200,34,99,3.278334025939284,-7.402607757822588,87.5,211,60,65,6.225911031577992,-2.283446841506004,87.6,110,48,70,-8.403982164082812,8.410243735565555,98.9,111,61,35,-9.745018635708096,8.246516751508176,99.4];
var allabs = [0,2,621043,8,3,20,136860,8,6,2,457727,8,12,3,493329,8,16,0,0,0];
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