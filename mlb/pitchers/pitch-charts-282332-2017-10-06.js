var allpitches = [110,30,28,8.548150782645912,7.011989034747048,91.2,100,37,0,0.3632911823460072,7.791463748223348,89.8,311,39,64,-7.23180957702648,-0.0709772673591666,78.8,110,47,75,7.200656036559912,7.438899870145452,90.9,311,10,43,-6.004463942165641,2.051645901768012,80.2,100,22,84,0.02724209647621536,9.051217342843895,90.2,300,80,19,-3.784967891831832,2.22703499205168,80.5,400,0,42,6.375252397219164,7.0225547665276675,85.1,100,42,99,3.983175140998344,9.715767768692832,93.2,111,16,51,-0.03365394920791272,6.8236401263133715,91.4,100,0,57,0.6613903280962043,7.574018471330543,91.1,100,76,9,4.568798119234248,8.570176234848155,92.1,310,66,25,-6.495804856252525,1.827116910959652,81.6,111,6,31,1.9839388685583,10.274110757359981,92.0,111,77,46,6.586000380988644,5.3978818546994525,92.2,100,100,16,8.215295503976796,5.210611894922016,91.6,411,48,68,6.504429920114939,7.23253558272432,85.6,100,66,0,-0.5294078725505112,6.72515596640766,90.4,111,35,63,1.781181897156696,8.91187887601164,91.1,100,62,6,4.18766097351798,4.935890460209964,89.9,300,94,0,-3.737249807892012,4.220022287548872,81.1,111,34,49,4.452143968177716,7.299830459178744,90.6,111,18,27,-0.0379663291854882,7.727120241285119,90.3,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,,100,67,86,5.788815028893876,4.937988958454496,92.9,111,48,65,6.844784807135003,6.274921056275485,92.0,300,91,46,-5.2775593607426154,1.0288662159224855,80.3,310,91,67,-6.046747345084633,2.92241874383904,81.7,100,15,13,0.2565305612334408,5.9295745932261354,90.7,311,41,26,-10.160702705556169,0.5643351957676297,81.2,310,61,57,-8.468011728934355,-0.5883339683561928,80.3,310,66,37,-9.27889176102096,-0.8742545949187848,80.7,311,30,76,-7.052739981504791,-0.2903496204671892,80.5,100,65,11,5.955297212483928,5.65878501516288,90.5,111,23,55,5.62058400127476,5.373746021713032,90.8,111,54,30,7.468838229473965,7.71253019582106,91.8,300,100,0,-6.144649398135588,0.5575445676387359,79.6,111,31,39,-0.45583341559736157,6.148066358862493,91.0,300,100,6,-5.921597627633724,-0.10401908694386555,79.9,300,87,18,-7.6115831579323086,1.1010169669817294,79.4,111,13,63,2.9719331793615478,9.402117888303575,92.6,100,1,74,3.8102969462486405,9.296564854818852,92.6,311,75,36,-2.57325264312624,6.440858602181388,81.8,311,48,43,-6.166146488180304,2.137926128108772,81.3,410,52,68,6.278723315088817,7.850907614595852,84.5,310,78,62,-7.050933993793715,1.9817725275946918,81.5,110,37,11,3.36707714702208,7.7640822976125,92.7,111,23,24,0.48733227543046675,8.390136178954704,90.8,111,40,10,-0.3170509503826944,6.739695614495675,91.4,100,61,0,-2.256751578351864,4.859426869552644,89.4,311,64,75,-7.859804965581396,1.397045285951724,81.4,300,100,38,-6.856395563774364,-0.5260115523681648,81.1,311,38,70,-2.503859131168956,5.120866924312969,81.5,410,74,42,7.272989792733108,5.792907993789372,85.4,300,59,100,-6.8070842710515596,0.2715474522975564,80.8,111,48,30,0.553411288463418,6.384693925799423,91.0,100,0,3,0.3007269151122432,6.160525977661056,91.9,300,100,45,-7.616071245266101,-0.02569317824107404,80.8,311,31,64,-3.9482313055870923,3.140184721822704,82.9,310,82,43,-6.280735103278788,-0.5896649366363423,80.9,310,71,38,-6.665969113839276,2.2163818942424163,81.9,111,40,35,3.3155039707627676,6.998117464118712,93.4,100,41,8,1.1914018999037135,9.157391397585684,90.9,100,87,44,2.211615975585756,9.11189806936398,91.9,110,33,44,2.06198671259964,9.624526223082647,90.8,311,49,63,-4.378564740720612,5.014793710893696,80.5,311,3,89,-6.9216626998502395,2.351474817825432,82.2,100,94,0,5.371491200574372,4.94691365013594,90.7,111,39,14,6.567456133864152,7.059065277912996,92.0,111,37,6,-1.236294475652532,7.602557779350624,92.3,311,29,72,-6.434114464679988,2.104070789851572,81.2,100,91,0,6.773452745925036,5.332842075544464,91.0,400,97,47,7.003002475229412,4.591889049487956,83.7,100,33,84,1.444329655627428,6.607158759533629,90.6,100,15,91,2.881618430546784,9.619055078201617,92.0,310,17,67,-4.9611912731220364,1.685094024279504,80.9,111,98,24,6.935732069232216,4.999567270150716,91.6,111,83,41,7.3758034167068525,5.983816902424212,92.5];
var allabs = [0,18,596019,1,3,2,543401,1,5,14,608070,1,9,16,429665,1,11,20,467793,1,14,2,457803,1,15,20,457706,2,19,18,543228,2,22,2,570482,2,23,15,596019,2,27,20,543401,2,29,2,608070,2,33,3,488726,2,36,2,467793,3,41,2,457803,3,47,3,457706,3,50,3,543228,4,56,3,570482,4,62,2,596019,4,65,3,543401,5,70,2,608070,5,72,2,488726,5,74,14,467793,6,78,2,457803,6,81,0,0,0];
var num_abs = 24;
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