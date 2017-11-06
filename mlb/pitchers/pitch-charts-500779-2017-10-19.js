var allpitches = [111,67,24,100,0,23,110,52,76,200,40,100,111,35,36,200,100,27,111,19,44,111,90,61,100,30,85,111,75,40,100,75,0,100,100,17,210,83,58,411,100,67,111,50,38,100,86,40,110,27,40,110,36,59,400,78,100,111,86,64,100,93,58,211,55,92,200,57,100,110,79,62,210,48,82,111,66,67,111,41,66,110,85,56,211,59,51,410,77,54,400,100,100,111,41,19,110,84,40,200,28,100,110,83,65,111,100,41,200,28,100,200,81,7,111,21,39,111,43,33,111,69,47,211,100,63,111,48,20,210,87,53,111,46,35,111,29,36,110,42,61,111,10,55,211,73,36,211,71,42];
var allabs = [0,500779,621035,1,9,500779,457759,1,15,500779,641355,1,20,500779,624577,1,22,500779,523253,1,26,500779,571771,2,27,500779,605131,2,29,500779,518586,2,32,500779,477132,2,36,500779,621035,3,43,500779,457759,3,45,500779,641355,3,48,500779,624577,3,50,0,0,0];
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