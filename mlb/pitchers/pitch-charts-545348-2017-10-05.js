var allpitches = [411,51,50,-11.694325600176033,7.406541934898906,84.7,100,100,35,-10.86602641528042,8.197184127049145,94.8,411,53,54,-10.73623688122925,5.989573297728974,83.8,111,48,52,-11.411843352897588,6.90907827144088,94.0,400,4,58,-7.892460064500893,7.412266453597684,84.3,300,100,91,-2.4983509028089674,0.9487565395058504,86.1,100,100,17,-9.32113265524852,9.499520419493326,94.6,110,75,75,-11.725856502276908,8.408955914844114,93.6,111,48,46,-10.254864059905435,8.971395853438288,94.6,100,100,100,-10.503542614667158,9.184626619653823,95.3,100,53,86,-9.26354353795116,9.551700372890476,93.4,100,36,22,-10.072147653456295,6.380264021572512,93.6,400,0,34,-10.20645720628091,4.98501761741967,84.6,110,73,55,-9.309123636880706,8.97903607365587,93.7,111,51,50,-10.268539029710082,8.418777689770018,93.9,411,39,58,-10.446320214478181,4.055409965153851,85.6,111,51,26,-10.811524856405496,6.928484601437871,94.3,111,53,42,-9.523132910292997,9.864605064065161,95.2];
var allabs = [0,23,514888,7,3,2,621043,7,4,14,594828,7,10,3,502210,7,18,0,0,0];
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