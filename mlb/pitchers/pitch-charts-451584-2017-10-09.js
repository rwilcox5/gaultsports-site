var allpitches = [100,100,78,-0.7711408257526265,5.540166438614122,90.9,111,80,39,-5.508129701833335,10.797169808367116,94.0,111,96,82,0.8812612067854562,6.3169127385243184,91.4,100,75,100,0.04448888658196356,-2.5465879915305103,86.5,211,40,100,1.2189081107967383,-4.95557725881005,85.3,100,1,98,-7.64590572434029,6.127746213044269,94.7,111,100,73,0.3508295962338701,4.834282996037476,91.7,100,68,100,0.28036708111949527,6.0869019135121105,91.1,200,47,100,0.6318735131968795,-3.7505457493314873,85.2,110,30,31,-2.932259953206633,10.526559665307744,95.6,100,92,55,-2.9207028715682712,10.85033353989055,95.2,111,44,75,0.24908725373655743,5.759304127858972,92.4,111,46,26,-4.730533186237233,10.412076830777961,96.9];
var allabs = [0,3,502517,9,5,2,475582,9,7,2,150029,9,13,0,0,0];
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