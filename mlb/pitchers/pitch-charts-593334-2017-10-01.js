var allpitches = [110,2,52,100,1,83,411,43,71,111,51,71,211,100,87,111,56,19,211,79,52,110,53,85,100,0,94,200,66,96,100,91,87,111,46,30,211,68,100,100,11,10,411,22,48,200,40,82,100,0,49,110,6,45,411,50,85,100,55,98,210,16,36,211,48,69,111,5,32,111,60,41,111,11,40,211,20,47,210,27,58,100,91,46,411,45,64,111,63,23];
var allabs = [0,593334,459431,7,4,593334,607257,7,7,593334,608701,8,13,593334,485567,8,20,593334,446381,8,23,593334,572365,8,26,593334,606192,8,30,0,0,0];
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