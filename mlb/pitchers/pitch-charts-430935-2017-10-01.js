var allpitches = [110,94,71,111,31,65,110,53,62,400,31,100,411,82,76,400,100,27,200,0,100,111,81,54,411,72,71,111,42,23,100,20,70,111,72,56,100,19,87,200,63,95,100,100,0,110,72,36,111,34,41,100,3,63,111,47,57,111,0,76,111,24,78,411,63,72,111,12,75,100,100,68,100,98,39,111,0,76,411,48,100,400,100,69,100,100,16,100,100,50,110,62,12,400,100,39,110,66,42,211,40,70,100,25,82,110,97,42,200,89,32,411,33,83,400,44,100,111,51,73,110,53,33,100,59,83,111,49,57,111,38,61,110,74,55,111,63,27,111,10,71,110,7,21,111,22,46,110,16,61,100,0,100,210,26,51,111,7,41,200,0,100,211,54,100,400,100,75,110,56,55,111,58,43,211,8,100];
var allabs = [0,430935,543760,1,2,430935,656305,1,9,430935,476704,1,10,430935,501981,2,12,430935,592387,2,17,430935,592192,2,23,430935,519295,2,29,430935,620439,2,34,430935,572863,3,40,430935,543760,3,43,430935,656305,3,44,430935,476704,3,47,430935,501981,3,50,430935,592387,3,55,430935,592192,3,59,0,0,0];
var num_abs = 15;
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