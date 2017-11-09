var allpitches = [110,40,37,1.2567669754471806,4.264141786016025,96.6,111,100,42,1.6413809488015767,4.687100011570919,97.0,111,93,63,1.1201895124756038,4.9075449917024265,97.4,111,39,20,4.130358724148179,7.456841468105733,97.5,100,100,83,-0.6028134594465941,8.10903547372026,96.9,111,100,91,1.2125351997806537,7.077332264592605,95.5,111,61,49,3.1190297905983937,8.829594437510211,95.5,100,65,20,0.05997751314718684,7.131732708268469,97.1,110,48,24,0.193777241599503,8.098331471743847,97.1,311,47,52,8.533764615523825,1.4576672816819016,84.2,110,12,76,0.235720414247857,6.210595181237541,97.3,100,100,45,0.7876518009342313,4.794081047357332,95.9,100,99,98,1.856177948716562,6.7250063729704594,96.7,100,0,60,1.124788570953192,5.662566726213935,96.6,110,74,64,0.5051084445899877,7.973866656964388,97.8,110,92,75,0.07743681611040902,8.000676188511983,98.1,110,61,31,1.03500786907312,4.6307548423574785,94.5,110,81,74,1.082640142653998,4.247176849308889,94.9,111,45,39,1.1764961295704586,5.943541088579718,97.5,300,73,100,8.715512756335794,2.4128601490680275,84.3,310,76,42,8.26833824015534,-1.887190233516785,82.8,111,44,25,2.1010706988598797,6.802531181051124,95.6,100,100,86,1.479181696632717,6.847453223327621,97.7,100,97,33,1.4970073794669814,7.013915246289834,97.5,311,69,100,8.427845691049827,0.6720133152676062,85.2];
var allabs = [0,3,452104,6,4,2,453943,7,7,20,458731,7,10,3,592450,7,16,2,544369,8,19,3,596142,8,25,0,0,0];
var num_abs = 6;
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