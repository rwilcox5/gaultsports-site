var allpitches = [110,35,48,-3.6806584828311,9.77571334183464,94.8,300,93,91,2.919049005338172,4.58360521133934,90.0,311,100,70,4.9022919070448285,5.498205764464848,90.0,110,29,24,-4.365874173408492,5.810398410560928,96.1,310,79,50,4.125511739952744,3.7221007505864163,88.6,300,88,69,3.92577099479508,4.367195653689168,89.0,100,18,6,-5.62426462269318,6.240145262700421,94.6,311,41,49,6.914585095579464,2.94933044214162,88.2,111,63,25,-2.160986013803052,10.932022767008771,95.9,300,100,100,4.885589514480084,5.0741816670550435,90.0,300,100,100,5.99954927376762,0.3620242265579028,89.9,100,2,47,-4.411319367076872,8.158825951178892,94.5,100,43,65,0.26250640104281164,8.280316524535452,94.0,110,8,49,-4.682670237111552,10.092932134239984,95.5,311,77,74,7.502148963471564,3.015551017332552,88.5,311,64,79,6.341775902916924,2.37390211532574,89.9,100,100,66,-3.160014247387416,10.766277106384091,94.5,111,44,24,-1.8822312760766402,9.734441635039127,95.2,300,86,91,5.583524396343132,2.295950502193536,88.2,100,37,17,-0.8466929639165699,5.818959495499488,94.8,111,46,50,-0.27260135467666924,8.167844573723448,94.7,300,92,100,4.994741107498656,0.7707398645979804,88.8,300,100,100,2.9920826103110283,1.061627490283529,88.3,100,76,18,-2.449223903866332,10.342608315166812,93.4,110,39,31,-0.5631462005861496,7.966847074914373,93.2,110,55,20,-3.9808702435277405,7.0445487848522035,93.5,311,84,73,5.720103101757408,-1.436012230652304,89.8];
var allabs = [0,3,444379,7,4,14,656669,7,11,3,621559,7,16,14,607732,7,22,3,455755,7,27,0,0,0];
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