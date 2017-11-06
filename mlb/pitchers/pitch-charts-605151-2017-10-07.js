var allpitches = [111,44,47,110,73,47,110,83,57,110,92,46,110,91,52,111,68,37,111,86,21,200,100,100,100,98,37,111,84,21,200,100,100,111,23,55,100,0,47,100,38,100,111,74,57,110,9,62,100,35,8,100,47,0,100,90,87,100,12,12,111,18,62,110,84,74,100,82,85,111,74,69,111,20,57,210,37,44,111,42,28,111,16,48,200,49,92,110,46,61,100,1,11,110,47,63,110,45,78,110,47,47,110,31,83,110,36,63,100,29,32,100,100,91,110,72,51,111,88,50];
var allabs = [0,605151,523253,7,1,605151,605131,7,4,605151,624577,7,12,605151,444843,7,18,605151,621035,7,24,605151,608369,7,27,605151,457759,7,28,605151,641355,8,33,605151,445276,8,36,605151,523253,8,40,0,0,0];
var num_abs = 10;
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