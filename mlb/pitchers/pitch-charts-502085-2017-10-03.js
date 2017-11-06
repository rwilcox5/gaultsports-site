var allpitches = [200,11,49,111,49,45,211,50,91,200,2,84,200,80,100,211,68,73,210,37,57,211,88,90,100,7,71,200,14,0,111,57,73,111,21,40,211,61,81,211,69,60,211,100,76,100,13,55,210,64,59,211,27,63,210,73,57,200,100,88,211,57,93,111,14,7,211,34,76,210,14,53,111,80,70,211,78,80,211,47,100,210,52,54,211,54,64,211,16,72,111,50,38,100,14,16,111,34,38,111,71,51,211,37,54,111,45,58,111,30,44,100,0,53,200,97,100,211,23,56,211,16,100,210,11,35,110,36,30,111,24,51,211,20,100,211,48,79,100,100,100,200,11,65,211,33,34,200,78,100,211,44,44,100,100,87];
var allabs = [0,502085,621439,3,3,502085,488771,3,8,502085,543257,4,12,502085,572821,4,15,502085,408045,4,18,502085,593871,5,23,502085,592696,5,27,502085,500871,5,30,502085,596146,5,31,502085,643335,6,35,502085,488771,6,41,502085,543257,6,45,502085,572821,6,52,0,0,0];
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