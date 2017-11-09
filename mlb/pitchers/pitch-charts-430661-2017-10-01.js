var allpitches = [110,23,82,-8.896017280474414,5.460320014264787,93.5,311,22,41,3.666754084736465,0.6817985182643549,84.9,100,45,98,-10.84915001299423,4.016593020633694,93.4,100,0,56,-9.389247054832863,3.856181759593981,93.2,100,0,17,-9.245403153495278,5.369128227324323,94.2,110,56,56,-9.240059380219153,7.482272755919996,92.7,100,93,100,-11.093321658380631,6.825409861822495,93.8,111,71,54,-9.879245212153807,4.940379218181817,92.9,111,56,53,-8.03283145752693,4.982517224381811,94.0,411,31,75,-7.082600869751637,3.1780464058541837,87.1,310,79,67,1.3871792560747993,3.6164491899082627,87.9,100,34,100,-8.144983442769743,8.497572337355697,95.8,111,15,45,-5.903953939418871,6.509743452064308,93.7,311,68,100,4.221019502968055,1.2561038156460547,85.6];
var allabs = [0,20,621020,6,2,14,607054,6,7,2,608672,6,9,2,645277,6,10,3,435559,6,14,0,0,0];
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