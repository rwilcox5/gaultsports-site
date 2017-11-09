var allpitches = [100,0,72,-10.87111431970656,-2.055228158828496,92.8,111,56,47,-9.5636464152831,-2.0478324574627322,92.0,310,52,60,6.748647450612408,-2.7751598189893443,84.2,300,34,100,7.153819064933567,-2.632614775120344,84.9,300,8,100,2.493815023398288,-0.8094178189245337,84.4,300,100,82,5.286610040300964,-0.3271116605936448,85.5,100,100,75,-7.849208117099543,1.0071294323540725,92.3,100,100,100,-10.363989527687147,1.325818386791364,92.2,100,0,45,-8.131578087062303,-2.332781293179612,91.6,100,94,59,-10.170583921029337,-0.06152324886154979,90.9,100,7,97,-10.078036130955084,-0.10180827597993493,91.7,111,32,21,-10.178988708828888,-2.0209128906297478,90.7];
var allabs = [0,14,621043,3,6,14,594828,3,10,2,502210,3,12,0,0,0];
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