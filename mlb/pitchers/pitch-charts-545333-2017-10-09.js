var allpitches = [100,44,84,111,56,8,210,40,51,100,57,14,111,48,38,110,21,70,210,58,64,111,27,35,111,24,9,200,100,100,100,100,100,200,10,13,111,40,11,110,78,36,100,71,9,111,82,51,100,100,49,100,100,78,100,61,94,211,73,53,210,56,50,100,98,45,210,68,52,100,100,77,200,73,83,111,41,47,210,82,74,211,45,66,110,93,67,111,52,35,110,80,36,200,28,0,210,48,36,100,100,86,200,46,13,211,69,76,100,100,70,411,27,49,410,27,76,111,61,26,200,53,92,211,52,47,100,0,29,110,71,49,110,69,77,400,88,100,111,63,19,210,63,57,210,62,75,200,100,100,200,91,100,111,61,54,211,45,62,200,71,100,111,24,20,500,50,100,500,50,100,500,50,100,500,50,100];
var allabs = [0,545333,458731,1,6,545333,592450,1,13,545333,544369,1,19,545333,596142,1,20,545333,595885,2,26,545333,516770,2,28,545333,452104,2,31,545333,453943,2,36,545333,543305,2,42,545333,458731,2,47,545333,592450,2,55,545333,544369,2,59,0,0,0];
var num_abs = 12;
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