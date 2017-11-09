var allpitches = [111,41,47,-4.793470928760192,3.460222073983092,94.9,110,27,58,-3.6300659367718318,6.429178712603653,96.6,111,41,30,-2.705950274751552,4.8000202948688635,96.6,200,30,16,7.749269870750231,-7.436944621621164,79.8,311,80,42,6.772941227678652,2.00252378022318,87.4,311,100,100,5.953762256760096,3.414295174153284,87.6,310,23,36,6.5570705240362805,-6.844269990423456,79.9,300,0,75,5.280975478911984,0.9153142619159449,87.6,111,69,54,-6.067890791369509,6.165830960288628,96.1,100,19,91,-5.725369185925776,5.96008581686928,96.3,100,0,13,-3.6949291786066083,5.415333202154352,95.6,300,24,92,6.410528368685856,0.9732828138836629,88.1,100,0,76,-2.3901465351340683,5.98821028984014,96.2,310,58,31,7.887124957133196,-0.18649590551144762,87.8];
var allabs = [0,2,640447,9,1,3,595453,9,6,20,608385,9,9,14,571740,9,13,6,572227,9,14,0,0,0];
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