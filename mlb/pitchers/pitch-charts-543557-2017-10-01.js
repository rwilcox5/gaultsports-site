var allpitches = [100,83,5,5.591019809768184,5.122827841045848,91.5,110,41,44,5.9003888863461835,7.160077325096148,91.9,100,100,67,10.911306474959016,4.718012307247848,91.9,111,59,41,6.701931085911564,6.23899318746912,91.1,100,95,0,7.113864288405193,7.123719385849524,90.5,111,81,21,6.405178905781019,8.444405889876863,92.2,200,15,83,-4.420219393822344,-0.5370685263962857,77.4,100,49,100,7.826702768159759,6.197577746630856,93.3,111,27,30,1.2210644552730598,9.464272151132903,90.8,111,34,59,5.231275934996376,6.387686507872129,91.3,211,41,57,-3.6296510017695605,-1.409962846360764,76.0,111,100,51,6.5068241435097836,6.747332254456344,91.6,111,60,58,9.035188544229047,8.982401974375056,91.6,200,0,79,-2.0351678417490238,-6.154663428031645,78.6,200,87,33,-4.709961415960212,-3.3413765017345085,78.0,100,65,84,9.15581280948984,6.004285126360056,91.8,111,60,42,8.704811186133611,5.8163286956134685,92.1,100,100,23,9.257362563999695,7.317252371479212,91.2,111,100,53,10.110890160451738,4.5063720686380915,91.5,411,100,36,11.191222290187392,4.119863879318448,83.4,411,78,70,10.731346137886824,2.61755345620518,84.8,211,47,73,-2.093818875282972,-1.345666477725876,77.2,111,17,24,4.287543270566868,7.3106746432724155,91.7,111,78,23,9.964795808796683,6.697076547831564,91.2,211,15,66,-1.4494895330897162,-1.247086040641932,78.0,211,20,77,-5.009356437831756,-3.8644095194332437,78.6,111,20,39,7.425742980621612,7.124222600781324,91.4,400,100,87,10.232544390695676,0.8112505602170785,84.2,211,30,60,-2.814946179385824,-3.562856863876128,78.5,100,97,91,9.089809033426908,5.488328464216656,92.1,111,47,70,8.980425147991586,4.938229185971436,91.5,100,100,28,4.589076012454668,7.076360794711213,90.8,100,100,58,8.841419318857453,4.2234162158454005,90.9,110,36,66,5.082298394513952,6.791665311736368,91.2,111,79,52,9.622292779956924,4.936225644788364,91.0,111,100,47,7.336776175624356,7.725494368466665,91.5,111,52,77,10.89818066150328,4.601483183324172,91.5];
var allabs = [0,2,571740,1,4,2,446359,1,12,2,458015,1,17,3,594807,2,21,20,553993,2,23,2,571697,2,24,2,640447,2,29,2,571466,3,31,3,592547,3,36,2,571740,3,37,0,0,0];
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