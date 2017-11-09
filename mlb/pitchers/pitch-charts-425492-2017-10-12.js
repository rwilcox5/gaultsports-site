var allpitches = [210,26,64,3.025066908806964,-2.787327579987096,84.9,111,13,60,-7.27868655848382,11.3662996091475,95.0,111,7,53,-9.162277074301358,8.820099341710069,95.2,111,52,45,-10.6836411168474,9.624486457118483,96.4,111,54,16,-7.950057156954192,9.57606662932512,95.5,111,28,32,-10.469526221433648,9.379596915820295,96.9,211,57,76,-0.5058111197798832,-2.6540647046570522,86.2,100,39,0,-10.514489134061785,7.659239287474836,96.3,210,49,30,5.955591881483304,-3.644355532781976,83.1,111,49,46,-12.77065072307856,8.518895166642,95.6,111,65,0,-7.379662646323668,10.911419181121872,96.5,111,73,34,-11.272771062583608,12.11525743664064,98.1,100,0,39,-8.231537265430116,8.20461063791298,97.0,100,4,31,-9.15518106418644,7.717197300925356,97.1,111,13,47,-10.945782312862391,5.914991615631048,94.5,210,38,33,4.3409533004943714,-6.283134407609149,83.5,111,50,31,-9.176019581067816,9.05180362506486,98.4,100,79,0,-6.3398573066488195,12.4411391411976,97.6,111,30,67,-13.674124850597522,7.675300917963372,97.2];
var allabs = [0,2,592178,7,3,2,519203,7,7,2,575929,8,12,2,450314,8,15,3,608365,8,19,0,0,0];
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