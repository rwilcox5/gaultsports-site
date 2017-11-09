var allpitches = [110,89,66,10.776800282286898,10.561609400024508,92.6,300,0,83,-2.417578203931589,5.81249770147451,82.8,310,54,58,-1.7926770684401019,7.788660824368099,83.1,100,42,0,4.50786075307656,10.268682289456272,92.7,400,34,99,8.906238468799884,4.7616879776555905,86.1,111,87,58,12.045104920888736,8.965943047959218,93.9,311,54,57,-1.9514280436700604,7.602737936859816,80.5,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,,200,66,83,-2.6263865502824606,-6.003195030301491,72.6,210,78,53,-3.076177432804951,-4.916280068817148,73.3,311,42,50,-3.7228162121843194,3.377076282658531,82.4,100,100,100,11.2171830696177,9.957841102017806,93.2,100,100,60,11.643088085663889,9.682762773145004,92.3,100,100,98,11.990256375766208,9.29332945436787,92.7,100,65,14,5.50007400447942,14.629615924470498,93.4,411,78,36,12.081818157388684,6.716926440696536,85.4,210,46,78,-3.9948970135509274,-5.017470710808341,73.9,300,14,100,0.7263398381403163,6.119308242696759,82.9,211,100,81,-5.74804704336342,-6.562186299783791,72.8,300,45,100,-3.729191797948688,3.8479669608658886,80.3,200,100,56,-5.81778493837664,-5.990658907727161,72.8,411,83,99,11.159343473089514,7.792672887978337,86.5];
var allabs = [0,20,641355,8,6,2,592626,8,7,15,523253,8,11,2,605131,8,14,14,624577,9,18,2,518586,9,19,3,571657,9,25,0,0,0];
var num_abs = 7;
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