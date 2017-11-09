var allpitches = [211,46,30,0.1444061881161888,-5.543343642339324,78.7,400,90,0,-1.4327610394213919,10.349058100240404,92.6,100,78,0,-2.528642538920112,11.205584528251727,93.3,200,80,89,-0.8679609404708231,-6.652330233593377,79.5,111,30,24,-5.046754672541664,10.361918624012796,95.1,500,100,0,-3.944149944642192,11.230013947343965,88.8,211,55,11,0.2304495079377456,-7.49030642598942,79.7,111,82,49,-4.196829578073528,12.04111565109552,94.4,200,79,100,0.7797883410479867,-6.7626596398892405,81.5,211,50,75,0.9881337658140013,-7.271830638983063,81.9,200,68,100,0.2493556422799788,-7.211855751070823,82.7,211,51,91,-0.01500867634240416,-5.796440661748428,81.9,110,80,48,-1.7845482566089441,11.6614162880892,93.7,211,85,61,2.1477860604836163,-6.4538669825296076,79.2,100,77,0,-4.037981392166628,12.049455995502479,94.6,111,71,0,-1.8715270318857118,12.843112579610521,94.1,210,76,76,2.519481974812956,-6.01285256527458,80.1,210,94,63,3.435492704552592,-5.6283976581750474,80.7,100,76,18,-4.605225272553708,11.265733188985392,93.1,200,82,100,-2.91078210385944,-5.935502222323884,82.4,111,42,27,-2.459061792609444,11.983961557309788,95.0,200,100,100,0.9133792414147632,-7.679781558596892,80.9,111,44,23,-6.09466747182732,11.224589442893304,94.2,111,56,28,-5.8770000703725245,11.274751607945568,94.9,111,58,25,-6.5509918169031724,10.790650409596427,94.1];
var allabs = [0,2,493329,7,5,3,608324,7,12,3,643603,8,16,3,545358,8,21,3,605204,8,25,0,0,0];
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