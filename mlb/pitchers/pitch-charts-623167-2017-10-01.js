var allpitches = [110,35,24,100,100,8,100,12,55,311,66,68,300,86,93,111,36,63,111,26,30,111,64,72,100,70,91,100,85,97,111,34,65,111,90,63,111,82,54,100,37,91,300,33,100,111,59,59,100,0,23,111,55,45,100,43,99,311,88,95,111,7,50,100,3,77,111,47,43,111,44,49,111,63,72,100,6,78,300,78,100,100,0,67,110,74,79,411,30,54,311,52,91,111,54,79,300,29,100,100,31,90,311,15,88,100,36,96,311,10,97,311,65,72,100,1,76,310,24,59,311,21,29,100,23,94,310,11,60,110,74,50,300,39,100,111,14,46,300,25,72,100,86,51,100,0,39,100,0,20,311,62,81,311,51,55,111,31,57,311,12,46,100,0,15,311,87,42,411,49,58,111,36,49,311,67,81];
var allabs = [0,623167,641487,3,8,623167,601713,3,13,623167,514917,3,16,623167,546318,3,21,623167,571437,4,25,623167,656555,4,32,623167,608384,4,39,623167,596748,4,41,623167,595284,4,48,623167,641487,4,52,623167,601713,4,53,623167,514917,4,54,623167,546318,4,59,0,0,0];
var num_abs = 13;
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
        return allpitches[(firstp+ii)*3];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*3+2];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}