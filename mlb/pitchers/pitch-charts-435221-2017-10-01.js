var allpitches = [100,88,66,-5.280235653845188,3.930624135020386,89.7,111,18,56,-3.6293168501551265,7.87694232542154,91.9,100,0,0,-6.593995432956795,8.136560252002075,91.0,200,11,23,8.047181598682618,-3.9870402527000444,79.3,110,11,54,-4.940116231485277,7.878593283118058,91.2,111,32,59,2.7969485733533195,5.043236065326133,90.5,100,7,38,5.523902534722368,3.084346670512078,87.0,100,47,90,-4.265443195973424,6.5130570285534475,92.7,111,47,52,-2.6821323829709955,4.274507366029779,92.0,211,61,50,5.049184605651643,2.0564655771451252,85.5,200,93,100,3.270386073891749,1.593890240075047,86.2,211,42,37,8.679189472110032,-2.390617730976891,80.5,111,47,42,0.8538207971176456,7.183699947659016,90.6,111,65,55,2.879104006402658,11.460858026409301,91.9,111,45,78,-5.537438676343048,5.463671082742764,92.4,200,24,9,12.017847366302775,-2.6366960831318256,79.4,111,48,39,2.5766614804968304,6.666611068450459,90.7,211,60,66,3.609531545579025,1.0047276558907008,86.3,211,75,47,7.030146854341531,-5.907469935259442,80.6,200,100,89,3.53489888907058,0.4590591976325161,86.1,111,42,14,-1.6191763342593135,5.757405560191712,91.3,211,68,62,6.220073288661148,1.1960657672554849,85.4,211,61,64,5.6128080225176245,-2.2987788427768443,79.1,100,53,2,1.8204153925016735,4.807293437073681,88.6,111,98,27,2.511113941923343,6.2529621441267,88.3,110,21,63,-3.6968512475024298,5.511746720871194,91.5,100,26,19,4.309732240269135,5.550672738030559,89.2,111,67,56,0.3354346398427024,4.617624936415685,90.6,211,35,46,4.963321679389949,-1.7741512740407117,84.5,211,73,78,6.844934064897149,-3.966665744366872,80.7,211,88,71,2.9387742812014146,0.3705892262717909,86.5,111,56,29,3.0201057441587245,7.574007929012313,91.0,110,89,17,-3.9163288611159635,10.267152663496502,92.3,200,71,100,4.331555589150236,-0.9037362306624164,86.3,111,77,28,-0.646781002644446,5.529516733164177,90.2,200,0,49,7.750979667022479,-3.9121204466130894,78.1,111,11,25,-4.014595409401321,9.854610745798473,93.6,111,49,46,2.828843588438673,5.861719820440727,90.9,111,70,41,0.6661658441057225,6.4951288755661025,91.1,210,35,67,9.82162922021417,-3.126135469489985,79.2,211,76,80,3.491510830726265,1.9297051827577345,85.6,110,20,31,-3.6786374474965866,8.688467098508152,93.2,111,51,52,2.9115199244609427,8.538866903944903,91.5,211,90,71,5.050196405807836,1.7852963765583465,85.4,111,24,65,-5.098272653809664,6.126912130633514,94.0];
var allabs = [0,21,596115,6,2,14,467827,6,8,2,452672,6,12,20,547172,6,14,3,642162,6,22,20,506560,7,25,22,643565,7,31,3,641857,7,37,21,606132,7,39,2,518934,7,41,2,467827,7,45,0,0,0];
var num_abs = 11;
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