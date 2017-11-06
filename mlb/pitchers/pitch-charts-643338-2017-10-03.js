var allpitches = [300,95,85,111,76,45,300,100,82,311,36,26,111,59,44,111,52,17,100,2,43,110,10,51,111,62,49,111,9,35,100,10,29,110,23,62,111,69,61,110,28,51,100,86,18,111,34,29,311,54,48,100,90,0,100,1,17,310,67,36,110,45,29,111,26,27,100,0,23,300,12,93,100,0,19,111,76,59,110,28,70,111,56,55,100,75,98,100,10,9,300,59,0,111,15,24,100,72,82,111,27,65,311,67,55,300,73,16,311,69,90,100,61,80,100,35,92,111,35,45,300,85,39];
var allabs = [0,643338,621439,1,5,643338,488771,1,10,643338,543257,2,14,643338,572821,2,20,643338,408045,2,26,643338,593871,3,28,643338,592696,3,33,643338,500871,3,35,643338,596146,3,41,0,0,0];
var num_abs = 9;
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