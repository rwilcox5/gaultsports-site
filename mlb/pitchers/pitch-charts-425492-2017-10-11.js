var allpitches = [100,0,3,-7.129823823365378,6.600566326431723,95.3,111,51,46,-9.770920086199004,9.891155238692505,96.4,100,93,10,-8.129053830259329,9.26725978938009,95.3,100,9,0,-7.76240557441679,5.684300560849477,96.0,100,22,0,-9.231888834646718,9.345578751358012,96.0,110,49,29,-9.474353423781812,9.683901557647264,93.5,100,63,7,-9.518218012140482,6.861380483482499,95.2,100,10,33,-8.883131784333699,6.99051259901164,95.3,111,25,47,-6.7175710506624675,8.219234335061872,95.8,210,62,33,3.885170372741065,-4.579716274219566,82.4,400,81,100,-10.18804749784082,9.283688645158797,86.2,200,100,100,2.2727596565439234,-6.844183198546961,83.4,110,45,62,-6.267674838794823,12.254145756765336,96.9,111,32,16,-8.88466074523409,11.75865736953142,96.7,211,59,22,0.7697457819076521,-6.087777913931306,83.7,210,23,41,0.4218299373233262,-7.138103205269568,82.2,111,79,32,-7.360799728492916,12.513904040594753,94.8,111,80,22,-8.898325378738253,8.425500399948447,96.7,400,17,100,-10.770177453342535,7.322183954109491,87.2,111,32,43,-9.715465091020253,5.526954781155435,96.1,211,88,65,1.3474433051820074,-7.332722596610642,83.3,400,40,69,-9.385223790961001,8.175743281485845,85.7,111,53,26,-9.530683703817974,8.690267720846764,96.4,211,89,60,0.0887453907413828,-5.768167674485368,84.3,111,71,12,-11.342079329222038,8.095856305124546,96.9,400,65,100,-12.98495552338613,9.533593420523806,87.8,111,80,60,-10.697906056898768,9.008257993853821,96.1];
var allabs = [0,2,595879,8,2,14,664023,8,7,16,445055,8,12,3,592178,8,15,2,519203,8,27,0,0,0];
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