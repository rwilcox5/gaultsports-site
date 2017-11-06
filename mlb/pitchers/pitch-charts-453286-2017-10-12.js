var allpitches = [310,84,45,100,92,50,311,70,35,111,100,32,111,19,26,411,34,74,111,63,34,111,100,41,111,66,16,110,13,42,100,82,56,411,50,77,100,100,48,111,56,30,111,46,31,411,12,47,100,82,21,100,0,7,500,50,100,500,50,100,111,71,7,311,66,52,311,64,87,110,62,67,100,96,0,111,97,55,100,0,18,111,49,46,100,100,75,111,5,27];
var allabs = [0,453286,592178,5,3,453286,519203,5,6,453286,575929,5,9,453286,450314,5,15,453286,608365,5,16,453286,518792,5,20,453286,595879,5,23,453286,600303,5,26,453286,445055,5,29,453286,592178,5,30,0,0,0];
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