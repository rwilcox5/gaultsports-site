var allpitches = [110,11,30,-5.696313339036972,11.145991484826851,97.7,100,16,2,-6.9105562622863435,10.5835610272668,97.0,400,28,8,-9.279227772826523,4.484903694424428,89.5,111,76,2,-2.71320689392122,10.494477372878196,96.7,111,27,75,-7.720332138749112,9.35189573924988,96.9,111,77,49,-6.442497380848488,10.398045543328081,98.5,111,63,21,-5.861924416079496,11.923975423145711,97.2,410,50,23,-11.107523559652728,5.270202054426695,91.2,411,59,76,-10.6931504006937,4.842143388953904,92.0,311,62,64,0.4692789146728632,-0.031965506481068044,87.0,111,64,69,-5.821226710722156,8.99017843568178,97.6,111,20,36,-4.037050773551868,13.45304874078888,96.9,300,100,75,5.562647097431016,1.870294750081944,84.8,100,8,67,-4.454450372511564,10.155750934971612,98.3,400,36,91,-12.154432770685801,1.721387842770336,90.9,111,50,64,-6.428960550962676,10.24088127894084,98.0,110,28,66,-6.18791209998672,10.092860083250327,97.8,411,64,58,-9.95672960253342,3.94443952069164,91.9,100,100,69,-5.588872686734784,12.868202949680999,98.5,111,50,34,-8.558980730652289,10.673609248324224,97.0];
var allabs = [0,2,435263,8,5,2,543807,8,6,3,502210,8,9,2,514888,9,10,21,621043,9,16,2,493329,9,18,2,608324,9,20,0,0,0];
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