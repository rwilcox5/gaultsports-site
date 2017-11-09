var allpitches = [200,100,88,2.2719563008527106,-7.0010758640443,82.9,210,61,38,3.503205737125425,-10.619533712447986,81.3,110,85,39,-6.6469139598388765,10.230163069774395,99.3,211,75,41,5.3982290780508055,-8.974703521785013,82.3,100,10,43,-8.97134946859077,7.784223260705825,98.7,210,69,52,2.157427326473385,-8.543375280637306,82.8,111,19,31,-6.7691885922392645,6.156705281977872,98.3,111,39,54,-10.73598781387467,7.295483199716216,98.1,300,100,100,1.960969296396081,1.1605488340414079,90.1,111,19,17,-10.450269635254509,7.051549659142828,98.2,111,56,28,-7.347350898013589,8.859780669557106,98.9,211,50,64,2.4875287767569443,-8.147137114183607,79.7,400,84,100,-11.810399955354264,2.7284348518678336,84.1,411,23,58,-12.840609984529106,2.1114455929520446,85.0,100,91,52,-9.667431685944887,9.261393295868638,98.7,210,67,60,1.9669557252794205,-8.916520107936783,84.1,111,61,43,-9.630768890810586,8.578926752015077,99.5,111,61,20,-9.260047314639294,8.925415127757105,99.1,111,34,0,-9.282626371020042,8.912208131457223,100.0,111,60,5,-7.267386182360016,9.99774760166159,98.4,111,70,49,-7.95532471437446,8.922738797133842,99.6,300,100,78,2.2298618909081176,2.2987479610805934,88.2,211,56,75,2.678016499827712,-2.293109935069229,87.1,100,80,100,-10.365127161799554,9.595137723649836,99.3,311,84,37,0.7979822344512721,2.454075963003447,88.0];
var allabs = [0,20,493329,6,4,3,503556,6,14,20,435263,6,20,2,543807,6,23,2,608324,6,25,0,0,0];
var num_abs = 5;
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